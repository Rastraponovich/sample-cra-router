import { createEvent, createStore, sample } from "effector"
import { useStore } from "effector-react"
import { ChangeEvent } from "react"
import { THistoryRecord, TPlayer, TXOCell, TXOGameState } from "../lib"

const startGame = createEvent()

const $gameState = createStore<TXOGameState>(null).on(
    startGame,
    () => "started"
)

const setReadyPlayer = createEvent<string>()

const changePlayer = createEvent<ChangeEvent<HTMLInputElement>>()

const $players = createStore<Record<number, TPlayer>>({
    1: { name: "platyer1", id: 1, color: "red", ready: true },
    2: { name: "player2", id: 2, color: "blue", ready: true },
})
    .on(setReadyPlayer, (state, id) => ({
        ...state,
        [id]: { ...state[Number(id)], ready: true },
    }))
    .on(changePlayer, (state, event) => ({
        ...state,
        [event.target.id]: {
            ...state[Number(event.target.id)],
            [event.target.name]: event.target.value,
        },
    }))

const $playersReady = createStore<boolean>(false).on($players, (_, players) => {
    if (Object.entries(players).every(([key, val]) => val.ready)) return true
    return false
})

const $currentPlayerId = createStore<number | null>(1).on(
    $gameState,
    (_, state) => {
        if (state === "started") return 1
        return null
    }
)

const $currentPlayer = createStore<TPlayer | null>(null)

sample({
    clock: $currentPlayerId,
    source: $players,

    filter: (players, id) => id !== null,
    fn: (players, id) => players[id!],

    target: $currentPlayer,
})

sample({
    clock: $playersReady,
    fn: (state) => {
        if (state) return "started"
        return "chosePlayers"
    },
    target: $gameState,
})

const $gameFiled = createStore<TXOCell[]>([
    { id: 1, playerId: null, empty: true },
    { id: 2, playerId: null, empty: true },
    { id: 3, playerId: null, empty: true },
    { id: 4, playerId: null, empty: true },
    { id: 5, playerId: null, empty: true },
    { id: 6, playerId: null, empty: true },
    { id: 7, playerId: null, empty: true },
    { id: 8, playerId: null, empty: true },
    { id: 9, playerId: null, empty: true },
])

sample({
    clock: $gameFiled,
    source: $currentPlayerId,
    filter: (current, _) => current !== null,
    fn: (current, _) => {
        if (current === 1) return 2
        return 1
    },

    target: $currentPlayerId,
})

const $moveHistory = createStore<THistoryRecord[]>([])

const moved = createEvent<number>()

const canMoved = sample({
    clock: moved,
    source: $gameFiled,

    filter: (field, id) => {
        const candidate = field.find((item) => item.id === id)

        if (candidate?.empty) return true
        return false
    },

    fn: (_, id) => id,
})

sample({
    clock: canMoved,
    source: [$currentPlayer, $moveHistory],

    //@ts-ignore
    fn: ([current, history]: [number, THistoryRecord[]], event) => {
        return [
            ...history,
            { player: current, cell: event, id: history.length },
        ] as THistoryRecord[]
    },
    target: $moveHistory,
})

sample({
    clock: canMoved,
    source: [$currentPlayerId, $gameFiled],

    //@ts-ignore
    fn: ([current, field]: [number, TXOCell[]], id) => {
        return field.map((item) => {
            if (item.id === id)
                return { ...item, playerId: current, empty: false } as TXOCell

            return item as TXOCell
        })
    },
    target: $gameFiled,
})

// sample({
//     clock: $gameFiled,

//     fn: (fields) => {
//         console.log(fields)
//     },
// })

const useGameField = () => useStore($gameFiled)
const useCurrentPlayerId = () => useStore($currentPlayerId)
const useCurrentPlayer = () => useStore($currentPlayer)
const useHistoryMoves = () => useStore($moveHistory)

export const selectors = {
    useGameField,
    useCurrentPlayerId,
    useHistoryMoves,
    useCurrentPlayer,
}

export const events = { changePlayer, startGame, setReadyPlayer, moved }
