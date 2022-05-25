import { Disclosure, Transition } from "@headlessui/react"
import { ChevronUpIcon } from "@heroicons/react/solid"
import { memo, type ReactNode } from "react"

interface AccordionProps {
    children: ReactNode
    title: ReactNode | string
}
export const Accordion = memo(({ title, children }: AccordionProps) => {
    return (
        <Disclosure as="div" className="">
            {({ open }) => (
                <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg border px-4  py-2 text-left text-sm font-medium shadow-lg ">
                        <span>{title}</span>
                        <ChevronUpIcon
                            className={`${
                                open ? "rotate-180 transform" : ""
                            } h-5 w-5 `}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="relative my-2 overflow-hidden rounded-lg bg-white p-2 shadow-lg">
                        <Transition
                            // show={open}
                            enterFrom="opacity-0  -translate-y-full"
                            as="div"
                            appear
                            enterTo="opacity-100 translate-0"
                            enter="transition ease duration-300 transform"
                            leave="transition ease duration-1000 transform"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 -translate-y-full"
                        >
                            {children}
                        </Transition>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
})
Accordion.displayName = "Accordion"
