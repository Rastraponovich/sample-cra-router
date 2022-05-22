import {
    TrashIcon,
    XIcon,
    CheckIcon,
    XCircleIcon,
} from "@heroicons/react/outline"
import { useEvent } from "effector-react"
import { bookingModel } from "entities/booking"
import {
    deleteAllReservesClicked,
    deleteSelectedReservesClicked,
    resetAllFiltersClicked,
    selectAllReservesClicked,
} from "../model"

export const ActionPanel = () => {
    const handleResetAllOrdres = useEvent(deleteAllReservesClicked)
    const handleResetSelectedOrdres = useEvent(deleteSelectedReservesClicked)
    const selectedReservesCount =
        bookingModel.selectors.useSelectedReservesCount()
    const filteredOrdersCount =
        bookingModel.selectors.useFilteredReservesCount()

    const handleResetAllFilters = useEvent(resetAllFiltersClicked)

    const hanldeSelectAllOrders = useEvent(selectAllReservesClicked)

    return (
        <div className="flex flex-col justify-start space-y-2 rounded border  bg-gray-100 p-2 md:flex-row md:items-center  md:space-y-0 md:space-x-4">
            <button
                className="flex items-center space-x-2 self-start rounded-lg bg-rose-600 py-2 pl-4 pr-2 text-white shadow-lg"
                onClick={handleResetAllOrdres}
            >
                <span>отчистить все</span>
                <TrashIcon className="h-4 w-4" />
            </button>
            <button
                className="self-start rounded-lg bg-rose-600 px-4 py-2 text-white shadow-lg disabled:opacity-50"
                onClick={handleResetSelectedOrdres}
                disabled={selectedReservesCount === 0}
            >
                отчистить
                {selectedReservesCount > 0 && ":" + selectedReservesCount}
            </button>
            <button
                className="flex items-center space-x-2 self-start rounded-lg bg-green-600 py-2 pl-4 pr-2 text-white shadow-lg disabled:opacity-50"
                onClick={hanldeSelectAllOrders}
                disabled={filteredOrdersCount === 0}
            >
                <span>
                    {selectedReservesCount === filteredOrdersCount
                        ? "снять выделение"
                        : "выбрать все"}
                </span>
                {selectedReservesCount === filteredOrdersCount ? (
                    <XIcon className="h-4 w-4" />
                ) : (
                    <CheckIcon className="h-4 w-4" />
                )}
            </button>

            <button
                type="button"
                onClick={handleResetAllFilters}
                className="flex items-center space-x-2 self-start rounded-lg bg-rose-600 py-2 pl-4 pr-2 text-white shadow-lg disabled:opacity-50"
            >
                <span>сбросить фильтры</span>

                <XCircleIcon className="h-4 w-4" />
            </button>
        </div>
    )
}
