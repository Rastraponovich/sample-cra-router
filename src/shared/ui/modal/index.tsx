import { Transition, Dialog } from "@headlessui/react"
import { Fragment, ReactNode, useRef } from "react"

interface ModalProps {
    children: ReactNode
}

export const Modal = ({ children }: ModalProps) => {
    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-white/50"></div>

            <div className="z-10 flex w-1/2 max-w-[50%] flex-col bg-white">
                <h2>modal</h2>

                {children}
            </div>
        </div>
    )
}

interface ControlledModalProps {
    children: ReactNode
    opened: boolean
    onClose(): void
    title: string | ReactNode
}
export const ControlledModal = ({ children, opened, onClose, title }: ControlledModalProps) => {
    const completeButtonRef = useRef(null)
    return (
        <Transition appear show={opened} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={onClose} initialFocus={completeButtonRef}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-70" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className=" text-lg font-medium leading-6 text-gray-900 first-letter:uppercase"
                                >
                                    {title}
                                </Dialog.Title>
                                <div ref={completeButtonRef}>{children}</div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
