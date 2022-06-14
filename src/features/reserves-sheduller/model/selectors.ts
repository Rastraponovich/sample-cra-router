import { useStore } from "effector-react"
import type { TTable } from "entities/booking/lib"
import {
    $currentWeek,
    $firstDayOfSelectedWeek,
    $hallplanes,
    $lastDayOfSelectedWeek,
    $records,
    $selectedHallplane,
    $selectedReserves,
    $showAddReserveModal,
    $showingDialog,
} from "./scheduller"

export const useRecords = () => useStore($records)
export const useHallplanes = () => useStore($hallplanes)
export const useCurrentWeek = () => useStore($currentWeek)
export const useShowingDialog = () => useStore($showingDialog)
export const useSelectedReserves = () => useStore($selectedReserves)
export const useSelectedHallplane = () => useStore($selectedHallplane)
export const useShowReserveModal = () => useStore($showAddReserveModal)
export const useLastDayOfSelectedWeek = () => useStore($lastDayOfSelectedWeek)
export const useFirstDayOfSelectedWeek = () => useStore($firstDayOfSelectedWeek)
export const useRecord = (id: TTable["id"]) => useStore($records).find((record) => record.id === id)
