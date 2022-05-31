import { useStore } from "effector-react"
import { createDomain, sample } from "effector"

import {
    type TReserve,
    _defaultReserve_,
    API,
    TTable,
    THallplane,
} from "../lib"
import { debug } from "patronum"

const pageDomain = createDomain("pageDomain")

const $withDeleted = pageDomain.createStore<boolean>(true)

const initPage = pageDomain.createEvent()

export const $reserve = pageDomain.createStore<TReserve>(_defaultReserve_)

const getTables = pageDomain.createEvent()

sample({
    clock: getTables,
    target: API.getTablesFx,
})

export const $tables = pageDomain
    .createStore<Array<TTable>>([])
    .on(API.getTablesFx.doneData, (_, res) => res.data[0])

const getHallplanes = pageDomain.createEvent()
sample({
    clock: getHallplanes,
    target: API.getHallPlanesFx,
})

export const $hallplanes = pageDomain
    .createStore<Array<THallplane>>([])
    .on(API.getHallPlanesFx.doneData, (_, res) => res.data[0])

const getReserves = pageDomain.createEvent()

sample({
    clock: [getReserves, $withDeleted],
    source: $withDeleted,
    fn: (withDeleted, _) => ({ withDeleted }),
    target: API.getReservesFx,
})
export const $reserves = pageDomain
    .createStore<Array<TReserve>>([])
    .on(API.getReservesFx.doneData, (_, payload) => payload.data[0])

const selectReserve = pageDomain.createEvent<TReserve["id"]>()
export const $selectedReserves = pageDomain
    .createStore<Array<TReserve["id"]>>([])
    .on(selectReserve, (reserves, id) => {
        const candidate = reserves.some((r) => r === id)

        if (candidate) return reserves.filter((r) => r !== id)

        return [...reserves, id]
    })

export const $compacted = pageDomain.createStore(false)

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

sample({
    clock: initPage,
    target: [getHallplanes, getReserves, getTables],
})

export const selectors = {
    useReserves,
    useCompactList,
    useReservesCount,
    useSelectedReserves,
    useSelectedReservesCount,
    useFilteredReservesCount,
}

export const events = {
    initPage,
    getTables,
    getReserves,
    selectReserve,
}
