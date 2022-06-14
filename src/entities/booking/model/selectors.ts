import { useStore } from "effector-react"
import {
    $compacted,
    $filteredReserves,
    $filteredReservesCount,
    $isLoadingReserves,
    $pageMounted,
    $reservesCount,
    $selectedReserves,
    $selectedReservesCount,
} from "./booking"

export const useCompactList = () => useStore($compacted)
export const usePageMounted = () => useStore($pageMounted)
export const useReserves = () => useStore($filteredReserves)
export const useReservesCount = () => useStore($reservesCount)
export const useSelectedReserves = () => useStore($selectedReserves)
export const useIsLoadingReserves = () => useStore($isLoadingReserves)
export const useFilteredReservesCount = () => useStore($filteredReservesCount)
export const useSelectedReservesCount = () => useStore($selectedReservesCount)
