import { combine, createEvent, createStore, sample } from "effector"
import { useStore } from "effector-react"
import { bookingModel } from "entities/booking"
import { THallplane, _hallPlanes_, _tables_ } from "entities/booking/lib"
import { daysJS } from "shared/lib/api"

const setCurrentWeek = createEvent<number>()
const $currentWeek = createStore<number>(daysJS().week()).on(
    setCurrentWeek,
    (_, payload) => payload
)

const prevWeekClicked = createEvent()

sample({
    clock: prevWeekClicked,
    source: $currentWeek,

    fn: (week, _) => {
        if (week > 0) return week - 1
        return 53
    },
    target: $currentWeek,
})
const nextWeekClicked = createEvent()

sample({
    clock: nextWeekClicked,
    source: $currentWeek,

    fn: (week, _) => {
        if (week === 53) return 0
        return week + 1
    },
    target: $currentWeek,
})

const $hallplanes = createStore<Array<THallplane>>([
    {
        id: 0,
        name: "без фильтрации",
        value: "",
    },
    ..._hallPlanes_,
])

const selectHallplane = createEvent<THallplane>()
const $selectedHallplane = $hallplanes
    .map((hp) => hp[0])
    .on(selectHallplane, (_, payload) => payload)

const $records = combine(
    bookingModel.$reserves,
    $selectedHallplane,
    $currentWeek,
    (reserves, selectedHallplane, currentWeek) => {
        return _tables_
            .filter((table) => {
                if (selectedHallplane.id !== 0)
                    return table.hallId === selectedHallplane.id
                return table
            })
            .map((t) => ({
                ...t,
                reserves: reserves.filter(
                    (reserve) =>
                        reserve.table.id === t.id &&
                        daysJS(reserve.startDate).week() === currentWeek
                ),
            }))
    }
)

const useRecords = () => useStore($records)
const useHallplanes = () => useStore($hallplanes)
const useCurrentWeek = () => useStore($currentWeek)
const useSelectedHallplane = () => useStore($selectedHallplane)

export const selectors = {
    useRecords,
    useHallplanes,
    useCurrentWeek,
    useSelectedHallplane,
}

export const events = {
    selectHallplane,
    nextWeekClicked,
    prevWeekClicked,
}
