import { MenuIcon, XIcon } from "@heroicons/react/outline"
import clsx from "clsx"
import { useEvent } from "effector-react"
import { drawerModel } from "../.."
import { privateRoutes, routes } from "../../../../shared/lib"
import { Nav } from "../../../../widgets/navigations"

export const BurgerButton = () => {
    const handleClick = useEvent(drawerModel.events.toggleDrawer)
    const isOpened = drawerModel.selectors.useOpenedDrawer()
    return (
        <button onClick={handleClick} className="lg:hidden block">
            {isOpened ? (
                <XIcon className="h-6 w-6" />
            ) : (
                <MenuIcon className="h-6 w-6" />
            )}
        </button>
    )
}

export const Drawer = () => {
    const isOpened = drawerModel.selectors.useOpenedDrawer()
    const handleClick = useEvent(drawerModel.events.toggleDrawer)

    return (
        <aside
            className={clsx(
                isOpened ? " translate-x-0" : "translate-x-full",
                "fixed right-0 h-full flex lg:hidden flex-col z-20 duration-150 transition-all w-full drop-shadow-xl"
            )}
        >
            <div
                className={clsx(
                    "z-30 absolute inset-0 bg-white/70 duration-150 transition-all",
                    isOpened ? "  opacity-100" : " opacity-0"
                )}
                onClick={handleClick}
            ></div>
            <div
                className={clsx(
                    "w-[300px] bg-white relative self-end z-50 right-0 h-full  duration-150 transition-all flex flex-col justify-center",
                    isOpened ? "translate-x-0" : "translate-x-full"
                )}
            >
                <Nav privateRoutes={privateRoutes} routes={routes} vertiacal />
            </div>
        </aside>
    )
}
