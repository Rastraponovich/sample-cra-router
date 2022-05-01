import { createStore } from "effector"
import { useStore } from "effector-react"
import { TGuns, __guns__ } from "../lib"

const $guns = createStore<TGuns[]>(__guns__)

export const events = {}

const useGuns = () => useStore($guns)
export const selectors = { useGuns }

export const stores = {
    $guns,
}
