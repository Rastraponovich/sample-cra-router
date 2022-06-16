import { Transition } from "@headlessui/react"
import { appModel } from "entities/app"
import { AddReserveModal } from "features/add-reserve"
import { Drawer } from "features/drawer"
import { Poupup } from "features/poupup"
import { useMemo } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { BreadCrumbs } from "shared"
import { SpinerLoader } from "shared/ui/spinner-loading"
import { routes, _translateDict_ } from "shared/lib"
import { Footer } from "../footer"
import { Header } from "../header"
import { Nav } from "../navigations"
import { ChevronRightIcon } from "@heroicons/react/outline"

export const MainLayout = () => {
    const isAppStarted = appModel.selectors.useAppStarted()

    const location = useLocation()

    const pageName = useMemo(() => {
        if (location.pathname === "/") return _translateDict_["/"]
        const names = location.pathname.split("/")

        return _translateDict_[names[names.length - 1]]
    }, [location])

    return (
        <>
            <Header title={pageName}>
                <div className="hidden lg:flex">
                    <Nav routes={routes} />
                </div>
            </Header>
            <Drawer />
            <main className="flex grow flex-col">
                <BreadCrumbs
                    className="flex items-center space-x-2 px-10 py-5 text-gray-900"
                    listClassName="flex space-x-2 items-center"
                    inactiveItemClassName="text-gray-500 hover:bg-gray-200"
                    activeItemClassName="font-semibold"
                    listItemClassName="p-2 rounded-lg items-center "
                    separator={<ChevronRightIcon className="h-3 w-3" />}
                />
                {!isAppStarted ? <FirstLoader /> : <Outlet />}
            </main>
            <Poupup />
            <AddReserveModal />
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
                        as="div"
                        key={Date.now()}
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
