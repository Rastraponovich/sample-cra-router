import { createDomain, createStore, sample } from "effector"

import {
    type TReserve,
    _defaultReserve_,
    API,
    TTable,
    THallplane,
    TReservesParams,
} from "../lib"
import { debug, pending } from "patronum"

const pageDomain = createDomain("pageDomain")

export const $withDeleted = pageDomain.createStore<boolean>(true)

const setQueryConfig = pageDomain.createEvent<TReservesParams>()

export const $queryConfig = createStore<TReservesParams>({
    withDeleted: true,
    hallplaneId: 0,
    prepayType: 0,
}).on(setQueryConfig, (state, payload) => ({ ...state, ...payload }))
debug($queryConfig, setQueryConfig)
sample({
    clock: $queryConfig,
    fn: ({ prepayType, withDeleted, hallplaneId }) => {
        if (hallplaneId !== 0) {
            if (prepayType !== 0)
                return {
                    hallplaneId,
                    prepayType,
                    withDeleted,
                }
            return {
                hallplaneId,
                withDeleted,
            }
        }
        if (prepayType !== 0) return { prepayType, withDeleted }

        return { withDeleted }
    },

    target: API.getFliteredReservesFx,
})

const initPage = pageDomain.createEvent()

export const $pageMounted = pageDomain.createStore<boolean>(false)
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
    target: API.getHallplanesFx,
})

export const $hallplanes = pageDomain
    .createStore<Array<THallplane>>([])
    .on(API.getHallplanesFx.doneData, (_, res) => res.data[0])

const getReserves = pageDomain.createEvent()

sample({
    clock: getReserves,
    source: $queryConfig,
    fn: (queryConfig, _) => queryConfig,
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

export const $selectedReservesCount = $selectedReserves.map(
    (item) => item.length
)

export const $reservesCount = pageDomain
    .createStore<number>(0)
    .on(API.getReservesFx.doneData, (_, res) => res.data[1])

export const $filteredReserves = createStore<Array<TReserve>>([])
    .on(API.getFliteredReservesFx.doneData, (_, res) => res.data[0])
    .on($reserves, (_, r) => r)

$selectedReserves.reset($filteredReserves)

export const $filteredReservesCount = $reservesCount
    .map((quantity) => quantity)
    .on(API.getFliteredReservesFx.doneData, (_, res) => res.data[1])

export const $isLoadingReserves = pending({
    effects: [API.getFliteredReservesFx, API.getReservesFx],
    of: "some",
})

sample({
    clock: initPage,
    target: [getHallplanes, getReserves, getTables],
})

sample({
    clock: [
        API.getHallplanesFx.fail,
        API.getReservesFx.fail,
        API.getTablesFx.fail,
    ],
    fn: () => false,
    target: $pageMounted,
})

sample({
    clock: [
        API.getHallplanesFx.doneData,
        API.getReservesFx.doneData,
        API.getTablesFx.doneData,
    ],
    fn: () => true,
    target: $pageMounted,
})

export const events = {
    initPage,
    getTables,
    getReserves,
    selectReserve,
    setQueryConfig,
}
