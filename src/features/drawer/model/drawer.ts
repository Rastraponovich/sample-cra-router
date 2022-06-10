import { createDomain } from "effector"
import { useStore } from "effector-react"

export const DrawerDomain = createDomain("DrawerDomain")

export const toggleDrawerFx = DrawerDomain.createEffect()

const toggleDrawer = DrawerDomain.createEvent()
export const $isOpenedDrawer = DrawerDomain.createStore<boolean>(false).on(
    [toggleDrawer, toggleDrawerFx],
    (state, _) => !state
)

export const events = {
    toggleDrawer,
}

const useOpenedDrawer = () => useStore($isOpenedDrawer)

export const selectors = {
    useOpenedDrawer,
}
