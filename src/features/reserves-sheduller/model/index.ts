import { combine, createEvent, createStore, sample } from "effector"
import { useStore } from "effector-react"
import { bookingModel } from "entities/booking"
import { THallplane, TTable } from "entities/booking/lib"
import { daysJS } from "shared/lib/api"
import { API } from "../lib"

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

const getHallPlanes = createEvent()

sample({
    clock: getHallPlanes,
    target: API.getHallplanesFx,
})

const $hallplanes = createStore<Array<THallplane>>([])
    .on(API.getHallplanesFx.doneData, (_, res) => [
        {
            id: 0,
            name: "без фильтрации",
            image: "",
            isActive: true,
        },
        ...res.data[0],
    ])
    .on(bookingModel.$hallplanes, (_, halls) => [
        {
            id: 0,
            name: "без фильтрации",
            image: "",
            isActive: true,
        },
        ...halls,
    ])

const selectHallplane = createEvent<THallplane>()
const $selectedHallplane = $hallplanes
    .map((hp) => hp[0])
    .on(selectHallplane, (_, payload) => payload)

const getTables = createEvent<number>()

sample({
    clock: $selectedHallplane,
    fn: (selected) => selected.id,
    target: getTables,
})

sample({
    clock: getTables,
    fn: (id) => id,
    target: API.getTablesFx,
})

const $tables = createStore<Array<TTable>>([]).on(
    API.getTablesFx.doneData,
    (_, res) => res.data[0]
)

const $records = combine($currentWeek, $tables, (currentWeek, tables) => {
    return tables.map((table) => ({
        ...table,
        reserves: [],
        // reserves: reserves.filter(
        //     (reserve) =>
        //         reserve.table.id === table.id &&
        //         daysJS(reserve.startDate).week() === currentWeek
        // ),
    }))
})

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
    getHallPlanes,
    selectHallplane,
    nextWeekClicked,
    prevWeekClicked,
}
