import clsx from "clsx"
import { useEvent } from "effector-react"
import { GameResultsModal, xoModel } from "entities/xo"
import { THistoryRecord, TPlayer, api } from "entities/xo/lib"
import { PlayerEdit } from "entities/xo/ui/player-edit"
import { SelectPlayerState } from "entities/xo/ui/select-players"
import { ChangeEvent, memo, useCallback, useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { InputField } from "shared/ui/input-field"

export const XOGamePreparePage = () => {
    const players = xoModel.selectors.usePlayers()
    const playersIsReady = xoModel.selectors.usePlayersIsReady()
    return (
        <section className="flex grow flex-col space-y-4 p-5 md:p-10">
            <h2 className="text-2xl  font-bold first-letter:uppercase">настройте игроков</h2>
            <h3 className="text-xl font-semibold first-letter:uppercase">список игроков</h3>

            <div className="grid gap-8 md:grid-cols-2 md:rounded md:bg-gray-100 md:p-8 md:shadow-lg">
                {players.map((player, idx) => (
                    <PlayerCard player={player} key={idx} label={`игрок ${++idx}`} />
                ))}
            </div>

            {/* <GameResultsModal /> */}
            {/* <PlayerEdit /> */}
            {playersIsReady && (
                <NavLink
                    to="/xo/game"
                    replace
                    className="mt-4 self-center rounded bg-green-400 px-8 py-4 text-base uppercase text-white duration-150 hover:bg-green-600 hover:shadow-lg"
                >
                    начать игру
                </NavLink>
            )}
        </section>
    )
}

interface PlayerCardProps {
    player: TPlayer
    label: string
}

const readyDict = [
    { id: 1, value: true, name: "готов" },
    { id: 2, value: false, name: "не готов" },
]
type TPlaterStateDictRecord = { id: number; value: boolean; name: string }

const PlayerCard = memo(({ player, label }: PlayerCardProps) => {
    const [name, setName] = useState(player.name)
    const [ready, setReady] = useState(readyDict[1])

    const handleSavePlayer = useEvent(xoModel.events.changedPlayer)

    const [editable, setEditable] = useState(false)

    const handleToggleEdit = () => {
        setEditable((prev) => !prev)

        if (editable) handleSavePlayer({ ...player, name, ready: ready.value })
    }

    const handleReset = () => {
        setName(player.name)

        const defaultState = readyDict.find((item) => item.value === player.ready)

        if (defaultState) setReady(defaultState)
    }

    const handleSetReady = useCallback(
        (state: TPlaterStateDictRecord) => {
            setReady(state)
        },
        [ready, player]
    )

    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            className={clsx(
                "flex flex-col space-y-3 rounded border   p-2 text-white shadow-lg",
                player.ready ? "bg-green-500" : "bg-rose-500"
            )}
        >
            <span className="first-letter:uppercase">{label}</span>

            <InputField
                caption="имя"
                value={name}
                id={"name"}
                disabled={!editable}
                name={"name"}
                placeholder="введите имя"
                className={clsx(
                    "w-full rounded-lg px-3 py-2 text-gray-900  placeholder:text-sm placeholder:italic placeholder:text-gray-500 disabled:bg-transparent sm:text-sm",
                    "shadow-md disabled:text-white disabled:shadow-none"
                )}
                onChange={(e) => setName(e.target.value)}
            />

            <SelectPlayerState dict={readyDict} onSelect={handleSetReady} currentState={ready} disabled={!editable} />
            <div className="flex justify-between">
                <button
                    type="button"
                    className="rounded border border-white bg-transparent px-4 py-2 text-white"
                    onClick={handleToggleEdit}
                >
                    {editable ? "сохранить" : "редактировать"}
                </button>

                {editable && (
                    <button
                        type="button"
                        className="rounded border border-white bg-transparent px-4 py-2 text-white"
                        onClick={handleReset}
                    >
                        сбросить
                    </button>
                )}
            </div>
        </form>
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
