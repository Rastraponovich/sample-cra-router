import { attach } from "effector"
import { BookingAPI } from "shared/lib/api"

export const getTablesFx = attach<number, typeof BookingAPI.getTablesFx>({
    effect: BookingAPI.getTablesFx,
    mapParams: (id) => id,
})

export const getHallplanesFx = attach({
    effect: BookingAPI.getHallplanesFx,
})
