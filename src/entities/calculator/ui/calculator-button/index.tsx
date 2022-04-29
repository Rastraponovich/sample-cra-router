import clsx from "clsx"
import { memo } from "react"

interface CalculatorButtonProps {
    title: string
    onClick(action?: any): void
    full?: boolean
    className?: string
    value?: number | string
}

export const CalculatorButton = memo(
    ({ title, onClick, full, className }: CalculatorButtonProps) => {
        return (
            <button
                onClick={onClick}
                className={clsx(
                    full && "col-span-2 w-full",
                    " bg-gray-50 text-gray-900 rounded p-2 text-center align-middle shadow-sm active:shadow-inner hover:bg-blue-600 hover:text-white duration-150",
                    className
                )}
            >
                {title}
            </button>
        )
    }
)
CalculatorButton.displayName = "CalculatorButton"
