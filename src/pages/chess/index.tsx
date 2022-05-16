import clsx from "clsx"
import { useEvent, useGate, useList, useStore } from "effector-react"
import { chessModel } from "entities/chess"
import { EFigureColor, TCell, TFigure } from "entities/chess/lib/models"
import {
    $figures,
    $figuresCount,
    events,
    Game,
    selectors,
} from "entities/chess/model"
import { memo } from "react"

export const ChessBoardPage = () => {
    useGate(Game)
    const selectedFigureid = selectors.useSelectedFigureId()
    const handleClick = useEvent(events.selectFigure)

    const count = useStore($figuresCount)
    return (
        <section className="flex flex-col">
            <h2>Chess Page</h2>

            <div className="flex flex-col items-center px-10">
                <ChessBoard />
                <div className="mt-4 px-4">
                    <ul className="grid grid-cols-11 gap-2">
                        {useList($figures, {
                            keys: [count, selectedFigureid, handleClick],
                            fn: (figure) => (
                                <li
                                    onClick={() => {
                                        handleClick({ figure } as TCell)
                                    }}
                                    className={clsx(
                                        figure.color === EFigureColor.DARK
                                            ? "bg-orange-300 "
                                            : "bg-gray-300",

                                        "border p-2 text-sm",
                                        selectedFigureid === figure.id &&
                                            "rounded border-blue-400 text-blue-400"
                                    )}
                                >
                                    {figure.type}
                                </li>
                            ),
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

interface CellProps {
    cell: TCell
}

const Cell = memo(({ cell }: CellProps) => {
    const handleClick = useEvent(events.selectFigure)
    return (
        <div
            onClick={() => handleClick(cell)}
            className={clsx(
                "flex h-16 w-16",
                cell.color === "dark" ? "bg-orange-300" : "bg-gray-300"
            )}
        >
            <Figure figure={cell.figure} />
        </div>
    )
})

Cell.displayName = "Cell"

interface FigureProps {
    figure: TFigure | null
}

const Figure = memo(({ figure }: FigureProps) => {
    const images: any = {
        KING: {
            LIGHT: "\u2654",
            DARK: "\u265A",
        },
        PAWN: {
            LIGHT: "\u2659",
            DARK: "\u265F",
        },
        ROOK: {
            LIGHT: "\u2656",
            DARK: "\u265C",
        },
        QUEEN: {
            LIGHT: "\u2655",
            DARK: "\u265B",
        },
        KNIGHT: {
            LIGHT: "\u2658",
            DARK: "\u265E",
        },
        BISHOP: {
            LIGHT: "\u2657",
            DARK: "\u265D",
        },
    }

    const selectedFigure = selectors.useSelectedFigureId()

    return (
        <span
            className={clsx(
                "flex w-full grow items-center justify-center p-2 text-center  text-5xl ",
                selectedFigure === figure?.id && "mb-2",
                figure?.color === EFigureColor.DARK
                    ? "text-gray-900"
                    : "text-white"
            )}
        >
            {figure !== null ? images[figure?.type][figure?.color] : null}
        </span>
    )
})
Figure.displayName = "Figure"

interface RowProps {
    rows: TCell[]
}
const Row = memo(({ rows }: RowProps) => {
    return (
        <div className="flex">
            {rows.map((cell) => (
                <Cell key={`${cell.y}${cell.x}`} cell={cell} />
            ))}
        </div>
    )
})

Row.displayName = "Row"

const ChessBoard = () => {
    const chessboard = chessModel.selectors.useChessBoard()

    return (
        <div className="flex flex-col items-center">
            {chessboard.map((rows, idx) => (
                <Row key={idx} rows={rows} />
            ))}
        </div>
    )
}
