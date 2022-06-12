import { combine, createEvent, createStore, sample } from "effector"
import { useStore } from "effector-react"
import { bookingModel } from "entities/booking"
import { THallplane, TReserve, TTable } from "entities/booking/lib"
import { weekFilter } from "shared/lib"
import { daysJS } from "shared/lib/api"
import { API } from "../lib"

const setCurrentWeek = createEvent<number>()
const $currentWeek = createStore<number>(daysJS().week() - 1).on(setCurrentWeek, (_, payload) => payload)

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
const $selectedHallplane = $hallplanes.map((hp) => hp[0]).on(selectHallplane, (_, payload) => payload)

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

const $tables = createStore<Array<TTable>>([]).on(API.getTablesFx.doneData, (_, res) => res.data[0])

const $records = combine($currentWeek, $tables, (currentWeek, tables) => {
    return tables.map((table) => ({
        ...table,
        reserves: table.reserves.filter((reserve) => weekFilter(reserve, currentWeek)),
    }))
})

const $firstDayOfSelectedWeek = createStore<string>(daysJS().day(1).format("DD.MM.YY")).on(
    $currentWeek,
    (_, currentWeek) => {
        return daysJS().week(currentWeek).day(1).format("DD.MM.YY")
    }
)
const $lastDayOfSelectedWeek = createStore<string>(daysJS().day(7).format("DD.MM.YY")).on(
    $currentWeek,
    (_, currentWeek) => {
        return daysJS().week(currentWeek).day(7).format("DD.MM.YY")
    }
)

const selectReserves = createEvent<TReserve["id"][]>()
const $selectedReserves = createStore<TReserve[]>([])

sample({
    clock: selectReserves,
    source: $records,
    fn: (records, selected) => {
        let reserves: TReserve[] = []
        records.forEach((r) => {
            r.reserves.forEach((rs) => {
                if (selected.some((s) => s === rs.id)) reserves.push(rs)
            })
        })
        return reserves as TReserve[]
    },
    target: $selectedReserves,
})
const closedDialog = createEvent()
const $showingDialog = createStore<boolean>(false)
    .on($selectedReserves, (_, r) => (r.length > 0 ? true : false))
    .reset(closedDialog)

const useRecords = () => useStore($records)
const useHallplanes = () => useStore($hallplanes)
const useCurrentWeek = () => useStore($currentWeek)
const useSelectedHallplane = () => useStore($selectedHallplane)

const useSelectedReserves = () => useStore($selectedReserves)

const useFirstDayOfSelectedWeek = () => useStore($firstDayOfSelectedWeek)
const useLastDayOfSelectedWeek = () => useStore($lastDayOfSelectedWeek)

export const selectors = {
    useRecords,
    useHallplanes,
    useCurrentWeek,
    useSelectedHallplane,
    useFirstDayOfSelectedWeek,
    useLastDayOfSelectedWeek,
    useSelectedReserves,
}

export const events = {
    selectReserves,
    getHallPlanes,
    selectHallplane,
    nextWeekClicked,
    prevWeekClicked,
}
