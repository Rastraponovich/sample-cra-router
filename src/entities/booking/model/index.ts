import { useStore } from "effector-react"
import { createEffect, createEvent, createStore, sample } from "effector"

import { type TReserve, _defaultReserve_ } from "../lib"

export const addReserveFx = createEffect<TReserve, any>((reserve) => reserve)

export const $reserve = createStore<TReserve>(_defaultReserve_)

export const $reserves = createStore<Array<TReserve>>([])

sample({
    clock: addReserveFx.doneData,
    source: $reserves,
    fn: (reserves, reserve) =>
        [
            ...reserves,
            {
                ...reserve,
                id: reserves.length,
            },
        ] as Array<TReserve>,
    target: $reserves,
})
const selectReserve = createEvent<TReserve["id"]>()
export const $selectedReserves = createStore<Array<TReserve["id"]>>([]).on(
    selectReserve,
    (reserves, id) => {
        const candidate = reserves.some((r) => r === id)

        if (candidate) return reserves.filter((r) => r !== id)

        return [...reserves, id]
    }
)

export const $compacted = createStore(false)

const $selectedReservesCount = $selectedReserves.map((item) => item.length)

export const $reservesCount = $reserves.map((item) => item.length)

export const $filteredReserves = $reserves.map((reserves) => reserves)

$selectedReserves.reset($filteredReserves)

const $filteredReservesCount = $filteredReserves.map((item) => item.length)

const useReserves = () => useStore($filteredReserves)

const useReservesCount = () => useStore($reservesCount)
const useSelectedReserves = () => useStore($selectedReserves)
const useFilteredReservesCount = () => useStore($filteredReservesCount)
const useSelectedReservesCount = () => useStore($selectedReservesCount)
const useCompactList = () => useStore($compacted)

export const selectors = {
    useReserves,
    useCompactList,
    useReservesCount,
    useSelectedReserves,
    useSelectedReservesCount,
    useFilteredReservesCount,
}

export const events = {
    selectReserve,
}
