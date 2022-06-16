import { Transition } from "@headlessui/react"
import { useEvent } from "effector-react"
import { Fragment, useCallback, useEffect, useState } from "react"
import { poupupModel } from ".."

export const Poupup = () => {
    const opened = poupupModel.selectors.useOpenedPoupup()
    const handleClose = useEvent(poupupModel.events.closePoupup)

    const onClose = useCallback(() => {
        handleClose()
    }, [])

    const [show, setShow] = useState<boolean>(false)

    useEffect(() => {
        setShow(opened)

        const timer = setTimeout(() => {
            onClose()
        }, 3000)
        return () => clearTimeout(timer)
    }, [opened])

    return (
        <Transition
            as="div"
            show={show}
            // appear
            className="fixed left-8 bottom-8 z-50 ease-linear "
            enter="duration-300 ease-linear transform transition"
            enterFrom="translate-y-full"
            enterTo="translate-y-0"
            leave="duration-300  transform transition ease-linear"
            leaveFrom="translate-y-0 opacity-100"
            leaveTo="translate-y-full opacity-0"
        >
            <div
                className="
             rounded-lg bg-green-600 px-10 py-5 shadow-lg "
            >
                <Message />
            </div>
        </Transition>
    )
}

const Message = () => {
    const message = poupupModel.selectors.useMessage()

    return (
        <Transition appear as="div">
            <Transition.Child
                as={Fragment}
                enter="duration-500 ease-linear transition-opacity"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-70"
                leave="transition-opacity ease-linear"
            >
                <span>{message}</span>
            </Transition.Child>
        </Transition>
    )
}
