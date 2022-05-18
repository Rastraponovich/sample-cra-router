import { createEvent, createStore, guard, sample } from "effector"
import { useStore } from "effector-react"
import { reset } from "patronum"
import { ChangeEvent } from "react"
import { api, THistoryRecord, TPlayer, TXOCell, TXOGameState } from "../lib"

const startGame = createEvent()

const $gameState = createStore<TXOGameState>(null).on(startGame, () => "started")

const $gameEnded = createStore<boolean>(false).on($gameState, (_, state) => {
    if (state === "ended") return true
    return false
})

const setReadyPlayer = createEvent<string>()

const changedPlayer = createEvent<TPlayer>()

const changePlayer = createEvent<ChangeEvent<HTMLInputElement>>()

const $players = createStore<TPlayer[]>([
    { name: "plater1", id: 1, color: "red", ready: false },
    { name: "player2", id: 2, color: "blue", ready: false },
])
    .on(setReadyPlayer, (players, id) => {
        return players.map((player) => {
            if (player.id === Number(id)) return { ...player, ready: true }
            return player
        })
    })
    .on(changePlayer, (players, event) => {
        return players.map((player) => {
            if (player.id === Number(event.target.id)) return { ...player, [event.target.name]: event.target.value }
            return player
        })
    })
    .on(changedPlayer, (players, player) => {
        return players.map((p) => {
            if (p.id === player.id) return player

            return p
        })
    })

const $playersReady = $players.map((players) => players.every((item) => item.ready))

const $currentPlayerId = createStore<number>(1)

const $currentPlayer = createStore<TPlayer | null>({ name: "player1", id: 1, color: "red", ready: true })

sample({
    clock: $currentPlayerId,
    source: $players,
    filter: (_, id) => id !== null,
    fn: (players, id) => players.find((player) => player.id === id) as TPlayer,
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

const $moveHistory = createStore<THistoryRecord[]>([])
const $movesCount = createStore<number>(1).on($moveHistory, (state, history) => history.length + 1)

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
        return [...history, { player: current, cell: event, id: history.length }] as THistoryRecord[]
    },
    target: $moveHistory,
})

sample({
    clock: canMoved,
    source: [$currentPlayerId, $gameFiled],

    //@ts-ignore
    fn: ([current, field]: [number, TXOCell[]], id) => {
        return field.map((item) => {
            if (item.id === id) return { ...item, playerId: current, empty: false } as TXOCell

            return item as TXOCell
        })
    },
    target: $gameFiled,
})

const checkWinnerMove = guard({
    clock: $gameFiled,
    source: $currentPlayer,
    filter: (player, board) => {
        const result = api.checkWinner(board, player!)
        if (result.winner) return true
        return false
    },
})
const checkNormalMove = guard({
    clock: $gameFiled,
    source: $currentPlayer,
    filter: (player, board) => {
        const result = api.checkWinner(board, player!)
        if (result.winner) return false
        return true
    },
})

const $winnerPlayer = createStore<TPlayer | null>(null)

sample({
    clock: checkWinnerMove,
    source: $currentPlayer,
    fn: (result) => result,
    target: $winnerPlayer,
})

sample({
    clock: checkNormalMove,
    source: $currentPlayerId,
    fn: (current) => {
        if (current === 1) return 2
        return 1
    },
    target: $currentPlayerId,
})

$gameState.on($winnerPlayer, (_, winner) => {
    if (winner !== null) return "ended"
})

reset({
    clock: startGame,
    target: [$moveHistory, $winnerPlayer, $gameEnded, $gameFiled, $currentPlayerId, $movesCount],
})

const useGameField = () => useStore($gameFiled)
const useCurrentPlayerId = () => useStore($currentPlayerId)
const useCurrentPlayer = () => useStore($currentPlayer)
const useHistoryMoves = () => useStore($moveHistory)
const usePlayers = () => useStore($players)
const useMovesCount = () => useStore($movesCount)
const useGameState = () => useStore($gameState)

const usePlayersIsReady = () => useStore($playersReady)

const useGameEnded = () => useStore($gameEnded)

const useWinner = () => useStore($winnerPlayer)

export const selectors = {
    useWinner,
    useGameField,
    useGameState,
    useCurrentPlayerId,
    usePlayersIsReady,
    useHistoryMoves,
    useCurrentPlayer,
    usePlayers,
    useMovesCount,
    useGameEnded,
}

export const events = { changePlayer, startGame, setReadyPlayer, moved, changedPlayer }
