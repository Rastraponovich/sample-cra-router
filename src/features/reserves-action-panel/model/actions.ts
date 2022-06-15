import { createEvent, sample } from "effector"
import { bookingLib, bookingModel } from "entities/booking"
import type { TReserve } from "entities/booking/lib"
import { reservesFilterModel } from "features/reserves-filters"

export const toggleComactClicked = createEvent()

bookingModel.$compacted.on(toggleComactClicked, (state, _) => !state)

export const deleteAllReservesClicked = createEvent()

sample({
    clock: deleteAllReservesClicked,
    target: bookingLib.API.deleteAllReservesFx,
})

export const deleteSelectedReservesClicked = createEvent()

//TODO rework api
sample({
    clock: deleteSelectedReservesClicked,
    source: bookingModel.$selectedReserves,
    fn: (selected, _) => selected,
    target: bookingLib.API.deleteSelectedReservesFx,
})

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
        if (filteredReserves.length === selectedReserves.length) return []
        return filteredReserves.map((reserve) => reserve.id)
    },

    target: bookingModel.$selectedReserves,
})

bookingModel.$selectedReserves.reset([
    bookingLib.API.deleteReserveByIdFx.doneData,
    bookingLib.API.deleteAllReservesFx.doneData,
    resetAllFiltersClicked,
])
//bad practice
reservesFilterModel.$selectedHallPlanes.reset(resetAllFiltersClicked)
reservesFilterModel.$selectedPrepay.reset(resetAllFiltersClicked)
