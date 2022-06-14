import { attach } from "effector"
import { bookingLib } from "entities/booking"

export const getHallplanesFx = attach({
    effect: bookingLib.API.getHallplanesFx,
})

export const getTablesFx = attach<number, typeof bookingLib.API.getTablesFx>({
    effect: bookingLib.API.getTablesFx,
    mapParams: (id) => id,
})
export const PostReserveFx = attach({
    effect: bookingLib.API.postReserveFx,
})
