import { createEffect, createEvent, createStore, sample } from "effector"
import { useStore } from "effector-react"
import { TReserve, _defaultReserve_ } from "../lib"

export const addReserveFx = createEffect<TReserve, any>((reserve) => reserve)
export const $reserve = createStore<TReserve>(_defaultReserve_)

export const $reserves = createStore<Array<TReserve>>([])

sample({
    clock: addReserveFx.doneData,
    source: $reserves,
    fn: (reserves, reserve) => [...reserves, { ...reserve, id: reserves.length }] as Array<TReserve>,
    target: $reserves,
})
const selectReserve = createEvent<TReserve["id"]>()
const $selectedReserves = createStore<Array<TReserve["id"]>>([]).on(selectReserve, (reserves, id) => {
    const candidate = reserves.some((r) => r === id)

    if (candidate) return reserves.filter((r) => r !== id)

    return [...reserves, id]
})

export const $reservesCount = $reserves.map((item) => item.length)

const useReserves = () => useStore($reserves)
const useSelectedReserves = () => useStore($selectedReserves)

export const selectors = {
    useReserves,
    useSelectedReserves,
}

export const events = {
    selectReserve,
}
