import clsx from "clsx"
import { useEvent, useGate, useStore } from "effector-react"
import { chessModel } from "entities/chess"
import { EFigureColor, TCell, TFigure } from "entities/chess/lib/models"
import { $figuresCount, events, Game, selectors } from "entities/chess/model"
import { memo, useRef } from "react"
import { ChessSprites } from "shared/ui/icons/sprites/chess"

export const ChessBoardPage = () => {
    useGate(Game)

    const players = selectors.usePlayerFigures()

    return (
        <section className="flex flex-col">
            <h2>Chess Page</h2>

            <div className="grid grid-cols-4 gap-x-2 px-10">
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col space-y-2 rounded border p-2">
                        <h2>Black Player</h2>

                        <ul className="grid grid-cols-4 gap-1">
                            {players.black.map((figure) => (
                                <li key={figure.id}>
                                    <ChessSprites
                                        name={`${figure.type.toLowerCase()}-${figure.color.toLowerCase()}`}
                                        className="h-6 w-6"
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col space-y-2 rounded border p-2">
                        <h2>White Player</h2>

                        <ul className="grid grid-cols-4 gap-1">
                            {players.white.map((figure) => (
                                <li key={figure.id}>
                                    <ChessSprites
                                        name={`${figure.type.toLowerCase()}-${figure.color.toLowerCase()}`}
                                        className="h-6 w-6"
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="col-span-3">
                    <ChessBoard />
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
                "flex h-16 w-16 border",
                cell.color === "dark" ? "bg-orange-300" : "bg-gray-300",
                cell.canMove && cell.figure === null && "bg-blue-400/50"
            )}
        >
            {cell.figure !== null && <Figure figure={cell.figure} />}
        </div>
    )
})

Cell.displayName = "Cell"

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
                figure?.color === EFigureColor.DARK ? "text-gray-900" : "text-white"
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
        <div className="flex flex-col">
            {chessboard.map((rows, idx) => (
                <Row key={idx} rows={rows} />
            ))}
        </div>
    )
}
