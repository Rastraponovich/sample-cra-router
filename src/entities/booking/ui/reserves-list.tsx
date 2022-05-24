import { CalendarIcon } from "@heroicons/react/outline"
import clsx from "clsx"
import { useEvent } from "effector-react"
import { ActionPanel } from "features/reserves-action-panel"
import { Filters } from "features/reserves-filters"
import { useState } from "react"
import { ScalesComponentAnimation } from "shared/ui/scale-animation-wrapper"
import { ReserveCard } from "."
import { bookingModel } from ".."
import { events, selectors } from "../model"

const ReservesList = () => {
    const filteredOrders = selectors.useReserves()
    const selectedReserves = selectors.useSelectedReserves()
    const handleSelectBooking = useEvent(events.selectReserve)

    const compact = bookingModel.selectors.useCompactList()

    return (
        <div
            className={clsx(
                compact
                    ? "flex flex-col space-y-2"
                    : "grid justify-center gap-4 py-2 sm:grid-cols-2 md:grid-cols-3 md:justify-start md:gap-3 lg:grid-cols-5 xl:grid-cols-6"
            )}
        >
            {filteredOrders.map((reserve) => (
                <ScalesComponentAnimation key={reserve.id}>
                    <ReserveCard
                        key={reserve.id}
                        reserve={reserve}
                        onClick={handleSelectBooking}
                        compact={compact}
                        selected={selectedReserves.some(
                            (id) => id === reserve.id
                        )}
                    />
                </ScalesComponentAnimation>
            ))}
        </div>
    )
}

export const Reserves = () => {
    const reservesCount = selectors.useReservesCount()
    const reserves = selectors.useReserves()

    return (
        <section className="flex flex-col space-y-2 bg-gray-200 p-4">
            <div className="flex items-center space-x-2">
                <h4 className="!my-4 text-2xl font-bold first-letter:uppercase sm:text-xl">
                    список резервов
                </h4>
                <span>
                    {reserves.length} / {reservesCount}
                </span>
                <CalendarIcon className="h-6 w-6" />
            </div>
            {reservesCount > 0 && (
                <div className="flex flex-col  space-y-2 text-base sm:text-sm">
                    <ActionPanel />

                    <Filters />
                </div>
            )}

            {reserves.length === 0 && (
                <span className="w-full text-center text-4xl ">броней нет</span>
            )}
            <ReservesList />
        </section>
    )
}
