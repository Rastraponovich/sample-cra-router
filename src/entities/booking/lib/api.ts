import { AxiosResponse } from "axios"
import { createEffect, sample } from "effector"
import { BookingAPI } from "shared/lib"
import { THallplane, TReserve, TReservesParams, TTable } from "./models"

export const getReservesFx = createEffect<TReservesParams, AxiosResponse<[Array<TReserve>, number], Error>>(
    BookingAPI.getReserves
)

export const getFliteredReservesFx = createEffect<TReservesParams, AxiosResponse<[Array<TReserve>, number], Error>>(
    BookingAPI.getReserves
)

export const getReserveFx = createEffect<number, AxiosResponse<TReserve>>(BookingAPI.getReserve)

export const deleteAllReservesFx = createEffect(BookingAPI.deleteAllReserves)

export const getHallplanesFx = createEffect<void, AxiosResponse<[Array<THallplane>, number], Error>>(
    BookingAPI.getHallplanes
)

export const getTablesFx = createEffect<number | never | void, AxiosResponse<[Array<TTable>, number]>, Error>(
    BookingAPI.getTables
)

export const deleteReserveByIdFx = createEffect<number, AxiosResponse<any>, Error>(BookingAPI.deleteReserve)

export const deleteSelectedReservesFx = createEffect<Array<number>, AxiosResponse<any>, Error>(
    BookingAPI.deleteSelectedReserves
)

export const postReserveFx = createEffect<TReserve, AxiosResponse<TReserve>, Error>(BookingAPI.postReserve)

sample({
    clock: [
        postReserveFx.doneData,
        deleteReserveByIdFx.doneData,
        deleteAllReservesFx.doneData,
        deleteSelectedReservesFx.doneData,
    ],
    fn: () => ({}),
    target: getReservesFx,
})
