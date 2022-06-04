import { createDomain, sample } from "effector"
import { useStore } from "effector-react"
import { bookingModel } from "entities/booking"
import {
    TDict,
    THallplane,
    TReserve,
    TTable,
    _defaultReserve_,
} from "entities/booking/lib"
import { debug } from "patronum"
import { ChangeEvent, FormEvent } from "react"
import { API } from "../lib"

const formDomain = createDomain("formDomain")

const resetClicked = formDomain.createEvent()
const selectTable = formDomain.createEvent<TTable>()
const selectHallPlane = formDomain.createEvent<THallplane>()
const setReserveStatus = formDomain.createEvent<TDict>()
const incrementGuestsClicked = formDomain.createEvent()
const decrementGuestsClicked = formDomain.createEvent()

const changeReserveNumber =
    formDomain.createEvent<ChangeEvent<HTMLInputElement>>()

const changeReserveDate = formDomain.createEvent<{ date: number; id: string }>()

const $reserve = formDomain
    .createStore<TReserve>(_defaultReserve_)
    .reset([bookingModel.$reserves, resetClicked])

    .on(changeReserveNumber, (state, event) => {
        const { name, value } = event.target

        return { ...state, [name]: Number(value) }
    })
    .on(incrementGuestsClicked, (state, _) => ({
        ...state,
        guests: state.guests + 1,
    }))
    .on(decrementGuestsClicked, (state, _) => ({
        ...state,
        guests: state.guests - 1,
    }))
    .on(selectTable, (state, table) => ({ ...state, table, tableId: table.id }))
    .on(setReserveStatus, (state, status) => ({ ...state, status }))
    .on(changeReserveDate, (state, event) => ({
        ...state,
        [event.id]: event.date,
    }))
// .on(changeReserveDate, (state, event) => ({
//     ...state,
//     [event.target.name]: event.target.value,
// }))

const getHallplanes = formDomain.createEvent()

sample({
    clock: getHallplanes,
    target: API.getHallplanesFx,
})

export const $hallPlanes = formDomain
    .createStore<Array<THallplane>>([])
    .on(API.getHallplanesFx.doneData, (_, res) => res.data[0])
    .on(bookingModel.$hallplanes, (_, halls) => halls)

const $selectedHallPlanes = formDomain
    .createStore<THallplane>({
        id: 0,
        name: "выбирите зал",
        image: "hall.jpeg",
        isActive: true,
    })
    .on(selectHallPlane, (_, payload) => payload)

$reserve.on($selectedHallPlanes, (state, hallPlane) => {
    return {
        ...state,
        hallplane: hallPlane,
        hallplaneId: hallPlane.id,
        table: {
            id: 0,
            name: "выберите стол",
            hallplaneId: 0,
            isActive: true,
            reserves: [],
        },
        tableId: 0,
    }
})

export const getTables = formDomain.createEvent()

sample({
    clock: $selectedHallPlanes,
    fn: (selected) => selected.id,
    target: API.getTablesFx,
})

const $tables = formDomain
    .createStore<Array<TTable>>([])
    .on(API.getTablesFx.doneData, (_, res) => res.data[0])

const reserveAddClicked = formDomain.createEvent<FormEvent<HTMLFormElement>>()
reserveAddClicked.watch((e) => e.preventDefault())

sample({
    clock: reserveAddClicked,
    source: $reserve,
    fn: (reserve, _) => reserve,
    target: API.PostReserveFx,
})

const useTables = () => useStore($tables)
const useReserve = () => useStore($reserve)
const useHallPlanes = () => useStore($hallPlanes)
const useGuestsCount = () => useStore($reserve).guests

export const selectors = {
    useTables,
    useReserve,
    useHallPlanes,
    useGuestsCount,
}

export const events = {
    selectTable,
    resetClicked,
    selectHallPlane,
    setReserveStatus,
    reserveAddClicked,
    changeReserveDate,
    changeReserveNumber,
    incrementGuestsClicked,
    decrementGuestsClicked,
}
