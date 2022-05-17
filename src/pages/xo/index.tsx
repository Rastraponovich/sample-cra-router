import clsx from "clsx"
import { useEvent } from "effector-react"
import { GameResultsModal, xoModel } from "entities/xo"
import { THistoryRecord, TPlayer, api } from "entities/xo/lib"
import { PlayerEdit } from "entities/xo/ui/player-edit"
import { memo, useEffect } from "react"

export const XOGamePage = () => {
    const gameBoard = xoModel.selectors.useGameField()
    const currentPlayer = xoModel.selectors.useCurrentPlayer()

    const movesCount = xoModel.selectors.useMovesCount()
    const players = xoModel.selectors.usePlayers()

    const handleClick = useEvent(xoModel.events.moved)

    const gameState = xoModel.selectors.useGameState()

    return (
        <section className="flex flex-col">
            <h2>XOGame Page</h2>

            <h4>{gameState}</h4>

            <div className="grid grid-cols-4 gap-x-2 px-10">
                <div className="flex flex-col space-y-2 rounded bg-gray-100 p-2 shadow-lg">
                    <h3 className="text-xl font-bold first-letter:uppercase">игроки</h3>

                    <PlayerCard player={players[1]} label="игрок 1" />
                    <PlayerCard player={players[2]} label="игрок 2" />
                </div>

                <div className="col-span-2 justify-self-center">
                    <h2 className="text-base first-letter:uppercase">
                        Текущий игрок: {movesCount} - {currentPlayer?.name}
                    </h2>
                    <div className="flex w-48 flex-wrap">
                        {gameBoard.map((item) => (
                            <div
                                key={item.id}
                                className={clsx(
                                    "flex h-16 w-16 items-center justify-center border border-black  text-2xl"
                                )}
                                onClick={() => handleClick(item.id)}
                            >
                                {item.playerId ? (item.playerId === 1 ? "X" : "O") : ""}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <History />
                </div>
            </div>
            <GameResultsModal />
            <PlayerEdit />
        </section>
    )
}

interface PlayerCardProps {
    player: TPlayer
    label: string
}

const PlayerCard = memo(({ player, label }: PlayerCardProps) => {
    return (
        <div
            className={clsx(
                "flex flex-col space-y-3 rounded border   p-2 text-white shadow-lg",
                player.ready ? "bg-green-500" : "bg-rose-500"
            )}
        >
            <span className="first-letter:uppercase">{label}</span>
            <span className="first-letter:uppercase">
                имя: <b>{player.name}</b>
            </span>
            <span className="first-letter:uppercase">
                статус: <b>{player.ready ? "готов" : "не готов"}</b>
            </span>
            <button className="rounded border border-white bg-transparent px-4 py-2 text-white">редактировать</button>
        </div>
    )
})

PlayerCard.displayName = "PlayerCard"

const History = () => {
    const history = xoModel.selectors.useHistoryMoves()

    return (
        <div className="flex flex-col space-y-2 rounded bg-gray-100 p-2 ">
            <h3 className="text-xl font-bold first-letter:uppercase">история</h3>

            <ul className="-mx-2 flex max-h-52 flex-col space-y-2 overflow-auto">
                {history.map((item) => (
                    <HistoryRecord record={item} key={item.id} />
                ))}
            </ul>
        </div>
    )
}

interface HistoryRecordProps {
    record: THistoryRecord
}

const HistoryRecord = memo(({ record }: HistoryRecordProps) => {
    return (
        <li className="flex space-x-2  rounded bg-blue-400 p-2 text-sm text-white">
            <span className="after:content-['.']">{record.id + 1}</span>
            <span className="grow font-bold">{record?.player?.name}</span>
            <span className="italic">cellId: {record.cell}</span>
        </li>
    )
})

HistoryRecord.displayName = "HistoryRecord"
