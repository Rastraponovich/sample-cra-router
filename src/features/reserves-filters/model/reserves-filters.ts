import { combine, createDomain, createEvent, sample } from "effector"
import { useStore } from "effector-react"
import { bookingLib, bookingModel } from "entities/booking"
import {
    THallplane,
    TPrepay,
    TReservesParams,
    _prepaysDict_,
} from "entities/booking/lib"
import { resetAllFiltersClicked } from "features/reserves-action-panel"

const filtersDomain = createDomain("filtersDomain")

const toggleVisibledFiltersClicked = filtersDomain.createEvent()
const $visibledFilters = filtersDomain
    .createStore<boolean>(false)
    .on(toggleVisibledFiltersClicked, (state, _) => !state)

const toggleWithDeleted = createEvent()
const $withDeleted = filtersDomain
    .createStore<boolean>(true)
    .on(toggleWithDeleted, (state, _) => !state)

const $hallplanes = combine(bookingModel.$hallplanes, (hallplanes) => {
    return [{ id: 0, name: "без фильтрации", value: "" }, ...hallplanes]
})

const selectHallPlane = filtersDomain.createEvent<THallplane>()
const $selectedHallPlanes = filtersDomain
    .createStore<THallplane>({
        id: 0,
        name: "без фильтрации",
        isActive: true,
        image: "",
    })
    .on(selectHallPlane, (_, payload) => payload)
    .reset(resetAllFiltersClicked)

const $prepays = filtersDomain.createStore<Array<TPrepay>>(_prepaysDict_)

const selectPrepay = filtersDomain.createEvent<TPrepay>()
const $selectedPrepay = filtersDomain
    .createStore<TPrepay>(_prepaysDict_[0])
    .on(selectPrepay, (_, payload) => payload)
    .reset(resetAllFiltersClicked)

sample({
    clock: [$selectedHallPlanes, $selectedPrepay, $withDeleted],

    source: [$selectedHallPlanes, $selectedPrepay, $withDeleted],
    //@ts-ignore
    fn: (
        [filteredHallPlanes, prepays, withDeleted]: [
            THallplane,
            TPrepay,
            boolean
        ],
        _
    ): TReservesParams => {
        if (filteredHallPlanes.id !== 0) {
            if (prepays.id !== 0)
                return {
                    hallplaneId: filteredHallPlanes.id,
                    prepayType: prepays.id,
                    withDeleted,
                } as TReservesParams
            return {
                hallplaneId: filteredHallPlanes.id,
                withDeleted,
            } as TReservesParams
        }

        if (prepays.value.length !== 0)
            return { prepayType: prepays.id, withDeleted } as TReservesParams

        return { withDeleted }
    },

    target: bookingLib.API.getFliteredReservesFx,
})

export const events = {
    selectHallPlane,
    selectPrepay,
    toggleWithDeleted,
    toggleVisibledFiltersClicked,
}

const usePrepays = () => useStore($prepays)
const useHallPlanes = () => useStore($hallplanes)
const useWithDeleted = () => useStore($withDeleted)
const useSelectedPrepay = () => useStore($selectedPrepay)
const useVisibledFilters = () => useStore($visibledFilters)
const useSelectedHallPlane = () => useStore($selectedHallPlanes)

export const selectors = {
    usePrepays,
    useHallPlanes,
    useWithDeleted,
    useSelectedPrepay,
    useVisibledFilters,
    useSelectedHallPlane,
}
