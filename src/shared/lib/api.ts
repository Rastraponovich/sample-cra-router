import dayjs from "dayjs"
import weekOfYear from "dayjs/plugin/weekOfYear"

import duration from "dayjs/plugin/duration"
import relativeTime from "dayjs/plugin/relativeTime"
import ru from "dayjs/locale/ru"
import axios, { AxiosResponse } from "axios"
import { createEffect, sample } from "effector"
import { THallplane, TReserve, TTable } from "entities/booking/lib"
dayjs.extend(weekOfYear)

dayjs.extend(duration)
dayjs.extend(relativeTime)
dayjs.locale(ru)

export const daysJS = dayjs

const bookingAPIInstance = axios.create({ baseURL: "http://localhost:4000" })

type TParams = {
    withDeleted?: boolean
}

const getReserves = async (params?: TParams) =>
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

export const BookingAPI = {
    getReserves,
    getReserve,
    getTablesFx,
    postReserveFx,
    getHallplanesFx,
    deleteReserveByIdFx,
    deleteAllReservesFx,
    deleteSelectedReservesFx,
}
