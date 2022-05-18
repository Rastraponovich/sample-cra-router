import clsx from "clsx"
import { InputHTMLAttributes, memo } from "react"

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    caption?: string
    vertical?: boolean
}
export const InputField = memo(({ vertical, caption, ...props }: InputFieldProps) => {
    return (
        <label className={clsx(vertical && "flex flex-col space-y-2", "flex items-center justify-between space-x-4")}>
            <span className="first-letter:uppercase">{caption}</span>
            <input type="text" {...props} />
        </label>
    )
})

InputField.displayName = "InputField"
