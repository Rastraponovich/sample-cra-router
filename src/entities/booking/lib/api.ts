import { AxiosResponse } from "axios"
import { attach, createEffect } from "effector"
import { BookingAPI } from "shared/lib/api"
import { TReserve, TTable } from "./models"

export const getReservesFx = createEffect<
    void,
    AxiosResponse<[Array<TReserve>, number], Error>
>(BookingAPI.getReserves)

export const getReserveFx = createEffect<number, AxiosResponse<TReserve>>(
    BookingAPI.getReserve
)

export const getTablesFx = attach({
    effect: BookingAPI.getTablesFx,
})
