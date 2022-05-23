import { PlusSmIcon, MinusSmIcon } from "@heroicons/react/outline"
import { useEvent } from "effector-react"
import { TDict, TTable, _statuses_ } from "entities/booking/lib"
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

    return (
        <form
            onSubmit={handleAddReserveClicked}
            className="flex flex-col space-y-4 bg-white p-4 text-base shadow-md sm:text-sm"
        >
            <div className="flex items-center justify-between space-x-10">
                <span className="first-letter:uppercase">зал</span>
                <Select<TDict>
                    items={hallPlanes}
                    selected={reserve.hall}
                    onSelect={handleSelectHallPlane}
                    containerClassName="grow"
                />
            </div>

            <InputField
                caption="цена"
                placeholder="цена"
                onChange={handleChangeReserveNumber}
                name="price"
                value={reserve.price}
                type="number"
                containerClassName="space-x-10"
                className="relative  w-full cursor-default appearance-none rounded-lg bg-white px-4 py-2  text-left shadow-md placeholder:italic placeholder:text-gray-500 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm
                                "
            />

            <GuestsFormControl />
            <div className="flex items-center justify-between space-x-10">
                <span className="first-letter:uppercase">стол</span>
                <Select<TTable>
                    items={tables}
                    selected={reserve.table}
                    onSelect={handleSelectReserveTable}
                    containerClassName="grow"
                />
            </div>

            <div className="flex items-center justify-between space-x-10">
                <span className="first-letter:uppercase">статус</span>
                <Select<TDict>
                    items={_statuses_}
                    selected={reserve.status}
                    onSelect={handleSelectReserveStatus}
                    containerClassName="grow"
                />
            </div>
            <FormActions />
        </form>
    )
}

const GuestsFormControl = () => {
    const guests = selectors.useGuestsCount()

    return (
        <div className="flex items-center space-x-8">
            <span className="first-letter:uppercase">гости</span>
            <div className="flex items-center space-x-2">
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
                disabled={
                    reserve.guests === 0 ||
                    reserve.table.value === 0 ||
                    reserve.status.value === "outOfServie"
                }
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
