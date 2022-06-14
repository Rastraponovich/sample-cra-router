import { combine, createApi, createEvent, createStore, sample } from "effector"
import { bookingModel } from "entities/booking"
import type { THallplane, TReserve, TTable } from "entities/booking/lib"
import { daysJS, weekFilter } from "shared/lib"
import { API } from "../lib"

const setCurrentWeek = createEvent<number>()
export const $currentWeek = createStore<number>(daysJS().week()).on(setCurrentWeek, (_, payload) => payload)

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

const $reserves = createStore<TReserve[]>([]).on(API.getReservesByTableFx.doneData, (_, res) => res.data[0])

const getHallPlanes = createEvent()

sample({
    clock: getHallPlanes,
    target: API.getHallplanesFx,
})

export const $hallplanes = createStore<Array<THallplane>>([])
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
export const $selectedHallplane = $hallplanes.map((hp) => hp[0]).on(selectHallplane, (_, payload) => payload)

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

type TRecord = {
    reserves: TReserve[]
    hallplaneId: number
    id: number
    isActive: boolean
    name: string
}

export const $records = combine<number, TTable[], TRecord[]>($currentWeek, $tables, (currentWeek, tables) => {
    return tables.map((table) => ({
        ...table,
        reserves: table.reserves.filter((reserve) => weekFilter(reserve, currentWeek)),
    }))
})

export const $firstDayOfSelectedWeek = createStore<string>(daysJS().day(1).format("DD.MM.YY")).on(
    $currentWeek,
    (_, currentWeek) => {
        return daysJS().week(currentWeek).day(1).format("DD.MM.YY")
    }
)
export const $lastDayOfSelectedWeek = createStore<string>(daysJS().day(7).format("DD.MM.YY")).on(
    $currentWeek,
    (_, currentWeek) => {
        return daysJS().week(currentWeek).day(7).format("DD.MM.YY")
    }
)

const selectReserves = createEvent<TTable["id"]>()
export const $selectedReserves = createStore<TRecord | null>(null)

sample({
    clock: selectReserves,
    source: $records,
    fn: (records, id) => ({ ...records.find((record) => record.id === id) } as TRecord),
    target: $selectedReserves,
})
const closedDialog = createEvent()
export const $showingDialog = createStore<boolean>(false)
    .on($selectedReserves, (_, r) => true)
    .reset(closedDialog)

export const $showAddReserveModal = createStore<boolean>(false)

const { closeReserveModalClicked, openReserveModalClicked, toggleReserveModal } = createApi($showAddReserveModal, {
    toggleReserveModal: (state) => !state,
    closeReserveModalClicked: () => false,
    openReserveModalClicked: () => true,
})

export const events = {
    selectReserves,
    closedDialog,
    getHallPlanes,
    selectHallplane,
    nextWeekClicked,
    prevWeekClicked,
    closeReserveModalClicked,
    openReserveModalClicked,
    toggleReserveModal,
}
