import { CalendarIcon } from "@heroicons/react/outline"
import clsx from "clsx"
import { useEvent, useList } from "effector-react"
import { ActionPanel } from "features/reserves-action-panel"
import { Filters } from "features/reserves-filters/ui"
import { ScalesComponentAnimation } from "shared/ui/scale-animation-wrapper"
import { ReserveCard } from "."
import { bookingModel } from ".."
import { events, selectors } from "../model"

const ReservesList = () => {
    const filteredOrders = selectors.useReserves()
    const compact = bookingModel.selectors.useCompactList()
    const selectedReserves = bookingModel.selectors.useSelectedReserves()

    const isLoading = selectors.useIsLoadingReserves()

    const handleSelectBooking = useEvent(events.selectReserve)
    return (
        <div
            className={clsx(
                compact
                    ? "flex flex-col space-y-2"
                    : "grid justify-center gap-4 py-2 sm:grid-cols-2 md:grid-cols-3 md:justify-start md:gap-3 lg:grid-cols-5 xl:grid-cols-6"
            )}
        >
            {/* {useList(bookingModel.$filteredReserves, {
                keys: [isLoading, filteredOrders, selectedReserves],
                fn: (reserve) => (
                    <ScalesComponentAnimation>
                        <ReserveCard
                            reserve={reserve}
                            onClick={handleSelectBooking}
                            compact={compact}
                            selected={selectedReserves.some((id) => id === reserve.id)}
                        />
                    </ScalesComponentAnimation>
                ),
            })} */}
            {filteredOrders.map((reserve) => (
                <ScalesComponentAnimation key={reserve.id}>
                    <ReserveCard
                        key={reserve.id}
                        reserve={reserve}
                        onClick={handleSelectBooking}
                        compact={compact}
                        selected={selectedReserves.some((id) => id === reserve.id)}
                    />
                </ScalesComponentAnimation>
            ))}
        </div>
    )
}

export const Reserves = () => {
    const reservesCount = selectors.useReservesCount()

    const filteredReservesCount = selectors.useFilteredReservesCount()

    return (
        <section className="flex flex-col space-y-2 bg-gray-200 p-4">
            <div className="flex items-center space-x-2">
                <h4 className="!my-4 text-2xl font-bold first-letter:uppercase sm:text-xl">список резервов</h4>
                <span>
                    {filteredReservesCount} / {reservesCount}
                </span>
                <CalendarIcon className="h-6 w-6" />
            </div>
            <div className="flex flex-col  space-y-2 text-base sm:text-sm">
                <ActionPanel />

                <Filters />
            </div>
            {filteredReservesCount === 0 && <span className="w-full text-center text-4xl ">броней нет</span>}
            <ReservesList />
        </section>
    )
}
