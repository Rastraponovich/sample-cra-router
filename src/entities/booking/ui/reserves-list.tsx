import { useEvent } from "effector-react"
import { ScalesComponentAnimation } from "shared/ui/scale-animation-wrapper"
import { ReserveCard } from "."
import { events, selectors } from "../model"

export const ReservesList = () => {
    const filteredOrders = selectors.useReserves()
    const selectedReserves = selectors.useSelectedReserves()
    const handleSelectBooking = useEvent(events.selectReserve)

    return (
        <div className="grid gap-4 py-2 sm:grid-cols-2 md:grid-cols-3 md:gap-3 lg:grid-cols-5 xl:grid-cols-6">
            {filteredOrders.map((reserve) => (
                <ScalesComponentAnimation key={reserve.id}>
                    <ReserveCard
                        key={reserve.id}
                        reserve={reserve}
                        onClick={handleSelectBooking}
                        selected={selectedReserves.some((id) => id === reserve.id)}
                    />
                </ScalesComponentAnimation>
            ))}
        </div>
    )
}
