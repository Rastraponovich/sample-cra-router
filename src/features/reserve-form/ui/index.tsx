import { useEvent } from "effector-react"

import { daysJS } from "shared/lib"

import { TDict, THallplane, TTable, _statuses_ } from "entities/booking/lib"

import { events, selectors } from "../model"

import { PlusSmIcon, MinusSmIcon } from "@heroicons/react/outline"

import { Calendar } from "shared"
import { Select } from "shared/ui/select"
import { InputField } from "shared/ui/input-field"

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
