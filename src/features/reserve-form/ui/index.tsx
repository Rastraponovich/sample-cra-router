import { Listbox, Transition } from "@headlessui/react"
import {
    PlusSmIcon,
    MinusSmIcon,
    CheckIcon,
    SelectorIcon,
    ChevronDoubleLeftIcon,
    CalendarIcon,
    ChevronDoubleDownIcon,
} from "@heroicons/react/outline"
import clsx from "clsx"
import { useEvent } from "effector-react"
import { TDict, THallplane, TTable, _statuses_ } from "entities/booking/lib"
import {
    createRef,
    Fragment,
    HTMLAttributes,
    memo,
    MouseEvent,
    ReactNode,
    RefObject,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react"
import { daysJS } from "shared/lib/api"
import { InputField } from "shared/ui/input-field"
import { Select } from "shared/ui/select"
import { events, selectors } from "../model"

export const ReserveForm = () => {
    const tables = selectors.useTables()
    const reserve = selectors.useReserve()
    const hallPlanes = selectors.useHallPlanes()

    const handleSelectReserveTable = useEvent(events.selectTable)
    const handleSelectHallPlane = useEvent(events.selectHallPlane)
    const handleAddReserveClicked = useEvent(events.reserveAddClicked)
    const handleSelectReserveStatus = useEvent(events.setReserveStatus)
    const handleChangeReserveNumber = useEvent(events.changeReserveNumber)

    const handleSetDate = useEvent(events.changeReserveDate)

    return (
        <form
            onSubmit={handleAddReserveClicked}
            className="flex flex-col space-y-4 bg-white p-4 text-base shadow-md sm:text-sm"
        >
            <div className="grid grid-cols-3 items-center  py-2 px-4">
                <span className="first-letter:uppercase">зал</span>
                <Select<THallplane>
                    items={hallPlanes}
                    selected={reserve.hallplane}
                    onSelect={handleSelectHallPlane}
                    containerClassName="w-full col-span-2"
                />
            </div>

            <InputField
                caption="цена"
                placeholder="цена"
                onChange={handleChangeReserveNumber}
                name="prepay"
                value={reserve.prepay}
                type="number"
                disabled={reserve.hallplaneId === 0}
                className="peer  w-full rounded-lg border py-3 px-4 text-left sm:text-sm"
            />

            <GuestsFormControl />
            <div className="grid grid-cols-3 items-center  px-4 py-2">
                <span className="first-letter:uppercase">стол</span>
                <Select<TTable>
                    items={tables}
                    selected={reserve.table}
                    onSelect={handleSelectReserveTable}
                    containerClassName="grow col-span-2"
                    disabled={reserve.hallplaneId === 0}
                />
            </div>

            <div className="grid grid-cols-3 items-center  px-4 py-2">
                <span className="first-letter:uppercase">статус</span>
                <Select<TDict>
                    items={_statuses_}
                    selected={reserve.status}
                    onSelect={handleSelectReserveStatus}
                    containerClassName="grow col-span-2"
                    disabled={reserve.hallplaneId === 0}
                />
            </div>

            <div className="relative grid grid-cols-2  items-center justify-items-end  rounded-lg border py-2 px-4">
                <span className="absolute left-2 -top-2.5 bg-white px-2 first-letter:uppercase">
                    начало
                </span>
                <span className="justify-self-start">
                    {daysJS(reserve.startDate).format("DD MMM YYYY HH:mm")}
                </span>
                <Calendar
                    date={reserve.startDate}
                    setDate={handleSetDate}
                    id="startDate"
                />
            </div>

            <div className="relative grid grid-cols-2  items-center justify-items-end  rounded-lg border py-2 px-4">
                <span className="absolute left-2 -top-2.5 bg-white px-2 first-letter:uppercase">
                    конец
                </span>
                <span className="justify-self-start">
                    {daysJS(reserve.endDate).format("DD MMM YYYY HH:mm")}
                </span>

                <Calendar
                    date={reserve.endDate}
                    setDate={handleSetDate}
                    id="endDate"
                />
            </div>

            <FormActions />
        </form>
    )
}

const GuestsFormControl = () => {
    const guests = selectors.useGuestsCount()

    return (
        <div className="grid grid-cols-3 items-center  px-4 py-2">
            <span className="first-letter:uppercase">гости</span>
            <div className="col-span-2 flex items-center space-x-2">
                <IncrementGuestsButton />
                <span className="w-16 rounded-lg border py-2 px-4 text-center">
                    {guests}
                </span>
                <DecrementGuestsButton />
            </div>
        </div>
    )
}

const FormActions = () => {
    const reserve = selectors.useReserve()
    const handleReset = useEvent(events.resetClicked)

    return (
        <div className="flex items-center justify-between text-base font-bold  text-white">
            <button
                type="submit"
                className="rounded-lg bg-green-600 px-4 py-2 uppercase shadow-lg disabled:opacity-50 "
                disabled={reserve.guests === 0 || reserve.table.id === 0}
            >
                добавить
            </button>

            <button
                className="rounded-lg bg-rose-600 px-4 py-2 uppercase shadow-lg "
                onClick={handleReset}
            >
                сбросить
            </button>
        </div>
    )
}

const IncrementGuestsButton = () => {
    const handleIncrementGuestsClicked = useEvent(events.incrementGuestsClicked)

    return (
        <button
            type="button"
            onClick={handleIncrementGuestsClicked}
            className=" group text-white"
        >
            <PlusSmIcon className="h-9 w-9 rounded bg-green-600 group-active:shadow-inner group-active:shadow-black/30" />
        </button>
    )
}

const DecrementGuestsButton = () => {
    const guests = selectors.useGuestsCount()
    const handleDecrementGuestsClicked = useEvent(events.decrementGuestsClicked)

    return (
        <button
            type="button"
            disabled={guests === 0}
            onClick={handleDecrementGuestsClicked}
            className="group text-white"
        >
            <MinusSmIcon className="h-9 w-9 rounded bg-rose-600 group-active:shadow-inner group-active:shadow-black/30 group-disabled:bg-rose-300" />
        </button>
    )
}

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
        <div className="flex items-center justify-between space-x-2">
            <span className="after:content-[':']">{caption}</span>

            <Listbox value={selected} onChange={onSelect}>
                <div className={clsx(containerClassName, "relative")}>
                    <Listbox.Button className="group relative w-full max-w-xs cursor-pointer rounded-lg bg-white py-2 pl-6 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
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
    )
}

interface CalendarProps {
    date: number
    setDate({ date, id }: { date: number; id: string }): void
    id: string
}

const Calendar = memo(({ date, setDate, id }: CalendarProps) => {
    const [show, setShow] = useState(false)
    const [daysInMonth, setDaysInMonth] = useState<Array<number>>([])
    const [selectedDay, setSelectedDay] = useState<number>(daysJS(date).date())

    const [currentDay, setCurrentDay] = useState<number>(
        daysJS(date).daysInMonth()
    )

    const [currentMonth, setCurrentMonth] = useState<number>(
        daysJS(date).month()
    )

    const [resultDate, setResultDate] = useState<number>(date)

    const hours = useMemo(() => [...Array(24)].map((i, idx) => idx), [])
    const minutes = useMemo(
        () => [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55],
        []
    )

    const [selectedHour, setSelectedHour] = useState(daysJS(date).hour())
    const [selectedMinutes, setSelectedMinutes] = useState(0)

    const handleConfirm = () => {
        setDate({ date: resultDate, id })
        setShow(false)
    }

    const handleClose = () => {
        setShow(false)
    }

    const handlePrevMonth = () => {
        setCurrentMonth((prev) => prev - 1)
    }

    const handleNextMonth = () => {
        setCurrentMonth((prev) => prev + 1)
    }

    useEffect(() => {
        const days = daysJS().daysInMonth()
        setDaysInMonth([...Array(days).keys()].map((i) => i + 1))
    }, [])

    useEffect(() => {
        const days = daysJS().month(currentMonth).daysInMonth()
        setDaysInMonth([...Array(days).keys()].map((i) => i + 1))
    }, [currentMonth])

    useEffect(() => {
        if (currentDay && currentMonth) {
            setResultDate((prev) =>
                daysJS(prev)
                    .set("hour", selectedHour)
                    .set("minutes", Number(selectedMinutes))
                    .month(currentMonth)
                    .date(selectedDay!)
                    .valueOf()
            )
        }
    }, [selectedDay, currentMonth, selectedHour, selectedMinutes])

    const handleSelectDay = (e: MouseEvent<HTMLDivElement>) => {
        setSelectedDay(Number(e.currentTarget.id))
    }

    const handleSelectCurrentByType = (e: MouseEvent<HTMLButtonElement>) => {
        const type = e.currentTarget.id
        const month = daysJS().month()
        if (type === "month") setCurrentMonth(month)

        if (type === "date") {
            setCurrentMonth(month)
            setSelectedDay(daysJS().month(month).date())
        }
    }

    return (
        <div className="flex flex-col disabled:opacity-30">
            <div className="relative">
                <button
                    onClick={() => setShow((prev) => !prev)}
                    type="button"
                    className={`
             ${show ? "" : "text-opacity-90"}
             group inline-flex items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                    <span>{daysJS(resultDate).format("DD.MM.YYYY")}</span>
                    <CalendarIcon
                        className={`${show ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-white transition duration-150 ease-in-out group-hover:text-opacity-80`}
                        aria-hidden="true"
                    />
                </button>
                <Transition
                    as={Fragment}
                    show={show}
                    appear
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                >
                    <div className="absolute left-0 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform rounded-lg bg-white px-4 sm:px-0 ">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="grid grid-cols-3 divide-x rounded-t-lg">
                                <div className="flex max-h-[300px] w-full justify-between divide-x">
                                    <TimeList
                                        onSelect={setSelectedHour}
                                        values={hours}
                                        selected={selectedHour}
                                    />

                                    <TimeList
                                        onSelect={setSelectedMinutes}
                                        values={minutes}
                                        selected={selectedMinutes}
                                    />
                                </div>

                                <div className="col-span-2 flex flex-col ">
                                    <div className="my-2 flex items-center justify-between px-4">
                                        <button
                                            type="button"
                                            onClick={handlePrevMonth}
                                            className="group relative rounded-full bg-gray-200 p-2 text-gray-500 duration-100 hover:bg-blue-600 hover:text-white active:opacity-75"
                                        >
                                            <ChevronDoubleLeftIcon className="will-change h-4 w-4 group-active:animate-slideArrow" />
                                        </button>
                                        <div className="flex justify-center ">
                                            <span className=" text-xl font-bold first-letter:uppercase">
                                                {daysJS()
                                                    .month(currentMonth)
                                                    .format("MMMM YYYY")}
                                            </span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={handleNextMonth}
                                            className="group rotate-180 rounded-full bg-gray-200 p-2 text-gray-500 duration-100 hover:bg-blue-600 hover:text-white active:opacity-75"
                                        >
                                            <ChevronDoubleLeftIcon className="will-change h-4 w-4  group-active:animate-slideArrow" />

                                            {/* <ChevronDoubleRightIcon className="h-4 w-4 group-hover:animate-slideArrow" /> */}
                                        </button>
                                    </div>
                                    <div className="mb-2 flex items-center justify-center space-x-2">
                                        <span>текущий: </span>
                                        <button
                                            type="button"
                                            onClick={handleSelectCurrentByType}
                                            id="date"
                                            className="text-blue-500 underline underline-offset-1 duration-150 hover:text-blue-600 active:text-blue-700"
                                        >
                                            дата
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleSelectCurrentByType}
                                            id="month"
                                            className="text-blue-500 underline underline-offset-1 duration-150 hover:text-blue-600 active:text-blue-700"
                                        >
                                            месяц
                                        </button>
                                    </div>
                                    <span className="mb-2 px-4 text-center">
                                        {daysJS(resultDate).format(
                                            "DD.MM.YYYY HH:mm"
                                        )}
                                    </span>
                                    <DaysGrid>
                                        {daysInMonth.map((day) => (
                                            <DayInMonth
                                                key={day}
                                                selectDay={handleSelectDay}
                                                selectedDay={selectedDay!}
                                                day={day}
                                                currentDay={currentDay}
                                                currentMonth={currentMonth}
                                            />
                                        ))}
                                    </DaysGrid>
                                </div>
                            </div>
                            <div className="flex items-center justify-between border-t px-4 py-2">
                                <button
                                    onClick={handleClose}
                                    className="rounded-lg bg-rose-600 px-4 py-2 text-white duration-100 first-letter:uppercase hover:ring-2 hover:ring-rose-600 hover:ring-offset-2 active:opacity-75"
                                    type="button"
                                >
                                    отмена
                                </button>
                                <button
                                    onClick={handleConfirm}
                                    type="button"
                                    className="rounded-lg bg-green-600 px-4 py-2 text-white duration-100 first-letter:uppercase hover:ring-2 hover:ring-green-600 hover:ring-offset-2 active:opacity-75"
                                >
                                    выбрать
                                </button>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    )
})
Calendar.displayName = "Calendar"

interface DayInMonthProps {
    day: number
    selectDay(e: MouseEvent<HTMLDivElement>): void
    currentDay: number
    currentMonth: number
    selectedDay: number
}
const DayInMonth = memo(
    ({
        selectedDay,
        currentMonth,
        day,
        selectDay,
        currentDay,
    }: DayInMonthProps) => {
        return (
            <span
                id={String(day)}
                onClick={selectDay}
                className={clsx(
                    " flex h-8 w-8 cursor-pointer items-center justify-center rounded-full  p-1 font-semibold  duration-100 hover:bg-gray-300",
                    day === currentDay &&
                        daysJS().month() === currentMonth &&
                        "bg-gray-200 text-gray-900",

                    day === selectedDay && "bg-blue-600 !text-white"
                )}
            >
                {day}
            </span>
        )
    }
)
DayInMonth.displayName = "DayInMonth"

const DaysGrid = ({ children }: { children: ReactNode }) => {
    return (
        <Transition
            as={Fragment}
            appear
            enter="transform transition ease-out duration-300"
            enterFrom="opacity-0 translate-y-1 -translate-x-full"
            enterTo="opacity-100 translate-y-0 translate-x-0"
            leave="transform transition ease-in duration-300"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 -translate-x-full"
        >
            <div className="grid grid-cols-7 place-items-center border-t p-1">
                {children}
            </div>
        </Transition>
    )
}

interface TimeListProps {
    values: Array<number>
    onSelect(value: number): void
    selected: number
}

const TimeList = memo(({ values, selected, onSelect }: TimeListProps) => {
    const handleNextButtonClicked = () => {
        const currentIndex = values.indexOf(selected)
        const isLastItem = currentIndex === values.length - 1

        if (isLastItem) {
            onSelect(values[0])
        } else {
            onSelect(values[currentIndex + 1])
        }
    }

    const refs = values.reduce(
        (acc: Record<number, RefObject<HTMLLIElement | any>>, value) => {
            acc[value] = createRef<HTMLLIElement>()
            return acc
        },
        {}
    )

    useEffect(() => {
        refs[selected]?.current?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "nearest",
        })
    }, [selected])

    return (
        <div className="flex w-1/2 flex-col space-y-2">
            <ul className="flex  flex-col overflow-auto">
                {values.map((value) => (
                    <TimeListItem
                        value={value}
                        selected={selected}
                        onSelected={onSelect}
                        key={value}
                        refs={refs}
                    />
                ))}
            </ul>
            <button
                type="button"
                onClick={handleNextButtonClicked}
                className="flex items-center justify-center border-t bg-gray-50 p-1 text-gray-400 duration-150 hover:text-gray-900 active:opacity-70"
            >
                <ChevronDoubleDownIcon className="h-3 w-full" />
            </button>
        </div>
    )
})
TimeList.displayName = "TimeList"

interface TimeListItemProps extends HTMLAttributes<HTMLLIElement> {
    onSelected(value: number): void
    selected: number
    value: number
    refs: any
}
const TimeListItem = memo(
    ({ onSelected, selected, value, refs, ...props }: TimeListItemProps) => {
        return (
            <li
                {...props}
                ref={refs[value]}
                onClick={() => onSelected(value)}
                className={clsx(
                    "  border-y p-2 text-center",
                    selected === value && "bg-gray-200"
                )}
            >
                {value}
            </li>
        )
    }
)
TimeListItem.displayName = "TimeListItem"
