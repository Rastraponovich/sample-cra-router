import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline"
import clsx from "clsx"
import { Field, useField } from "effector-forms"
import {
    InputHTMLAttributes,
    memo,
    useState,
    ChangeEvent,
    FocusEvent,
} from "react"

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    variant?: "normal" | "password"
    pending: boolean
    field: Field<string>
}

export const FormInput = memo(
    ({ field, pending, ...props }: FormInputProps) => {
        const { onBlur, onChange, value, name, errorText } = useField(field)

        const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
        const handleBlur = (e: FocusEvent<HTMLInputElement>) => onBlur()

        const [passwordType, setPasswordType] = useState("password")

        const handleTogglePasswordType = () =>
            setPasswordType((prev) =>
                prev === "password" ? "text" : "password"
            )
        return (
            <label className="group relative flex w-full flex-col justify-between">
                <input
                    value={value}
                    {...props}
                    type={props.type === "password" ? passwordType : props.type}
                    name={name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={clsx(
                        props.className,
                        "peer h-10 w-full border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-transparent",
                        "focus:border-rose-600 focus:outline-none"
                    )}
                    disabled={pending}
                />
                <span
                    className={clsx(
                        "absolute left-0 -top-3.5 text-sm text-gray-600 transition-all first-letter:uppercase",
                        "peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400",
                        "peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                    )}
                >
                    {props.name}
                </span>
                <span className="self-start text-sm italic text-rose-600">
                    {errorText({ name })}
                </span>

                {props.type === "password" && (
                    <button
                        className="absolute right-2 top-2 text-gray-500 duration-150 hover:text-gray-900"
                        onClick={handleTogglePasswordType}
                    >
                        {passwordType === "password" ? (
                            <EyeIcon className="h-6 w-6 " />
                        ) : (
                            <EyeOffIcon className="h-6 w-6 " />
                        )}
                    </button>
                )}
            </label>
        )
    },
    (prev, next) => {
        if (prev.value !== next.value) return false
        return true
    }
)
