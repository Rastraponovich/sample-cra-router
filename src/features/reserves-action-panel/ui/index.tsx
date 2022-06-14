import clsx from "clsx"
import { ReactNode, memo } from "react"
import { useEvent } from "effector-react"

import { bookingModel } from "entities/booking"
import {
    selectAllReservesClicked,
    toggleComactClicked,
    deleteAllReservesClicked,
    deleteSelectedReservesClicked,
    resetAllFiltersClicked,
} from "../model"

import {
    TrashIcon,
    XCircleIcon,
    XIcon,
    CheckIcon,
    ViewGridIcon,
    ViewListIcon,
    FilterIcon,
} from "@heroicons/react/outline"

import { FilterIcon as FilterIconSolid } from "@heroicons/react/solid"
import { events, selectors } from "features/reserves-filters/model"

export const ActionPanel = () => {
    return (
        <div className="flex flex-col justify-start space-y-2 rounded border  bg-gray-100 p-2 md:flex-row md:items-center  md:space-y-0 md:space-x-4">
            <DeleteAllReservesButton />

            <DeleteSelectedReservesButton />
            <SelectAllButton />

            <ResetFiltersButton />
            <ToggleCompactButton />
            <ShowFiltersButton />
        </div>
    )
}

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode
    caption?: string | ReactNode
}

const ActionButton = memo(({ children, className, caption, ...props }: ActionButtonProps) => {
    return (
        <button
            type="button"
            {...props}
            className={clsx(
                "flex items-center space-x-2 self-start rounded-lg py-2 pl-4 pr-2 text-white shadow-md duration-150 hover:shadow-lg disabled:opacity-50",
                className
            )}
        >
            <span>{caption}</span>
            {children}
        </button>
    )
})
ActionButton.displayName = "ActionButton"

const SelectAllButton = () => {
    const hanldeSelectAllReservesClicked = useEvent(selectAllReservesClicked)

    const selectedReservesCount = bookingModel.selectors.useSelectedReservesCount()
    const filteredOrdersCount = bookingModel.selectors.useFilteredReservesCount()

    return (
        <ActionButton
            caption={selectedReservesCount === filteredOrdersCount ? "снять выделение" : "выбрать все"}
            onClick={hanldeSelectAllReservesClicked}
            className="bg-green-600"
        >
            {selectedReservesCount === filteredOrdersCount ? (
                <XIcon className="h-4 w-4" />
            ) : (
                <CheckIcon className="h-4 w-4" />
            )}
        </ActionButton>
    )
}

const ToggleCompactButton = () => {
    const handleToggleComactClicked = useEvent(toggleComactClicked)
    const compact = bookingModel.selectors.useCompactList()

    return (
        <button
            className="rounded-lg bg-white p-2 text-gray-500 shadow-md hover:text-gray-900 active:text-gray-500"
            onClick={handleToggleComactClicked}
        >
            {compact ? <ViewGridIcon className="h-5 w-5" /> : <ViewListIcon className="h-5 w-5" />}
        </button>
    )
}

const DeleteAllReservesButton = () => {
    const handleDeleteAllReservesClicked = useEvent(deleteAllReservesClicked)

    return (
        <ActionButton className="bg-rose-600" caption="отчистить все" onClick={handleDeleteAllReservesClicked}>
            <TrashIcon className="h-4 w-4" />
        </ActionButton>
    )
}

const DeleteSelectedReservesButton = () => {
    const handleDeleteSelectedReservesClicked = useEvent(deleteSelectedReservesClicked)
    const selectedReservesCount = bookingModel.selectors.useSelectedReservesCount()

    return (
        <ActionButton
            className="bg-rose-600"
            caption={<span>отчистить {selectedReservesCount > 0 && ": " + selectedReservesCount}</span>}
            onClick={handleDeleteSelectedReservesClicked}
            disabled={selectedReservesCount === 0}
        >
            <TrashIcon className="h-4 w-4" />
        </ActionButton>
    )
}

const ResetFiltersButton = () => {
    const handleResetFiltersClicked = useEvent(resetAllFiltersClicked)

    return (
        <ActionButton onClick={handleResetFiltersClicked} caption="сбросить фильтры" className="bg-rose-600">
            <XCircleIcon className="h-4 w-4" />
        </ActionButton>
    )
}

const ShowFiltersButton = () => {
    const handleToggleVisibledClicked = useEvent(events.toggleVisibledFiltersClicked)
    const visibled = selectors.useVisibledFilters()

    return (
        <button
            className="rounded-lg bg-white p-2 text-gray-500 shadow-md hover:text-gray-900 active:text-gray-500"
            onClick={handleToggleVisibledClicked}
        >
            {visibled ? <FilterIcon className="h-5 w-5" /> : <FilterIconSolid className="h-5 w-5" />}
        </button>
    )
}
