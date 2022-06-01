import { createEvent, sample } from "effector"
import { bookingModel } from "entities/booking"
import type { TReserve } from "entities/booking/lib"
import { reservesFilterModel } from "features/reserves-filters"
import { BookingAPI } from "shared/lib/api"

export const toggleComactClicked = createEvent()

bookingModel.$compacted.on(toggleComactClicked, (state, _) => !state)

export const deleteAllReservesClicked = createEvent()

sample({
    clock: deleteAllReservesClicked,
    target: BookingAPI.deleteAllReservesFx,
})

export const deleteSelectedReservesClicked = createEvent()

sample({
    clock: deleteSelectedReservesClicked,
    source: bookingModel.$selectedReserves,
    fn: (selected, _) => selected,
    target: BookingAPI.deleteSelectedReservesFx,
})

export const resetAllFiltersClicked = createEvent()

export const selectAllReservesClicked = createEvent()

sample({
    clock: selectAllReservesClicked,
    source: [bookingModel.$filteredReserves, bookingModel.$selectedReserves],
    //@ts-ignore
    fn: ([filteredReserves, selectedReserves]: [Array<TReserve>, Array<number>], _) => {
        const selectedAll = filteredReserves.length === selectedReserves.length

        if (selectedAll) return []

        return filteredReserves.map((reserve) => reserve.id)
    },

    target: bookingModel.$selectedReserves,
})

bookingModel.$selectedReserves.reset([
    BookingAPI.deleteReserveByIdFx.doneData,
    BookingAPI.deleteAllReservesFx.doneData,
    resetAllFiltersClicked,
])

reservesFilterModel.$selectedHallPlanes.reset(resetAllFiltersClicked)
reservesFilterModel.$selectedPrepay.reset(resetAllFiltersClicked)
