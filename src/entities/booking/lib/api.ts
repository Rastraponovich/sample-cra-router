import { AxiosResponse } from "axios"
import { attach, createEffect, Effect, sample } from "effector"
import { BookingAPI } from "shared/lib/api"
import { TReserve, TReservesParams, TTable } from "./models"

export const getReservesFx = createEffect<
    TReservesParams,
    AxiosResponse<[Array<TReserve>, number], Error>
>(BookingAPI.getReserves)

export const getFliteredReservesFx = createEffect<
    TReservesParams,
    AxiosResponse<[Array<TReserve>, number], Error>
>(BookingAPI.getReserves)

export const getReserveFx = createEffect<number, AxiosResponse<TReserve>>(
    BookingAPI.getReserve
)

export const getTablesFx = attach({
    effect: BookingAPI.getTablesFx,
})

export const getHallPlanesFx = attach({
    effect: BookingAPI.getHallplanesFx,
})

export const PostReserveFx = attach({
    effect: BookingAPI.postReserveFx,
})

export const deleteReserveById = attach({
    effect: BookingAPI.deleteReserveByIdFx,
})

sample({
    clock: [
        BookingAPI.postReserveFx.doneData,
        BookingAPI.deleteReserveByIdFx.doneData,
        BookingAPI.deleteAllReservesFx.doneData,
        BookingAPI.deleteSelectedReservesFx.doneData,
    ],
    fn: () => ({}),
    target: getReservesFx,
})
