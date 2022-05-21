import { Transition } from "@headlessui/react"
import { ReactNode, memo } from "react"

interface ScalesComponentAnimationProps {
    children: ReactNode
}

export const ScalesComponentAnimation = memo(({ children }: ScalesComponentAnimationProps) => {
    return (
        <Transition
            show={true}
            as="div"
            appear
            enter="transition-[transform_opacity] duration-500 "
            enterFrom="scale-150 opacity-0"
            enterTo="scale-1 opacity-100"
            leave="transition-[transform_opacity] duration-500 "
            leaveFrom="scale-1 opacity-100"
            leaveTo="opacity-0 scale-70"
        >
            {children}
        </Transition>
    )
})
