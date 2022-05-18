import { ClipboardListIcon, RefreshIcon, UserIcon, ArrowCircleLeftIcon } from "@heroicons/react/outline"
import clsx from "clsx"
import { useEvent } from "effector-react"
import { GameResultsModal, xoModel } from "entities/xo"
import { THistoryRecord, TPlayer, api } from "entities/xo/lib"
import { PlayerEdit } from "entities/xo/ui/player-edit"
import { memo, useEffect } from "react"
import { NavLink } from "react-router-dom"

export const XOGame = () => {
    const gameBoard = xoModel.selectors.useGameField()
    const currentPlayer = xoModel.selectors.useCurrentPlayer()

    const movesCount = xoModel.selectors.useMovesCount()
    const players = xoModel.selectors.usePlayers()

    const handleClick = useEvent(xoModel.events.moved)
    const handleRestart = useEvent(xoModel.events.startGame)

    const gameState = xoModel.selectors.useGameState()

    return (
        <section className="flex flex-col space-y-4 p-5 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col space-y-3">
                    <h2 className="text-base first-letter:uppercase">
                        текущий игрок: <b>{currentPlayer?.name}</b>
                    </h2>
                    <h3>
                        текущий ход: <b>{movesCount}</b>
                    </h3>
                </div>
                <div className="flex space-x-2">
                    <button className="self-start rounded-full bg-transparent outline-none" onClick={handleRestart}>
                        <RefreshIcon className="h-6 w-6 text-gray-900 duration-150 active:rotate-180 sm:h-8 sm:w-8 md:h-10  md:w-10 lg:h-12 lg:w-12" />
                    </button>
                    <button className="self-start rounded-full bg-transparent outline-none md:hidden">
                        <ClipboardListIcon className="h-6 w-6 text-gray-900 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12  lg:w-12 " />
                    </button>
                    <button className="self-start rounded-full bg-transparent outline-none md:hidden">
                        <UserIcon className="h-6 w-6 text-gray-900 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12  lg:w-12 " />
                    </button>
                    <NavLink to="/xo">
                        <ArrowCircleLeftIcon className="h-6 w-6 text-gray-900 duration-150 hover:fill-gray-900 hover:text-white active:rotate-90 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12  lg:w-12 " />
                    </NavLink>
                </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-4 sm:gap-x-2">
                <div className="order-3  flex flex-col space-y-2 rounded bg-gray-100 p-2 shadow-lg sm:order-1 sm:col-span-1">
                    <h3 className="text-xl font-bold first-letter:uppercase">игроки</h3>
                    <ul className="spacey-2 flex flex-col">
                        {players.map((player, idx) => (
                            <li key={player.id} className="p-2">
                                {player.name}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="order-1   justify-self-center sm:order-2 sm:col-span-2">
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
                <div className="order-2 flex flex-col space-y-4 self-stretch sm:order-3 sm:shadow-lg">
                    <History />
                </div>
            </div>
            {/* <GameResultsModal /> */}
            {/* <PlayerEdit /> */}
        </section>
    )
}

const History = () => {
    const history = xoModel.selectors.useHistoryMoves()

    return (
        <div className="gorw flex flex-col space-y-2 rounded bg-gray-100 p-2 md:h-full">
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
