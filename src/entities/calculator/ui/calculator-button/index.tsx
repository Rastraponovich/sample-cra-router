import clsx from "clsx"
import { memo } from "react"

interface CalculatorButtonProps {
    title: string
    onClick(action?: any): void
    full?: boolean
    className?: string
    value?: number | string
    variant?: "normal" | "rose"
}

export const CalculatorButton = memo(
    ({
        title,
        onClick,
        full,
        className,
        variant = "normal",
    }: CalculatorButtonProps) => {
        return (
            <button
                onClick={onClick}
                className={clsx(
                    full && "col-span-2 w-full",
                    "  text-gray-900 rounded p-2 text-center align-middle shadow-sm active:shadow-inner  hover:text-white duration-150",
                    className,
                    variant === "normal"
                        ? "bg-gray-50 hover:bg-blue-600"
                        : "bg-rose-400 hover:bg-rose-600"
                )}
            >
                {title}
            </button>
        )
    }
)
CalculatorButton.displayName = "CalculatorButton"
