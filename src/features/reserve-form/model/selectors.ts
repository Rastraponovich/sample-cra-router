import { useStore } from "effector-react"
import { $hallPlanes, $reserve, $tables } from "./reserve-form"

export const useTables = () => useStore($tables)
export const useReserve = () => useStore($reserve)
export const useHallPlanes = () => useStore($hallPlanes)
export const useGuestsCount = () => useStore($reserve).guests
