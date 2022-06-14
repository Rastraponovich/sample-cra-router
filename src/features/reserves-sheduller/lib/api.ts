import { AxiosResponse } from "axios"
import { attach, createEffect } from "effector"
import { bookingLib, bookingModel } from "entities/booking"
import { TReservesParams } from "entities/booking/lib"
import { BookingAPI } from "shared/lib/api"

export const getTablesFx = attach<number, typeof BookingAPI.getTablesFx>({
    effect: BookingAPI.getTablesFx,
    mapParams: (id) => id,
})

export const getHallplanesFx = attach({
    effect: BookingAPI.getHallplanesFx,
})

const getReservesFx = createEffect<TReservesParams, AxiosResponse<any>, Error>(
    BookingAPI.getReserves
)

export const getReservesByTableFx = attach<
    Partial<TReservesParams>,
    typeof getReservesFx
>({
    effect: getReservesFx,
    mapParams: (params) => params,
})
