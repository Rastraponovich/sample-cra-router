import { createEffect, createEvent, createStore, sample } from "effector"
import { createGate, useStore } from "effector-react"
import { debug, reset } from "patronum"
import {
    generateChessBoard,
    generateFigures,
    __chessBoard__,
} from "../lib/helpers"
import type { TCell, TChessBoard, TFigure } from "../lib/models"

export const Game = createGate("ChessBoardPage")

const renderChessBoardFx = createEffect(() => generateChessBoard())
const renderFiguresFx = createEffect(() => generateFigures())

sample({
    clock: Game.open,
    target: renderChessBoardFx,
})

sample({
    clock: renderChessBoardFx.doneData,
    target: renderFiguresFx,
})

const $chessBoard = createStore<TChessBoard>([]).on(
    renderChessBoardFx.doneData,
    (_, payload) => payload
)

export const $figures = createStore<TFigure[]>([]).on(
    renderFiguresFx.doneData,
    (_, payload) => payload
)

export const $figuresCount = createStore<number>(0).on(
    $figures,
    (_, state) => state.length
)

sample({
    clock: renderFiguresFx.doneData,
    source: [$chessBoard, $figures],
    //@ts-ignore
    fn: ([board, figures]: [TChessBoard, TFigure[]], _) => {
        return board.map((row) => {
            return row.map((cell) => {
                const candidate = figures.find(
                    (figure) => figure.x === cell.x && figure.y === cell.y
                )

                if (candidate) {
                    return { ...cell, figure: candidate } as TCell
                }
                return cell as TCell
            })
        }) as TChessBoard
    },
    target: $chessBoard,
})

const selectFigure = createEvent<TCell>()

const $selectedFigureId = createStore<TFigure["id"] | null>(null)
const $selectedFigure = createStore<TFigure | null>(null)

const selectCellnotEmpty = sample({
    clock: selectFigure,
    filter: (selected) => selected.figure !== null,
    fn: (selected) => selected.figure!.id,
})
debug($selectedFigureId)
sample({
    clock: selectCellnotEmpty,
    source: $selectedFigureId,
    fn: (selected, event) => {
        if (selected === event) return null
        return event
    },
    target: $selectedFigureId,
})

// sample({
//     clock: selectCellnotEmpty,
//     source: $selectedFigureId,
//     filter: (selected, event) => selected === event,
//     fn: () => null,
//     target: $selectedFigureId,
// })

sample({
    clock: $selectedFigureId,

    source: $figures,
    fn: (figures, id) => {
        if (id !== null)
            return figures.find((item) => item.id === id) as TFigure
        return null
    },
    target: $selectedFigure,
})

reset({ clock: Game.close, target: [$figures, $chessBoard] })

export const events = {
    selectFigure,
}

const useSelectedFigureId = () => useStore($selectedFigureId)

const useChessBoard = () => useStore($chessBoard)
export const selectors = { useChessBoard, useSelectedFigureId }
