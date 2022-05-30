import { AxiosResponse } from "axios"
import { attach, createEffect, Effect } from "effector"
import { TTable } from "entities/booking/lib"
import { BookingAPI } from "shared/lib/api"

export const getHallplanesFx = attach({
    effect: BookingAPI.getHallplanesFx,
})

export const getTablesFx = attach<number, typeof BookingAPI.getTablesFx>({
    effect: BookingAPI.getTablesFx,
    mapParams: (id) => id,
})
