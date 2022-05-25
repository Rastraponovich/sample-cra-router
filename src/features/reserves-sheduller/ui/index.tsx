import {
    CalendarIcon,
    CheckIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    SelectorIcon,
} from "@heroicons/react/outline"
import clsx from "clsx"
import { Fragment, memo, useEffect, useMemo, useState } from "react"
import { Accordion } from "shared/ui/accordion"
import { Select } from "shared/ui/select"
import { TDict, TReserve, TTable, _tables_ } from "entities/booking/lib"

import { days } from "../lib"
import { events, selectors } from "../model"
import { useEvent } from "effector-react"
import { daysJS } from "shared/lib/api"
import { Listbox, Transition } from "@headlessui/react"

export const ReservesSheduler = () => {
    const currentWeek = selectors.useCurrentWeek()

    const hours = Hours
    const minutes = Minutes
    const [selectedHour, setSelectedHour] = useState(Hours[0])
    const [selectedMinutes, setSelectedMinutes] = useState(Minutes[0])

    const records = selectors.useRecords()

    return (
        <div className="gorw flex flex-col space-y-4">
            <Accordion
                title={
                    <div className="flex items-center  ">
                        <h4 className="text-2xl font-semibold first-letter:uppercase">
                            расписание
                        </h4>
                        <CalendarIcon className="mx-2 h-6 w-6" />
                    </div>
                }
            >
                <div className="mb-2 flex items-center space-x-4">
                    <WeekSelector />
                    <HallplanesFilter />
                    <TimeSelect
                        caption="часы"
                        items={hours}
                        selected={selectedHour}
                        onSelect={(e) => setSelectedHour(e)}
                        containerClassName="grow w-max"
                    />
                    <TimeSelect
                        caption="минуты"
                        items={minutes}
                        selected={selectedMinutes}
                        onSelect={(e) => setSelectedMinutes(e)}
                        containerClassName="grow w-max"
                    />
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
                            {records.map((record, idx) => (
                                <CalendarRow
                                    {...record}
                                    key={record.id + record.name}
                                />
                            ))}
                        </tbody>
                        <tfoot></tfoot>
                    </table>
                </div>
            </Accordion>
        </div>
    )
}
interface CalendarRowProps extends TTable {
    reserves: Array<TReserve>
}

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
                        daysJS(reserve.startDate).day() === day.dayOfWeek
                ) ? (
                    <Cell
                        reserves={reserves
                            .filter(
                                (reserve) =>
                                    daysJS(reserve.startDate).day() ===
                                    day.dayOfWeek
                            )
                            .map((item) => item.id)}
                    />
                ) : (
                    <td className="border border-slate-300 bg-gray-200 py-2 text-center text-gray-900">
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
        <div className="flex w-full items-center space-x-2">
            <span>по залам:</span>
            <Select<TDict>
                items={hallplanes}
                onSelect={handleSelectHallplane}
                selected={selectedHallplane}
                containerClassName="grow"
            />
        </div>
    )
}

const Minutes = ["0", "15", "30", "45"]
const Hours = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
]

interface TimeSelectProps {
    containerClassName?: string
    onSelect(value: string): void
    selected: string
    items: Array<string>
    caption: string
}
const TimeSelect = ({
    containerClassName,
    selected,
    onSelect,
    caption,
    items,
}: TimeSelectProps) => {
    return (
        <div className="flex w-full items-center space-x-2">
            <span>{caption}</span>

            <div className={containerClassName}>
                <Listbox value={selected} onChange={onSelect}>
                    <div className="relative">
                        <Listbox.Button className="group relative w-full max-w-xs cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                            <span className="block truncate">{selected}</span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <SelectorIcon
                                    className="h-5 w-5 text-gray-400 duration-300 group-hover:text-gray-500 group-active:text-gray-900"
                                    aria-hidden="true"
                                />
                            </span>
                        </Listbox.Button>
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-full  overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {items.map((item, itemIdx) => (
                                    <Listbox.Option
                                        key={itemIdx}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                active
                                                    ? "bg-amber-100 text-amber-900"
                                                    : "text-gray-900"
                                            }`
                                        }
                                        value={item}
                                    >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${
                                                        selected
                                                            ? "font-medium"
                                                            : "font-normal"
                                                    }`}
                                                >
                                                    {item}
                                                </span>
                                                {selected ? (
                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                        <CheckIcon
                                                            className="h-5 w-5"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>
            </div>
        </div>
    )
}
