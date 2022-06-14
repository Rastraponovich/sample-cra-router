import dayjs from "dayjs"
import weekOfYear from "dayjs/plugin/weekOfYear"

import duration from "dayjs/plugin/duration"
import relativeTime from "dayjs/plugin/relativeTime"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import localeData from "dayjs/plugin/localeData"

import ru from "dayjs/locale/ru"
import axios, { AxiosResponse } from "axios"
import { createEffect } from "effector"
import {
    THallplane,
    TReserve,
    TReservesParams,
    TTable,
} from "entities/booking/lib"
import { TCredentialUser, TRegistrationCredential } from "entities/auth/lib"
import { TUser } from "entities/user/lib"
import { Rule } from "effector-forms/dist-types"
dayjs.extend(weekOfYear)
dayjs.extend(localeData)
dayjs.extend(duration)
dayjs.extend(relativeTime)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault(dayjs.tz.guess())
dayjs.locale(ru)

export const daysJS = dayjs

const API_URL = "http://localhost:4000"

const bookingAPIInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
})

type TAccessToken = {
    accessToken: string
}
type AuthResponse = TAccessToken

bookingAPIInstance.interceptors.request.use((config: any) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
    return config
})

bookingAPIInstance.interceptors.response.use(
    (config) => {
        return config
    },
    async (error) => {
        const originalRequest = error.config
        if (
            error.response.status === 401 &&
            error.config &&
            !error.config._isRetry
        ) {
            originalRequest._isRetry = true
            try {
                const response = await axios.get<AuthResponse>(
                    `${API_URL}/auth/refresh`,
                    { withCredentials: true }
                )

                localStorage.setItem("token", response.data.accessToken)
                return bookingAPIInstance.request(originalRequest)
            } catch (e) {
                localStorage.removeItem("token")
            }
        }
        throw error
    }
)

const login = async (cred: TCredentialUser) => {
    return await bookingAPIInstance.post("/auth/login", cred)
}

const getMe = async () => await bookingAPIInstance.get("/auth/profile")

const registration = async (user: TRegistrationCredential) =>
    await bookingAPIInstance.post("/auth/registration", user)

const logout = async () => {
    const req = await bookingAPIInstance.post("/auth/logout")

    if (req.status < 400) localStorage.removeItem("token")

    return req
}

const getReserves = async (params?: TReservesParams) =>
    await bookingAPIInstance.get("/reserves", { params })
const getReserve = async (id: number) =>
    await bookingAPIInstance.get("/reserves", { params: id })

const getTables = async (id: number | void) =>
    await bookingAPIInstance.get("/tables", { params: { id } })

const deleteReserve = async (id: number) =>
    bookingAPIInstance.delete(`/reserves/${id}`)

const deleteSelectedReserves = async (ids: Array<number>) =>
    bookingAPIInstance.post("/reserves/selected", ids)

const deleteAllReserves = async () => bookingAPIInstance.delete("/reserves/all")

const getHallplanes = async () => bookingAPIInstance.get("/hallplanes")

const postReserve = async (reserve: TReserve) =>
    await bookingAPIInstance.post("/reserves", reserve)

const getTablesFx = createEffect<
    number | never | void,
    AxiosResponse<[Array<TTable>, number]>,
    Error
>(getTables)
const getHallplanesFx = createEffect<
    void,
    AxiosResponse<[Array<THallplane>, number], Error>
>(getHallplanes)

const postReserveFx = createEffect<TReserve, AxiosResponse<TReserve>, Error>(
    postReserve
)

const deleteReserveByIdFx = createEffect<number, AxiosResponse<any>, Error>(
    deleteReserve
)

const deleteAllReservesFx = createEffect(deleteAllReserves)
const deleteSelectedReservesFx = createEffect<
    Array<number>,
    AxiosResponse<any>,
    Error
>(deleteSelectedReserves)

const modifyUser = async ({ id, ...user }: TUser) =>
    await bookingAPIInstance.patch(`/users/${id}`, { ...user })

export const BookingAPI = {
    getMe,
    login,
    logout,
    modifyUser,
    getReserve,
    getReserves,
    getTablesFx,
    registration,
    postReserveFx,
    getHallplanesFx,
    deleteReserveByIdFx,
    deleteAllReservesFx,
    deleteSelectedReservesFx,
}

export const rules = {
    required: (): Rule<string> => ({
        name: "required",
        validator: (value) => Boolean(value),
    }),
    email: (): Rule<string | any> => ({
        name: "email",
        validator: (value) => ({
            isValid: /\S+@\S+\.\S+/.test(value),
            errorText: "email is not correct",
        }),
    }),
    minLength: (min: number): Rule<string | any> => ({
        name: "minLength",
        validator: (value) => ({
            isValid: value.length >= min,
            errorText: "length must be > 0",
        }),
    }),
    maxLength: (max: number): Rule<string | any> => ({
        name: "maxLength",
        validator: (value) => ({
            isValid: value.length <= max,
            errorText: "length > max capacity",
        }),
    }),
}
