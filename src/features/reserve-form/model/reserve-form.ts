import { attach, combine, createEvent, createStore, sample } from "effector"
import { useStore } from "effector-react"
import { bookingModel } from "entities/booking"
import {
    TDict,
    THallplane,
    TReserve,
    TTable,
    _defaultReserve_,
    _hallPlanes_,
    _tables_,
} from "entities/booking/lib"
import { ChangeEvent, FormEvent } from "react"
import { API } from "../lib"

const resetClicked = createEvent()
const selectTable = createEvent<TTable>()
const selectHallPlane = createEvent<THallplane>()
const setReserveStatus = createEvent<TDict>()
const incrementGuestsClicked = createEvent()
const decrementGuestsClicked = createEvent()

const changeReserveNumber = createEvent<ChangeEvent<HTMLInputElement>>()
const changeReserveDate = createEvent<ChangeEvent<HTMLInputElement>>()
const $reserve = createStore<TReserve>(_defaultReserve_)
    .reset([bookingModel.addReserveFx.doneData, resetClicked])

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
        [event.target.name]: event.target.value,
    }))

const getHallplanes = createEvent()

sample({
    clock: getHallplanes,
    target: API.getHallplanesFx,
})

export const $hallPlanes = createStore<Array<THallplane>>(_hallPlanes_).on(
    API.getHallplanesFx.doneData,
    (_, res) => res.data[0]
)

const $selectedHallPlanes = createStore<THallplane>(_hallPlanes_[0]).on(
    selectHallPlane,
    (_, payload) => payload
)
$reserve.on($selectedHallPlanes, (state, hallPlane) => {
    return {
        ...state,
        hall: hallPlane,
        hallId: hallPlane.id,
        table: {
            id: 0,
            value: 0,
            name: "выберите стол",
            hallId: 0,
            active: true,
        },
        tableId: 0,
    }
})

export const getTables = createEvent()

sample({
    clock: $selectedHallPlanes,
    fn: (selected) => selected.id,
    target: API.getTablesFx,
})

// const $tables = combine($selectedHallPlanes, (selected) => {
//     if (selected)
//         return _tables_.filter((table) => table.hallId === selected.id)
//     return _tables_
// }).on(API.getTablesFx.doneData, (_, res) => res.data[0])

const $tables = createStore<Array<TTable>>([]).on(
    API.getTablesFx.doneData,
    (_, res) => res.data[0]
)

const reserveAddClicked = createEvent<FormEvent<HTMLFormElement>>()
reserveAddClicked.watch((e) => e.preventDefault())

sample({
    clock: reserveAddClicked,
    source: $reserve,
    fn: (reserve, _) => reserve,
    target: bookingModel.addReserveFx,
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
    getTables,
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
