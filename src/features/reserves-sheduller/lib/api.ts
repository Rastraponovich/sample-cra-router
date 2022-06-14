import { attach } from "effector"
import { bookingLib } from "entities/booking"
import { TReservesParams } from "entities/booking/lib"

export const getTablesFx = attach<number, typeof bookingLib.API.getTablesFx>({
    effect: bookingLib.API.getTablesFx,
    mapParams: (id) => id,
})

export const getHallplanesFx = attach({
    effect: bookingLib.API.getHallplanesFx,
})

export const getReservesByTableFx = attach<Partial<TReservesParams>, typeof bookingLib.API.getReservesFx>({
    effect: bookingLib.API.getReservesFx,
    mapParams: (params) => params,
})
