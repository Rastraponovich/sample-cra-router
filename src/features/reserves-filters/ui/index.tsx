import { AdjustmentsIcon } from "@heroicons/react/outline"
import { useEvent } from "effector-react"
import type { TDict, TPrepay } from "entities/booking/lib"
import { Select } from "shared/ui/select"
import { events, selectors } from "../model"

export const Filters = () => {
    const prepays = selectors.usePrepays()
    const hallplanes = selectors.useHallPlanes()
    const selectedPrepay = selectors.useSelectedPrepay()
    const selectedHallplane = selectors.useSelectedHallPlane()

    const selectPrepay = useEvent(events.selectPrepay)
    const handleSelectHallplane = useEvent(events.selectHallPlane)

    return (
        <div className="flex flex-col space-y-4 rounded bg-gray-100 px-2 py-4">
            <div className="flex items-center space-x-2">
                <span className="text-xl font-semibold first-letter:uppercase sm:text-base">
                    фильтры
                </span>
                <AdjustmentsIcon className="h-6 w-6" />
            </div>

            <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                <div className="flex grow flex-col items-start space-y-2 md:flex-row md:items-center md:space-x-4 md:space-y-0">
                    <span>по залам:</span>
                    <Select<TDict>
                        items={hallplanes}
                        onSelect={handleSelectHallplane}
                        selected={selectedHallplane}
                        containerClassName="grow"
                    />
                </div>

                <div className="flex grow flex-col items-start space-y-2 md:flex-row md:items-center md:space-x-4 md:space-y-0">
                    <span>по предоплате:</span>
                    <Select<TPrepay>
                        items={prepays}
                        onSelect={selectPrepay}
                        selected={selectedPrepay}
                        containerClassName="grow"
                    />
                </div>
            </div>
        </div>
    )
}
