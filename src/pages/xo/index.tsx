import clsx from "clsx"
import { useEvent } from "effector-react"
import { xoModel } from "entities/xo"
import { useEffect } from "react"

export const XOGamePage = () => {
    const gameBoard = xoModel.selectors.useGameField()
    const currentPlayer = xoModel.selectors.useCurrentPlayer()

    const checkWinner = () => {
        const x1 = gameBoard.filter((cell) => cell.id < 4)
        const x2 = gameBoard.filter((cell) => cell.id > 3 && cell.id < 7)
        const x3 = gameBoard.filter((cell) => cell.id > 6)

        const y1 = gameBoard.filter(
            (cell) => cell.id === 1 || cell.id === 4 || cell.id === 7
        )
        const y2 = gameBoard.filter(
            (cell) => cell.id === 2 || cell.id === 5 || cell.id === 8
        )
        const y3 = gameBoard.filter(
            (cell) => cell.id === 3 || cell.id === 6 || cell.id === 9
        )

        const z1 = gameBoard.filter(
            (cell) => cell.id === 1 || cell.id === 5 || cell.id === 9
        )
        const z2 = gameBoard.filter(
            (cell) => cell.id === 3 || cell.id === 5 || cell.id === 7
        )

        const x1Winner = x1.every((item) => item.playerId === x1[0].playerId)
        const x2Winner = x2.every((item) => item.playerId === x1[0].playerId)
        const x3Winner = x3.every((item) => item.playerId === x1[0].playerId)
        const y1Winner = y1.every((item) => item.playerId === x1[0].playerId)
        const y2Winner = y2.every((item) => item.playerId === x1[0].playerId)
        const y3Winner = y3.every((item) => item.playerId === x1[0].playerId)
        const z1Winner = z1.every((item) => item.playerId === x1[0].playerId)
        const z2Winner = z2.every((item) => item.playerId === x1[0].playerId)

        const rules = [
            { name: "x1Winner", value: x1Winner },
            { name: "x2Winner", value: x2Winner },
            { name: "x3Winner", value: x3Winner },
            { name: "y1Winner", value: y1Winner },
            { name: "y2Winner", value: y2Winner },
            { name: "y3Winner", value: y3Winner },
            { name: "z1Winner", value: z1Winner },
            { name: "z2Winner", value: z2Winner },
        ]

        if (
            x1Winner ||
            x2Winner ||
            x3Winner ||
            y1Winner ||
            y2Winner ||
            y3Winner ||
            z1Winner ||
            z2Winner
        )
            return rules.find((item) => item.value)
        return false
    }

    useEffect(() => {
        console.log(checkWinner())
    }, [gameBoard])

    const history = xoModel.selectors.useHistoryMoves()

    const handleClick = useEvent(xoModel.events.moved)

    return (
        <section className="flex flex-col">
            <h2>XOGame Page</h2>

            <div className="grid grid-cols-4 gap-x-2 px-10">
                <div className="flex flex-col space-y-4">
                    <h2 className="text-base first-letter:uppercase">
                        Текущий игрок: {currentPlayer?.name}
                    </h2>
                    <h3 className="mb-4">historyMoves</h3>

                    <ul className="flex flex-col rounded border border-black">
                        {history.map((item) => (
                            <li className="flex space-x-2  bg-gray-200 p-2 text-sm">
                                <span className="after:content-['.']">
                                    {item.id}
                                </span>
                                <span className="grow font-bold">
                                    {item?.player?.name}
                                </span>
                                <span className="italic">
                                    cellId: {item.cell}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-span-3 justify-self-center">
                    <div className="flex w-48 flex-wrap">
                        {gameBoard.map((item) => (
                            <div
                                key={item.id}
                                className={clsx(
                                    "flex h-16 w-16 items-center justify-center border border-black  text-2xl"
                                )}
                                onClick={() => handleClick(item.id)}
                            >
                                {item.playerId
                                    ? item.playerId === 1
                                        ? "X"
                                        : "O"
                                    : ""}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
