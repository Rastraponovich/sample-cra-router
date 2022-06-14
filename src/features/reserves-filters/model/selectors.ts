import { useStore } from "effector-react"
import {
    $selectedPrepay,
    $selectedHallPlanes,
    $prepays,
    $hallplanes,
    $withDeleted,
    $visibledFilters,
} from "./reserves-filters"

export const usePrepays = () => useStore($prepays)
export const useHallPlanes = () => useStore($hallplanes)
export const useWithDeleted = () => useStore($withDeleted)
export const useSelectedPrepay = () => useStore($selectedPrepay)
export const useVisibledFilters = () => useStore($visibledFilters)
export const useSelectedHallPlane = () => useStore($selectedHallPlanes)
