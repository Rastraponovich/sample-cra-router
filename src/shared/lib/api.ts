import axios from "axios"
import type { TReserve, TReservesParams } from "entities/booking/lib"
import type { TCredentialUser, TRegistrationCredential } from "entities/auth/lib"
import type { TUser } from "entities/user/lib"
import { Rule } from "effector-forms"

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
        if (error.response.status === 401 && error.config && !error.config._isRetry) {
            originalRequest._isRetry = true
            try {
                const response = await axios.get<AuthResponse>(`${API_URL}/auth/refresh`, { withCredentials: true })

                localStorage.setItem("token", response.data.accessToken)
                return bookingAPIInstance.request(originalRequest)
            } catch (e) {
                localStorage.removeItem("token")
            }
        }
        throw error
    }
)

export const login = async (cred: TCredentialUser) => {
    return await bookingAPIInstance.post("/auth/login", cred)
}

export const getMe = async () => await bookingAPIInstance.get("/auth/profile")

export const registration = async (user: TRegistrationCredential) =>
    await bookingAPIInstance.post("/auth/registration", user)

export const logout = async () => {
    const req = await bookingAPIInstance.post("/auth/logout")

    if (req.status < 400) localStorage.removeItem("token")

    return req
}

export const getReserves = async (params?: TReservesParams) => await bookingAPIInstance.get("/reserves", { params })
export const getReserve = async (id: number) => await bookingAPIInstance.get("/reserves", { params: id })

export const getTables = async (id: number | void) => await bookingAPIInstance.get("/tables", { params: { id } })

export const deleteReserve = async (id: number) => bookingAPIInstance.delete(`/reserves/${id}`)

export const deleteSelectedReserves = async (ids: Array<number>) => bookingAPIInstance.post("/reserves/selected", ids)

export const deleteAllReserves = async () => bookingAPIInstance.delete("/reserves/all")

export const getHallplanes = async () => bookingAPIInstance.get("/hallplanes")

export const postReserve = async (reserve: TReserve) => await bookingAPIInstance.post("/reserves", reserve)

export const modifyUser = async ({ id, ...user }: TUser) => await bookingAPIInstance.patch(`/users/${id}`, { ...user })

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
