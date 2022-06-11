import { EyeIcon } from "@heroicons/react/outline"
import clsx from "clsx"
import { InputHTMLAttributes, memo, useState, useRef, useEffect } from "react"

interface UserInputProps extends InputHTMLAttributes<HTMLInputElement> {
    onSaveClicked?(): void
    errorText?: any
}
export const UserInput = memo(
    ({
        onSaveClicked,
        value,
        onChange,
        errorText,
        ...props
    }: UserInputProps) => {
        const [disabledField, setDisabledField] = useState(true)
        const ref = useRef<HTMLInputElement | null>(null)

        const toggledDisabledField = () => {
            setDisabledField((prev) => !prev)

            ref.current?.focus()
        }

        useEffect(() => {
            ref.current?.focus()
        }, [disabledField])

        return (
            <label className="group relative flex w-full flex-col justify-between">
                <input
                    ref={ref}
                    value={value}
                    {...props}
                    onChange={onChange}
                    className={clsx(
                        props.className,
                        "peer h-10 w-full border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-transparent",
                        "focus:border-rose-600 focus:outline-none"
                    )}
                    // disabled={disabledField}
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
                    {errorText(props.name)}
                </span>
                {/* <button
                    onClick={toggledDisabledField}
                    type="button"
                    className={clsx(
                        "absolute right-0 hidden rounded bg-gray-200 p-2",
                        disabledField && "group-hover:block"
                    )}
                >
                    <PencilIcon className="h-4 w-4" />
                </button> */}
                {props.type === "password" && (
                    <button className="absolute right-2 top-2">
                        <EyeIcon className="h-6 w-6 text-gray-500" />
                    </button>
                )}
                {/* <button
                    onClick={onSaveClicked}
                    type="button"
                    className={clsx(
                        "absolute right-0  rounded bg-gray-200 p-2",
                        !disabledField ? "block" : "hidden"
                    )}
                >
                    <SaveIcon className="h-4 w-4" />
                </button> */}
            </label>
        )
    },
    (prev, next) => {
        if (prev.value !== next.value) return false
        return true
    }
)

UserInput.displayName = "UserInput"
