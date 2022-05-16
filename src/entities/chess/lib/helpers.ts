import { v4 as uuid } from "uuid"
import { EFigureColor, EFigureType, TCell, TChessBoard, TColor, TFigure, TFigureType } from "./models"

const selectColor = (row: number, cell: number): TColor => {
    if (row % 2) {
        if (cell % 2) return "dark"
        return "light"
    } else {
        if (cell % 2) return "light"
        return "dark"
    }
}

export const generateChessBoard = () => {
    let chessBoard: TChessBoard = []

    for (let row = 0; row < 8; row++) {
        let rows: TCell[] = []

        for (let cell = 0; cell < 8; cell++) {
            rows.push({
                x: cell,
                y: row,
                color: selectColor(row, cell),
                // color: "dark",
                figure: null,
                canMove: false,
            })
        }
        chessBoard.push(rows)
    }

    return chessBoard
}

interface IGenerateFigureProps {
    type: EFigureType
    color: EFigureColor
    x: number
    y: number
}

const generateFigure = ({ x, y, color, type }: IGenerateFigureProps): TFigure => {
    return { color, type, x, y, id: uuid() }
}

export const generateFigures = () => {
    const schema = [
        {
            rowId: 0,
            color: EFigureColor.DARK,

            figures: [
                EFigureType.ROOK,
                EFigureType.KNIGHT,
                EFigureType.BISHOP,
                EFigureType.QUEEN,
                EFigureType.KING,
                EFigureType.BISHOP,
                EFigureType.KNIGHT,
                EFigureType.ROOK,
            ],
        },
        {
            rowId: 1,
            color: EFigureColor.DARK,

            figures: [
                EFigureType.PAWN,
                EFigureType.PAWN,
                EFigureType.PAWN,
                EFigureType.PAWN,
                EFigureType.PAWN,
                EFigureType.PAWN,
                EFigureType.PAWN,
                EFigureType.PAWN,
            ],
        },
        {
            rowId: 6,
            color: EFigureColor.LIGHT,

            figures: [
                EFigureType.PAWN,
                EFigureType.PAWN,
                EFigureType.PAWN,
                EFigureType.PAWN,
                EFigureType.PAWN,
                EFigureType.PAWN,
                EFigureType.PAWN,
                EFigureType.PAWN,
            ],
        },
        {
            rowId: 7,
            color: EFigureColor.LIGHT,
            figures: [
                EFigureType.ROOK,
                EFigureType.KNIGHT,
                EFigureType.BISHOP,
                EFigureType.QUEEN,
                EFigureType.KING,
                EFigureType.BISHOP,
                EFigureType.KNIGHT,
                EFigureType.ROOK,
            ],
        },
    ]

    let figures: TFigure[] = []

    schema.forEach((item, y) => {
        item.figures.forEach((figure, x) => {
            figures.push(
                generateFigure({
                    y: item.rowId,
                    x,
                    color: item.color,
                    type: figure,
                })
            )
        })
    })
    return figures
}

export const __chessBoard__: TChessBoard = generateChessBoard()

export const fillChessBoard = (chessBoard: TChessBoard): TChessBoard => {
    const schema = [
        {
            rowId: 0,
            color: EFigureColor.DARK,

            figures: [
                EFigureType.ROOK,
                EFigureType.KNIGHT,
                EFigureType.BISHOP,
                EFigureType.QUEEN,
                EFigureType.KING,
                EFigureType.BISHOP,
                EFigureType.KNIGHT,
                EFigureType.ROOK,
            ],
        },
        {
            rowId: 1,
            color: EFigureColor.DARK,

            figures: [
                EFigureType.PAWN,
                EFigureType.PAWN,
                EFigureType.PAWN,
                EFigureType.PAWN,
                EFigureType.PAWN,
                EFigureType.PAWN,
                EFigureType.PAWN,
                EFigureType.PAWN,
            ],
        },
        {
            rowId: 6,
            color: EFigureColor.LIGHT,

            figures: [
                EFigureType.PAWN,
                EFigureType.PAWN,
                EFigureType.PAWN,
                EFigureType.PAWN,
                EFigureType.PAWN,
                EFigureType.PAWN,
                EFigureType.PAWN,
                EFigureType.PAWN,
            ],
        },
        {
            rowId: 7,
            color: EFigureColor.LIGHT,
            figures: [
                EFigureType.ROOK,
                EFigureType.KNIGHT,
                EFigureType.BISHOP,
                EFigureType.QUEEN,
                EFigureType.KING,
                EFigureType.BISHOP,
                EFigureType.KNIGHT,
                EFigureType.ROOK,
            ],
        },
    ]

    return chessBoard.map((row, idx) => {
        const candidate = schema.find((item) => item.rowId === idx)

        if (candidate) {
            return row.map((cell, cellId) => {
                return {
                    ...cell,
                    figure: generateFigure({
                        x: cellId,
                        y: idx,
                        type: candidate.figures[cellId],
                        color: candidate.color,
                    }),
                }
            })
        }
        return row
    }) as TChessBoard
}
