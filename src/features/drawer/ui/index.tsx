import { Dialog, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import { useEvent } from "effector-react"
import { Fragment, useRef } from "react"
import { drawerModel } from ".."
import { routes } from "../../../shared/lib"
import { Nav } from "../../../widgets/navigations"

export const BurgerButton = () => {
    const handleClick = useEvent(drawerModel.events.toggleDrawer)
    const isOpened = drawerModel.selectors.useOpenedDrawer()

    return (
        <button onClick={handleClick} className="block lg:hidden">
            {isOpened ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
    )
}

export const Drawer = () => {
    const isOpened = drawerModel.selectors.useOpenedDrawer()
    const handleClick = useEvent(drawerModel.events.toggleDrawer)
    const completeButtonRef = useRef(null)
    return (
        <Transition.Root show={isOpened} as={Fragment}>
            <Dialog
                as="aside"
                className="fixed inset-0 z-50 overflow-hidden"
                onClose={handleClick}
                initialFocus={completeButtonRef}
            >
                <div className="absolute inset-0 overflow-hidden">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-300"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out duration-300"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <div className="pointer-events-auto relative w-screen max-w-md">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-500"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-500"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                                        <button
                                            ref={completeButtonRef}
                                            type="button"
                                            className="hover:animate-cross-spin group w-8 p-1 text-[#2a2e37] marker:h-8 hover:rounded-full hover:bg-[#2a2e37]"
                                            onClick={handleClick}
                                        >
                                            <span className="sr-only">Close panel</span>
                                            <XIcon
                                                className="h-6 w-6 duration-150  group-hover:text-white"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="flex h-full flex-col divide-y overflow-y-scroll bg-white py-6 shadow-xl">
                                    <div className="flex flex-col items-center justify-between space-y-2 px-4 ">
                                        <Dialog.Title className="text-2xl font-bold text-blue-500 md:text-4xl">
                                            Booking
                                        </Dialog.Title>
                                        <Dialog.Description>Система резервирования</Dialog.Description>
                                    </div>
                                    <Nav routes={routes} vertiacal />
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
