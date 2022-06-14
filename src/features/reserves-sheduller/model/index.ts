import {
    combine,
    createApi,
    createEvent,
    createStore,
    sample,
    Store,
} from "effector"
import { useStore } from "effector-react"
import { bookingModel } from "entities/booking"
import {
    THallplane,
    TReserve,
    TReservesParams,
    TTable,
} from "entities/booking/lib"
import { weekFilter } from "shared/lib"
import { daysJS } from "shared/lib/api"
import { API } from "../lib"
import { getReservesByTableFx } from "../lib/api"

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

const $reserves = createStore<TReserve[]>([]).on(
    getReservesByTableFx.doneData,
    (_, res) => res.data[0]
)

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

type TRecord = {
    reserves: TReserve[]
    hallplaneId: number
    id: number
    isActive: boolean
    name: string
}

const $records = combine<number, TTable[], TRecord[]>(
    $currentWeek,
    $tables,
    (currentWeek, tables) => {
        return tables.map((table) => ({
            ...table,
            reserves: table.reserves.filter((reserve) =>
                weekFilter(reserve, currentWeek)
            ),
        }))
    }
)

const $firstDayOfSelectedWeek = createStore<string>(
    daysJS().day(1).format("DD.MM.YY")
).on($currentWeek, (_, currentWeek) => {
    return daysJS().week(currentWeek).day(1).format("DD.MM.YY")
})
const $lastDayOfSelectedWeek = createStore<string>(
    daysJS().day(7).format("DD.MM.YY")
).on($currentWeek, (_, currentWeek) => {
    return daysJS().week(currentWeek).day(7).format("DD.MM.YY")
})

const selectReserves = createEvent<TTable["id"]>()
const $selectedReserves = createStore<TRecord | null>(null)

sample({
    clock: selectReserves,
    source: $records,
    fn: (records, id) =>
        ({ ...records.find((record) => record.id === id) } as TRecord),
    target: $selectedReserves,
})
const closedDialog = createEvent()
const $showingDialog = createStore<boolean>(false)
    .on($selectedReserves, (_, r) => true)
    .reset(closedDialog)

const $showAddReserveModal = createStore<boolean>(false)

const {
    closeReserveModalClicked,
    openReserveModalClicked,
    toggleReserveModal,
} = createApi($showAddReserveModal, {
    toggleReserveModal: (state) => !state,
    closeReserveModalClicked: () => false,
    openReserveModalClicked: () => true,
})

const useRecords = () => useStore($records)
const useHallplanes = () => useStore($hallplanes)
const useCurrentWeek = () => useStore($currentWeek)
const useSelectedHallplane = () => useStore($selectedHallplane)

const useSelectedReserves = () => useStore($selectedReserves)

const useFirstDayOfSelectedWeek = () => useStore($firstDayOfSelectedWeek)
const useLastDayOfSelectedWeek = () => useStore($lastDayOfSelectedWeek)

const useShowingDialog = () => useStore($showingDialog)

const useShowReserveModal = () => useStore($showAddReserveModal)

const useRecord = (id: TTable["id"]) =>
    useStore($records).find((record) => record.id === id)

export const selectors = {
    useRecord,
    useRecords,
    useHallplanes,
    useCurrentWeek,
    useShowingDialog,
    useSelectedHallplane,
    useFirstDayOfSelectedWeek,
    useLastDayOfSelectedWeek,
    useSelectedReserves,
    useShowReserveModal,
}

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
