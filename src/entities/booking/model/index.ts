import { useStore } from "effector-react"
import { createDomain, createStore, sample } from "effector"

import {
    type TReserve,
    _defaultReserve_,
    API,
    TTable,
    THallplane,
} from "../lib"
import { debug } from "patronum"

const pageDomain = createDomain("pageDomain")

export const $withDeleted = pageDomain.createStore<boolean>(true)

const initPage = pageDomain.createEvent()

const $pageMounted = pageDomain.createStore<boolean>(false)
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
    clock: getReserves,
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

export const $reservesCount = pageDomain
    .createStore<number>(0)
    .on(API.getReservesFx.doneData, (_, res) => res.data[1])

export const $filteredReserves = $reserves
    .map((reserves) => reserves)
    .on(API.getFliteredReservesFx.doneData, (_, res) => res.data[0])

$selectedReserves.reset($filteredReserves)

const $filteredReservesCount = $reservesCount
    .map((quantity) => quantity)
    .on(API.getFliteredReservesFx.doneData, (_, res) => res.data[1])

const $isLoadingReserves = createStore<boolean>(false).on(
    [API.getFliteredReservesFx.pending, API.getReservesFx.pending],
    (_, state) => state
)
const useCompactList = () => useStore($compacted)
const usePageMounted = () => useStore($pageMounted)
const useReserves = () => useStore($filteredReserves)
const useReservesCount = () => useStore($reservesCount)
const useSelectedReserves = () => useStore($selectedReserves)
const useIsLoadingReserves = () => useStore($isLoadingReserves)
const useFilteredReservesCount = () => useStore($filteredReservesCount)
const useSelectedReservesCount = () => useStore($selectedReservesCount)

sample({
    clock: initPage,
    target: [getHallplanes, getReserves, getTables],
})

sample({
    clock: [
        API.getHallPlanesFx.fail,
        API.getReservesFx.fail,
        API.getTablesFx.fail,
    ],
    fn: () => false,
    target: $pageMounted,
})

sample({
    clock: [
        API.getHallPlanesFx.doneData,
        API.getReservesFx.doneData,
        API.getTablesFx.doneData,
    ],
    fn: () => true,
    target: $pageMounted,
})

export const selectors = {
    useReserves,
    useCompactList,
    usePageMounted,
    useReservesCount,
    useSelectedReserves,
    useIsLoadingReserves,
    useSelectedReservesCount,
    useFilteredReservesCount,
}

export const events = {
    initPage,
    getTables,
    getReserves,
    selectReserve,
}
