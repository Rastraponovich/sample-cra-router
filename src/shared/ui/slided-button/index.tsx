import clsx from "clsx"
import { ButtonHTMLAttributes, memo, ReactNode } from "react"
interface SlidedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}
export const SlidedButton = memo(({ children, ...props }: SlidedButtonProps) => {
    return (
        <button
            {...props}
            className={clsx(props.className, "group relative flex items-center overflow-hidden rounded border")}
        >
            <span className="absolute inset-x-0 translate-x-0 duration-300 group-hover:translate-x-full">
                {children}
            </span>
            <span className="absolute inset-x-0  -translate-x-full duration-300 group-hover:-translate-x-0">
                {children}
            </span>
        </button>
    )
})

SlidedButton.displayName = "SlidedButton"
