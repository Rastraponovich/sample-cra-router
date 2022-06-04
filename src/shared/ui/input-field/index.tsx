import clsx from "clsx"
import { InputHTMLAttributes, memo } from "react"

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    caption?: string
    containerClassName?: string
    captionClassName?: string
}
export const InputField = memo(
    ({
        caption,
        containerClassName,
        captionClassName,
        ...props
    }: InputFieldProps) => {
        return (
            <label className={clsx(containerClassName, "group relative")}>
                <input {...props} />

                <span
                    className={clsx(
                        "first-letter:uppercase",
                        captionClassName,
                        "absolute -top-2.5 left-2 bg-white px-1 text-gray-500 peer-focus:text-blue-900"
                    )}
                >
                    {caption}
                </span>
            </label>
        )
    }
)

InputField.displayName = "InputField"
