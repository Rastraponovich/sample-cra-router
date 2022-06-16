import { TReserve } from "entities/booking/lib"
import { daysJS } from "./dayjs"
import type { TRoute } from "./models"

export const routes: TRoute[] = [
    { id: 1, path: "/", title: "главная" },

    { id: 2, path: "/booking", title: "бронирование" },
]

export const privateRoutes: TRoute[] = []

export const weekFilter = (reserve: TReserve, currentWeek: number): boolean => {
    return daysJS(Number(reserve.startDate)).week() === currentWeek
}

export const dayFilter = (reserve: TReserve, dayOfWeek: number): boolean => {
    return daysJS(Number(reserve.startDate)).day() === dayOfWeek
}

export const _translateDict_: Record<string, string> = {
    "/": "Booking",
    booking: "Резервы",
    scheduller: "Расписание",
    add: "Новый резерв",
}
