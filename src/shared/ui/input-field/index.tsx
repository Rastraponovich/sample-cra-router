import clsx from "clsx"
import { InputHTMLAttributes, memo } from "react"

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    caption?: string
    vertical?: boolean
    containerClassName?: string
    captionClassName?: string
}
export const InputField = memo(
    ({
        vertical,
        caption,
        containerClassName,
        captionClassName,
        ...props
    }: InputFieldProps) => {
        return (
            <label
                className={clsx(
                    containerClassName,
                    vertical && "flex flex-col space-y-2",
                    "flex items-center justify-between space-x-4"
                )}
            >
                <span
                    className={clsx("first-letter:uppercase", captionClassName)}
                >
                    {caption}
                </span>
                <input {...props} />
            </label>
        )
    }
)

InputField.displayName = "InputField"
