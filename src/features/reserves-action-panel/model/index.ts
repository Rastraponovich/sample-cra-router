import { createEvent, sample } from "effector"
import { bookingModel } from "entities/booking"
import type { TReserve } from "entities/booking/lib"

export const toggleComactClicked = createEvent()

bookingModel.$compacted.on(toggleComactClicked, (state, _) => !state)

export const deleteAllReservesClicked = createEvent()

bookingModel.$reserves.reset(deleteAllReservesClicked)

export const deleteSelectedReservesClicked = createEvent()

const resetSelectedSereves = sample({
    clock: deleteSelectedReservesClicked,
    source: [bookingModel.$selectedReserves, bookingModel.$reserves],

    //@ts-ignore
    fn: ([selected, reserves]: [Array<number>, Array<TReserve>], _) => {
        return reserves.filter((item) => !selected.some((s) => s === item.id))
    },
    target: bookingModel.$reserves,
})

bookingModel.$selectedReserves.reset(resetSelectedSereves)

export const resetAllFiltersClicked = createEvent()

export const selectAllReservesClicked = createEvent()

sample({
    clock: selectAllReservesClicked,
    source: [bookingModel.$filteredReserves, bookingModel.$selectedReserves],
    //@ts-ignore
    fn: (
        [filteredReserves, selectedReserves]: [Array<TReserve>, Array<number>],
        _
    ) => {
        const selectedAll = filteredReserves.length === selectedReserves.length

        if (selectedAll) return []

        return filteredReserves.map((reserve) => reserve.id)
    },

    target: bookingModel.$selectedReserves,
})

bookingModel.$selectedReserves.reset(resetAllFiltersClicked)
