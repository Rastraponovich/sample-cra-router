import { attach } from "effector"
import { BookingAPI } from "shared/lib/api"

export const getHallplanesFx = attach({
    effect: BookingAPI.getHallplanesFx,
})

export const getTablesFx = attach<number, typeof BookingAPI.getTablesFx>({
    effect: BookingAPI.getTablesFx,
    mapParams: (id) => id,
})
export const PostReserveFx = attach({
    effect: BookingAPI.postReserveFx,
})
