import { combine, createEvent, createStore, forward, sample } from "effector"
import { useStore } from "effector-react"
import { bookingModel } from "entities/booking"
import { TDict, TPrepay, TReserve, _prepaysDict_ } from "entities/booking/lib"
import { $hallPlanes as hp } from "features/reserve-form/model"
import { resetAllFiltersClicked } from "features/reserves-action-panel"
import { reset } from "patronum"

const $hallplanes = combine(hp, (hallplanes) => {
    return [{ id: 0, name: "без фильтрации", value: "" }, ...hallplanes]
})

const selectHallPlane = createEvent<TDict>()
const $selectedHallPlanes = createStore<TDict>({
    id: 0,
    name: "без фильтрации",
    value: "",
})
    .on(selectHallPlane, (_, payload) => payload)
    .reset(resetAllFiltersClicked)

// sample({
//     clock: $selectedHallPlanes,
//     fn: (selected) => selected.id,
//     target: bookingModel.filterReservesByHallplane,
// })

const $prepays = createStore<Array<TPrepay>>(_prepaysDict_)

const selectPrepay = createEvent<TPrepay>()
const $selectedPrepay = createStore<TPrepay>(_prepaysDict_[0])
    .on(selectPrepay, (_, payload) => payload)
    .reset(resetAllFiltersClicked)

sample({
    clock: [$selectedHallPlanes, $selectedPrepay],

    source: [bookingModel.$reserves, $selectedHallPlanes, $selectedPrepay],
    //@ts-ignore
    fn: (
        [reserves, filteredHallPlanes, prepays]: [TReserve[], TDict, TPrepay],
        _
    ): TReserve[] => {
        if (filteredHallPlanes.id !== 0) {
            if (prepays.value.length === 1)
                return reserves.filter(
                    (order) =>
                        order.hall.id === filteredHallPlanes.id &&
                        order.price === prepays.value[0]
                ) as TReserve[]
            if (prepays.value.length === 2)
                return reserves.filter(
                    (order) =>
                        order.hall.id === filteredHallPlanes.id &&
                        order.price >= prepays.value[0] &&
                        order.price <= prepays.value[1]
                ) as TReserve[]

            return reserves.filter(
                (order) => order.hall.id === filteredHallPlanes.id
            ) as TReserve[]
        }

        if (prepays.value.length === 1)
            return reserves.filter(
                (order) => order.price === prepays.value[0]
            ) as TReserve[]
        if (prepays.value.length === 2)
            return reserves.filter(
                (order) =>
                    order.price >= prepays.value[0] &&
                    order.price <= prepays.value[1]
            ) as TReserve[]

        return reserves as TReserve[]
    },

    target: bookingModel.$filteredReserves,
})

export const events = { selectHallPlane, selectPrepay }

const usePrepays = () => useStore($prepays)
const useHallPlanes = () => useStore($hallplanes)
const useSelectedPrepay = () => useStore($selectedPrepay)
const useSelectedHallPlane = () => useStore($selectedHallPlanes)

export const selectors = {
    usePrepays,
    useHallPlanes,
    useSelectedPrepay,
    useSelectedHallPlane,
}
