import {
    CalendarIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@heroicons/react/outline"
import clsx from "clsx"
import { memo, useEffect, useMemo, useState } from "react"
import { Select } from "shared/ui/select"
import { THallplane, TReserve, TTable } from "entities/booking/lib"

import { days } from "../lib"
import { events, selectors } from "../model"
import { useEvent } from "effector-react"
import { daysJS } from "shared/lib/api"

export const ReservesSheduler = () => {
    const currentWeek = selectors.useCurrentWeek()

    const records = selectors.useRecords()

    return (
        <div className="gorw flex flex-col space-y-4">
            <div className="flex items-center  ">
                <h4 className="text-2xl font-semibold first-letter:uppercase">
                    расписание
                </h4>
                <CalendarIcon className="mx-2 h-6 w-6" />
            </div>
            <div className="mb-2 flex items-center space-x-4">
                <WeekSelector />
                <HallplanesFilter />
            </div>
            <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse overflow-auto rounded border border-slate-400 text-sm font-normal text-gray-900">
                    <thead>
                        <tr>
                            <th className="border border-slate-300 bg-slate-300 p-2 ">
                                <div className="flex flex-col space-y-1 divide-y divide-gray-900">
                                    <span>дни недели</span>
                                    <span>столы</span>
                                </div>
                            </th>
                            {days.map((day) => (
                                <Day
                                    number={day.dayOfWeek}
                                    key={day.id}
                                    week={currentWeek}
                                />
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record) => (
                            <CalendarRow
                                {...record}
                                key={record.id + record.name}
                            />
                        ))}
                    </tbody>
                    <tfoot></tfoot>
                </table>
            </div>
        </div>
    )
}
interface CalendarRowProps extends TTable {}

const Cell = memo(({ reserves }: { reserves: Array<TReserve["id"]> }) => {
    const onClick = () => {
        if (reserves.length) console.log(reserves)
    }

    return (
        <td
            onClick={onClick}
            className="border border-slate-300 bg-green-600 py-2 text-center text-white"
        >
            <span className="">{reserves.length}</span>
        </td>
    )
})
Cell.displayName = "Cell"

const CalendarRow = memo(({ reserves, id, name }: CalendarRowProps) => {
    return (
        <tr key={id}>
            <td className="border border-slate-300 bg-gray-200 py-2 text-center">
                {name}
            </td>
            {days.map((day) =>
                reserves.some(
                    (reserve) =>
                        daysJS(Number(reserve.startDate)).day() ===
                        day.dayOfWeek
                ) ? (
                    <Cell
                        key={day.dayOfWeek}
                        reserves={reserves
                            .filter(
                                (reserve) =>
                                    daysJS(Number(reserve.startDate)).day() ===
                                    day.dayOfWeek
                            )
                            .map((item) => item.id)}
                    />
                ) : (
                    <td
                        key={day.dayOfWeek}
                        className="border border-slate-300 bg-gray-200 py-2 text-center text-gray-900"
                    >
                        <span className=""></span>
                    </td>
                )
            )}
        </tr>
    )
})
CalendarRow.displayName = "CalendarRow"

interface DayProps {
    number: number
    week: number
}
const Day = memo(({ number, week }: DayProps) => {
    const [currentDay, stringifyDay] = useCurrentDay(number, week)

    return (
        <th
            className={clsx(
                currentDay && "bg-green-600 text-white",
                "border border-slate-300 p-2 "
            )}
        >
            <span>{stringifyDay}</span>
        </th>
    )
})

Day.displayName = "Day"

const useCurrentDay = (dayofWeek: number, weekNumber: number) => {
    const [isCurrentDay, setIsCurrentDay] = useState(false)
    const [stringifyDay, setStringifyDay] = useState("")
    useEffect(() => {
        setIsCurrentDay(
            daysJS().week(weekNumber).day(dayofWeek).format("DD.MM.YY") ===
                daysJS().format("DD.MM.YY")
        )
        setStringifyDay(
            daysJS().week(weekNumber).day(dayofWeek).format("dd DD.MM.YY")
        )
    }, [dayofWeek, weekNumber])

    return useMemo(
        () => [isCurrentDay, stringifyDay],
        [isCurrentDay, stringifyDay]
    )
}

const WeekSelector = () => {
    const currentWeek = selectors.useCurrentWeek()

    const handlePrevWeekClicked = useEvent(events.prevWeekClicked)
    const handleNextWeekClicked = useEvent(events.nextWeekClicked)
    return (
        <div className="flex items-center space-x-2 sm:self-end">
            <button
                className="rounded-full bg-gray-200 p-2 shadow-sm duration-150 hover:bg-blue-600 hover:text-white hover:shadow-md active:opacity-75"
                onClick={handlePrevWeekClicked}
            >
                <ChevronLeftIcon className="h-4 w-4" />
            </button>

            <div className="flex items-center  rounded border py-2 px-4 text-sm">
                <CalendarIcon className="mr-2 h-6 w-6" />

                <span className=" after:mx-1 after:content-['-']">
                    {daysJS().week(currentWeek).day(0).format("DD.MM.YY")}
                </span>
                <span className="mx-1">
                    {daysJS().week(currentWeek).day(6).format("DD.MM.YY")}
                </span>
            </div>

            <button
                className="rounded-full bg-gray-200 p-2 shadow-sm duration-150 hover:bg-blue-600 hover:text-white hover:shadow-md active:opacity-75"
                onClick={handleNextWeekClicked}
            >
                <ChevronRightIcon className="h-4 w-4" />
            </button>
        </div>
    )
}

const HallplanesFilter = () => {
    const hallplanes = selectors.useHallplanes()
    const selectedHallplane = selectors.useSelectedHallplane()

    const handleSelectHallplane = useEvent(events.selectHallplane)

    return (
        <div className="flex w-full items-center space-x-2 text-base sm:text-sm">
            <span>по залам:</span>
            <Select<THallplane>
                items={hallplanes}
                onSelect={handleSelectHallplane}
                selected={selectedHallplane}
                containerClassName="grow"
            />
        </div>
    )
}
