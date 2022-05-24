import { memo, useEffect, useMemo, useState } from "react"

import { ReserveForm } from "features/reserve-form/ui"
import { ReservePreview } from "features/reserve-form/ui/reserve-preview"
import { Reserves } from "entities/booking/ui/reserves-list"
import dayjs from "dayjs"

import weekOfYear from "dayjs/plugin/weekOfYear"
import localeData from "dayjs/plugin/localeData"
import "dayjs/locale/ru"
import clsx from "clsx"
import { TReserve, _tables_ } from "entities/booking/lib"
import { bookingModel } from "entities/booking"
import {
    CalendarIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@heroicons/react/outline"
import { Accordion } from "shared/ui/accordion"
dayjs.extend(weekOfYear)
dayjs.extend(localeData)
dayjs.locale("ru")

export const BookingPage = () => {
    const [currentWeek, setCurrentWeek] = useState(dayjs().week())

    const reserves = bookingModel.selectors.useReserves()

    const [records, setRecords] = useState<Array<TTableRecord>>(tablesRecord)

    useEffect(() => {
        const result = records.map((item) => {
            return {
                ...item,
                reserves:
                    reserves.filter((reserve) => {
                        const startHour = dayjs(reserve.startDate).hour()
                        const endHour = dayjs(reserve.endDate).hour()
                        const currentReserveWeek = dayjs(
                            reserve.startDate
                        ).week()

                        if (
                            currentWeek === currentReserveWeek &&
                            startHour === item.hour
                        )
                            return reserve
                        if (
                            currentWeek === currentReserveWeek &&
                            endHour === item.hour
                        )
                            return reserve
                    }) || [],
            }
        })

        setRecords(result)
    }, [reserves, currentWeek])

    const setPrevWeek = () => {
        setCurrentWeek((prev) => (prev > 0 ? prev - 1 : 53))
    }
    const setNextWeek = () => {
        setCurrentWeek((prev) => (prev === 53 ? 0 : prev + 1))
    }

    useEffect(() => {
        // setMonth(() => dayjs().month(currentMonth))
    }, [currentWeek])

    return (
        <div className="flex flex-col space-y-2 px-4 py-2 md:space-y-4 md:px-10 md:py-5">
            <section className="flex flex-col justify-center rounded bg-slate-100 p-4 md:p-8 ">
                <h3 className="mb-4 text-xl font-semibold sm:text-base">
                    Booking Card
                </h3>
                <div className="grid  gap-2 md:grid-cols-2 md:gap-0">
                    <ReservePreview />
                    <ReserveForm />
                </div>
            </section>

            {/* <CodeGenerator
                filteredhallPlanesId={filteredHallPlanes.id}
                prepaysId={prepays.id}
            /> */}

            <Reserves />

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
                    <div className="mb-2 flex flex-col items-center space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
                        <div className="flex items-center space-x-2 sm:self-end">
                            <button
                                className="rounded-full bg-gray-200 p-2 shadow-sm duration-150 hover:bg-blue-600 hover:text-white hover:shadow-md active:opacity-75"
                                onClick={setPrevWeek}
                            >
                                <ChevronLeftIcon className="h-4 w-4" />
                            </button>

                            <div className="flex items-center  rounded border py-2 px-4 text-sm">
                                <CalendarIcon className="mr-2 h-6 w-6" />

                                <span className=" after:mx-1 after:content-['-']">
                                    {dayjs()
                                        .week(currentWeek)
                                        .day(0)
                                        .format("DD.MM.YY")}
                                </span>
                                <span className="mx-1">
                                    {dayjs()
                                        .week(currentWeek)
                                        .day(6)
                                        .format("DD.MM.YY")}
                                </span>
                            </div>

                            <button
                                className="rounded-full bg-gray-200 p-2 shadow-sm duration-150 hover:bg-blue-600 hover:text-white hover:shadow-md active:opacity-75"
                                onClick={setNextWeek}
                            >
                                <ChevronRightIcon className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                    <div className="w-full overflow-x-auto">
                        <table className="w-full border-collapse overflow-auto rounded border border-slate-400 text-sm font-normal text-gray-900">
                            <thead>
                                <tr>
                                    <th className="border border-slate-300 bg-slate-300 p-2 ">
                                        <div className="flex flex-col space-y-1 divide-y divide-gray-900">
                                            <span>дни недели</span>
                                            <span>часы</span>
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
                                {records.map((record, idx) => {
                                    if (
                                        record.reserves.some(
                                            (item) =>
                                                dayjs(item.startDate).hour() ===
                                                record.hour
                                        )
                                    )
                                        return (
                                            <CalendarRow
                                                {...record}
                                                key={record.id}
                                                count={
                                                    record.reserves.filter(
                                                        (item) =>
                                                            dayjs(
                                                                item.startDate
                                                            ).hour() ===
                                                            record.hour
                                                    ).length
                                                }
                                            />
                                        )
                                    return (
                                        <CalendarRow
                                            {...record}
                                            key={record.id}
                                        />
                                    )
                                })}
                            </tbody>
                            <tfoot></tfoot>
                        </table>
                    </div>
                </Accordion>
            </div>
            <div className="flex h-40 grow flex-col"></div>
        </div>
    )
}

const days: Array<TDayOfWeek> = [
    { id: 1, dayOfWeek: 1 },
    { id: 2, dayOfWeek: 2 },
    { id: 3, dayOfWeek: 3 },
    { id: 4, dayOfWeek: 4 },
    { id: 5, dayOfWeek: 5 },
    { id: 6, dayOfWeek: 6 },
    { id: 7, dayOfWeek: 7 },
]

const tablesRecord: Array<TTableRecord> = [
    { id: 0, hour: 0, reserves: [] },
    { id: 1, hour: 1, reserves: [] },
    { id: 2, hour: 2, reserves: [] },
    { id: 3, hour: 3, reserves: [] },
    { id: 4, hour: 4, reserves: [] },
    { id: 5, hour: 5, reserves: [] },
    { id: 6, hour: 6, reserves: [] },
    { id: 7, hour: 7, reserves: [] },
    { id: 8, hour: 8, reserves: [] },
    { id: 9, hour: 9, reserves: [] },
    { id: 10, hour: 10, reserves: [] },
    { id: 11, hour: 11, reserves: [] },
    { id: 12, hour: 12, reserves: [] },
    { id: 13, hour: 13, reserves: [] },
    { id: 14, hour: 14, reserves: [] },
    { id: 15, hour: 15, reserves: [] },
    { id: 16, hour: 16, reserves: [] },
    { id: 17, hour: 17, reserves: [] },
    { id: 18, hour: 18, reserves: [] },
    { id: 19, hour: 19, reserves: [] },
    { id: 20, hour: 20, reserves: [] },
    { id: 21, hour: 21, reserves: [] },
    { id: 22, hour: 22, reserves: [] },
    { id: 23, hour: 23, reserves: [] },
]

type TTableRecord = {
    id: number
    hour: number
    reserves: Array<TReserve>
}

type TDayOfWeek = {
    id: number
    dayOfWeek: number
}

interface CalendarRowProps {
    hour: number
    reserves: Array<TReserve>
    start?: boolean
    count?: number | null
}

const StartCell = ({
    count,
    reserves,
}: {
    count: number | null
    reserves: Array<TReserve["id"]>
}) => {
    const onClick = () => {
        if (count && reserves.length) console.log(reserves)
    }

    return (
        <td
            onClick={onClick}
            className="border border-slate-300 bg-green-600 py-2 text-center text-white"
        >
            <span className="">{count}</span>
        </td>
    )
}

const CalendarRow = memo(
    ({ hour, reserves, count = null }: CalendarRowProps) => {
        return (
            <tr key={hour}>
                <td className="border border-slate-300 bg-gray-200 py-2 text-center">
                    {hour}
                </td>
                {days.map((day) =>
                    reserves.some(
                        (reserve) =>
                            dayjs(reserve.startDate).day() === day.dayOfWeek &&
                            hour === dayjs(reserve.startDate).hour()
                    ) ? (
                        <StartCell
                            count={count}
                            reserves={reserves
                                .filter(
                                    (reserve) =>
                                        dayjs(reserve.startDate).hour() === hour
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
    }
)
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
            dayjs().week(weekNumber).day(dayofWeek).format("DD.MM.YY") ===
                dayjs().format("DD.MM.YY")
        )
        setStringifyDay(
            dayjs().week(weekNumber).day(dayofWeek).format("dd DD.MM.YY")
        )
    }, [dayofWeek, weekNumber])

    return useMemo(
        () => [isCurrentDay, stringifyDay],
        [isCurrentDay, stringifyDay]
    )
}

interface CodeGeneratorProps {
    filteredhallPlanesId: number
    prepaysId: number
    // params?:Array<string>
}
//refactoring needded to accept params array
const CodeGenerator = memo(
    ({ filteredhallPlanesId, prepaysId }: CodeGeneratorProps) => {
        const params = [
            filteredhallPlanesId !== 0 && `hallId=${filteredhallPlanesId}`,
            prepaysId !== 0 && `prepaysId=${prepaysId}`,
        ]

        return (
            <section className="flex flex-col space-y-4 bg-teal-600 px-4 py-8">
                <h4 className="text-2xl font-bold text-white sm:text-xl">
                    api query generator
                </h4>

                <pre className="rounded bg-gray-300 p-4 text-sm">
                    <p>для получения данных выполним запрос</p>
                    <code>GET: /api/orders?{params.join("&")}</code>
                </pre>
            </section>
        )
    }
)

CodeGenerator.displayName = "CodeGenerator"
