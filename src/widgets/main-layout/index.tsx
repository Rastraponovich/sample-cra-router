import { Transition } from "@headlessui/react"
import { appModel } from "entities/app"
import { authModel } from "entities/auth"
import { Drawer } from "features/drawer"
import { Poupup } from "features/poupup"
import { useMemo } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { SpinerLoader } from "shared/ui/spinner-loading"
import { routes } from "../../shared/lib"
import { Footer } from "../footer"
import { Header } from "../header"
import { Nav } from "../navigations"

export const MainLayout = () => {
    const isAppStarted = appModel.selectors.useAppStarted()

    const location = useLocation()

    const pageName = useMemo(() => {
        const names = location.pathname.split("/")
        return names[names.length - 1]
    }, [location])

    return (
        <>
            <Header title={pageName}>
                <div className="hidden lg:flex">
                    <Nav routes={routes} />
                </div>
            </Header>
            <Drawer />
            <main className="flex grow flex-col">{!isAppStarted ? <FirstLoader /> : <Outlet />}</main>
            <Poupup />
            <Footer />
        </>
    )
}

const FirstLoader = () => {
    const messages = appModel.selectors.useEventMessages()
    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 overflow-clip bg-white">
            <SpinerLoader className="h-20 w-20" />
            <div className="flex flex-col space-y-2 overflow-hidden rounded-lg bg-gray-200 p-10 text-gray-900">
                {messages.map((message) => (
                    <Transition
                        key={message}
                        as="div"
                        show={true}
                        appear
                        enterFrom="opacity-0 -translate-y-full"
                        enter="duration-700 transform opacity "
                        enterTo="opacity-100 translate-y-0"
                    >
                        <span>{message}</span>
                    </Transition>
                ))}
            </div>
        </div>
    )
}
