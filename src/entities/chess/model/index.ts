import {
    combine,
    createEffect,
    createEvent,
    createStore,
    sample,
} from "effector"
import { createGate, useStore } from "effector-react"
import { debug, reset } from "patronum"
import {
    generateChessBoard,
    generateFigures,
    __chessBoard__,
} from "../lib/helpers"
import {
    EFigureColor,
    EFigureType,
    TCell,
    TChessBoard,
    TFigure,
} from "../lib/models"

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

const $playersFigures = combine($figures, (figures) => {
    return {
        white: figures.filter((item) => item.color === EFigureColor.LIGHT),
        black: figures.filter((item) => item.color === EFigureColor.DARK),
    }
})

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

sample({
    clock: $selectedFigure,
    source: [$chessBoard, $figures],

    //@ts-ignore
    fn: ([chessBoard, figures]: [TChessBoard, TFigure[]], selected) => {
        const candidate = selected !== null

        if (candidate) {
            if (
                selected.type === EFigureType.PAWN &&
                selected.color === EFigureColor.DARK
            ) {
                return chessBoard.map((row, rowId) => {
                    if (rowId === selected.y + 1)
                        return row.map((cell) => {
                            if (cell.x === selected.x)
                                return { ...cell, canMove: true }
                            return cell
                        })
                    return row
                }) as TChessBoard
            }

            if (selected.type === EFigureType.ROOK) {
                if (selected.color === EFigureColor.DARK) {
                    const left =
                        selected.x > 0
                            ? figures
                                  .filter(
                                      (figure) =>
                                          figure.y === selected.y &&
                                          figure.x < selected.x
                                  )
                                  .sort((a, b) => a.x - b.x)
                            : null
                    const right =
                        selected.y < 7
                            ? figures
                                  .filter(
                                      (figure) =>
                                          figure.y === selected.y &&
                                          figure.x > selected.x
                                  )
                                  .sort((a, b) => a.x - b.x)
                            : null

                    const top =
                        selected.y > 0
                            ? figures
                                  .filter(
                                      (figure) =>
                                          figure.x === selected.x &&
                                          figure.y < selected.y
                                  )
                                  .sort((a, b) => a.y - b.y)
                            : null
                    const bottom =
                        selected.y < 7
                            ? figures
                                  .filter(
                                      (figure) =>
                                          figure.x === selected.x &&
                                          figure.y > selected.y
                                  )
                                  .sort((a, b) => a.y - b.y)
                            : null

                    const firstFiguresX = {
                        left: left ? left[left.length - 1] : null,
                        right: right ? right[0] : null,
                    }
                    const firstFiguresY = {
                        top: top ? top[0] : null,
                        bottom: bottom ? bottom[0] : null,
                    }

                    console.log(firstFiguresY)

                    return chessBoard.map((row, rowId) => {
                        if (firstFiguresX) {
                            if (rowId === selected.y)
                                return row.map((cell) => {
                                    if (
                                        (cell.x < selected.x &&
                                            cell.x ===
                                                firstFiguresX?.left?.x) ||
                                        (cell.x > selected.x &&
                                            cell.x === firstFiguresX?.right?.x)
                                    )
                                        return { ...cell, canMove: true }

                                    return cell
                                })
                        }

                        if (firstFiguresY) {
                            if (rowId > selected.y)
                                return row.map((cell) => {
                                    if (
                                        (cell.x === selected.x &&
                                            cell.y ===
                                                firstFiguresY?.bottom?.y) ||
                                        (cell.x === selected.x &&
                                            cell.y === firstFiguresY?.top?.y)
                                    )
                                        return { ...cell, canMove: true }
                                    return cell
                                })
                        }
                        if (rowId > selected.y)
                            return row.map((cell) => {
                                if (cell.x === selected.x)
                                    return { ...cell, canMove: true }
                                return cell
                            })
                        return row
                    }) as TChessBoard
                }
            }
        }
        return chessBoard.map((row) =>
            row.map((cell) => ({ ...cell, canMove: false }))
        ) as TChessBoard
    },
    target: $chessBoard,
})

reset({ clock: Game.close, target: [$figures, $chessBoard] })

export const events = {
    selectFigure,
}

const useSelectedFigureId = () => useStore($selectedFigureId)

const useChessBoard = () => useStore($chessBoard)
const usePlayerFigures = () => useStore($playersFigures)
export const selectors = {
    useChessBoard,
    useSelectedFigureId,
    usePlayerFigures,
}
