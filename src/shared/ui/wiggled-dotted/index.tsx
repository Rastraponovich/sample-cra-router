import clsx from "clsx"
import { memo } from "react"

interface WiggledDottedProps {
    started: boolean
}

export const WiggledDotted = memo(({ started }: WiggledDottedProps) => {
    return (
        <div className="flex space-x-2">
            <span
                className={clsx(
                    !started && "opacity-80",
                    started && "animate-wiggle",
                    "h-6 w-6 bg-blue-600 rounded-full "
                )}
            ></span>
            <span
                className={clsx(
                    !started && "opacity-80",
                    started && "animate-wiggle-1",
                    "h-6 w-6 bg-blue-600 rounded-full  "
                )}
            ></span>
            <span
                className={clsx(
                    !started && "opacity-80",
                    started && "animate-wiggle-2",
                    "h-6 w-6 bg-blue-600 rounded-full  "
                )}
            ></span>
            <span
                className={clsx(
                    !started && "opacity-80",
                    started && "animate-wiggle-3",
                    "h-6 w-6 bg-blue-600 rounded-full "
                )}
            ></span>
        </div>
    )
})

WiggledDotted.displayName = "WiggledDotted"
