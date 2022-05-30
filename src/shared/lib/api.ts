import dayjs from "dayjs"
import weekOfYear from "dayjs/plugin/weekOfYear"

import duration from "dayjs/plugin/duration"
import relativeTime from "dayjs/plugin/relativeTime"
import ru from "dayjs/locale/ru"
import axios, { AxiosResponse } from "axios"
import { createEffect } from "effector"
import { THallplane, TTable } from "entities/booking/lib"
dayjs.extend(weekOfYear)

dayjs.extend(duration)
dayjs.extend(relativeTime)
dayjs.locale(ru)

export const daysJS = dayjs

const bookingAPIInstance = axios.create({ baseURL: "http://localhost:4000" })

const getReserves = async () => await bookingAPIInstance.get("/reserves")
const getReserve = async (id: number) =>
    await bookingAPIInstance.get("/reserves", { params: id })

const getTables = async (id?: number | void) =>
    await bookingAPIInstance.get("/tables", { params: { id } })

const getTablesFx = createEffect<
    number | never | void,
    AxiosResponse<[Array<TTable>, number]>,
    Error
>(getTables)

const getHallplanes = async () => bookingAPIInstance.get("/hallplanes")

const getHallplanesFx = createEffect<
    void,
    AxiosResponse<[Array<THallplane>, number], Error>
>(getHallplanes)

export const BookingAPI = {
    getReserves,
    getReserve,
    getTablesFx,
    getHallplanesFx,
}
