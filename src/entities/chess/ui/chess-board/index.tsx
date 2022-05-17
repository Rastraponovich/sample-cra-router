import clsx from "clsx"
import { useEvent, useGate } from "effector-react"
import { TCell } from "entities/chess/lib/models"
import { events, Game, selectors } from "entities/chess/model"
import { memo } from "react"

import { TFigure, EFigureColor } from "entities/chess/lib/models"
import { useRef } from "react"
import { ChessSprites } from "shared/ui/icons/sprites/chess"

export const ChessBoard = () => {
    useGate(Game)
    const chessboard = selectors.useChessBoard()
    return (
        <div className="flex flex-col">
            {chessboard.map((rows, idx) => (
                <Row key={idx} rows={rows} />
            ))}
        </div>
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
                "flex h-16 w-16 border",
                cell.color === "dark" ? "bg-orange-300" : "bg-gray-300",
                cell.canMove && "bg-blue-400/50"
            )}
        >
            {cell.figure !== null && <Figure figure={cell.figure} />}
        </div>
    )
})

Cell.displayName = "Cell"

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

interface FigureProps {
    figure: TFigure | null
}

const Figure = memo(({ figure }: FigureProps) => {
    const selectedFigure = selectors.useSelectedFigureId()
    const ref = useRef<SVGSVGElement | null>(null)

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
            {figure !== null && (
                <ChessSprites
                    name={`${figure.type.toLowerCase()}-${figure.color.toLowerCase()}`}
                    ref={ref}
                    className="h-16 w-16"
                />
            )}
        </span>
    )
})

Figure.displayName = "Figure"
