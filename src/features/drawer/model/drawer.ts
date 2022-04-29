import { createEvent, createStore } from "effector"
import { useStore } from "effector-react"

const toggleDrawer = createEvent()
const $isOpenedDrawer = createStore<boolean>(false).on(
    toggleDrawer,
    (state, _) => !state
)

export const events = {
    toggleDrawer,
}

const useOpenedDrawer = () => useStore($isOpenedDrawer)

export const selectors = {
    useOpenedDrawer,
}
