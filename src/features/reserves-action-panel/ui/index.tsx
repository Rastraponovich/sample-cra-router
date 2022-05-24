import clsx from "clsx"
import { ReactNode, memo } from "react"
import { useEvent } from "effector-react"

import { bookingModel } from "entities/booking"
import { selectAllReservesClicked, toggleComactClicked } from "../model"

import {
    deleteAllReservesClicked,
    deleteSelectedReservesClicked,
    resetAllFiltersClicked,
} from "../model"

import {
    TrashIcon,
    XCircleIcon,
    XIcon,
    CheckIcon,
} from "@heroicons/react/outline"

export const ActionPanel = () => {
    return (
        <div className="flex flex-col justify-start space-y-2 rounded border  bg-gray-100 p-2 md:flex-row md:items-center  md:space-y-0 md:space-x-4">
            <DeleteAllReservesButton />

            <DeleteSelectedReservesButton />
            <SelectAllButton />

            <ResetFiltersButton />
            <ToggleCompactButton />
        </div>
    )
}

interface ActionButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    caption?: string | ReactNode
}

const ActionButton = memo(
    ({ children, className, caption, ...props }: ActionButtonProps) => {
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
    }
)
ActionButton.displayName = "ActionButton"

const SelectAllButton = () => {
    const hanldeSelectAllReservesClicked = useEvent(selectAllReservesClicked)

    const selectedReservesCount =
        bookingModel.selectors.useSelectedReservesCount()
    const filteredOrdersCount =
        bookingModel.selectors.useFilteredReservesCount()

    return (
        <ActionButton
            caption={
                selectedReservesCount === filteredOrdersCount
                    ? "снять выделение"
                    : "выбрать все"
            }
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

    return (
        <ActionButton
            caption={"toggleCompact"}
            onClick={handleToggleComactClicked}
            className="bg-green-600"
        >
            <XIcon className="h-4 w-4" />
        </ActionButton>
    )
}

const DeleteAllReservesButton = () => {
    const handleDeleteAllReservesClicked = useEvent(deleteAllReservesClicked)

    return (
        <ActionButton
            className="bg-rose-600"
            caption="отчистить все"
            onClick={handleDeleteAllReservesClicked}
        >
            <TrashIcon className="h-4 w-4" />
        </ActionButton>
    )
}

const DeleteSelectedReservesButton = () => {
    const handleDeleteSelectedReservesClicked = useEvent(
        deleteSelectedReservesClicked
    )
    const selectedReservesCount =
        bookingModel.selectors.useSelectedReservesCount()

    return (
        <ActionButton
            className="bg-rose-600"
            caption={<span>отчистить</span>}
            onClick={handleDeleteSelectedReservesClicked}
            disabled={selectedReservesCount === 0}
        >
            {selectedReservesCount > 0 && ":" + selectedReservesCount}
        </ActionButton>
    )
}

const ResetFiltersButton = () => {
    const handleResetFiltersClicked = useEvent(resetAllFiltersClicked)

    return (
        <ActionButton
            onClick={handleResetFiltersClicked}
            caption="сбросить фильтры"
            className="bg-rose-600"
        >
            <XCircleIcon className="h-4 w-4" />
        </ActionButton>
    )
}
