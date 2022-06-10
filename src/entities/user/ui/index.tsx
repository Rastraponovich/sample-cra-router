import { PencilIcon, SaveIcon, UserCircleIcon } from "@heroicons/react/outline"
import clsx from "clsx"
import { useField, useForm } from "effector-forms"
import { ChangeEvent, FormEvent, InputHTMLAttributes, memo, useCallback, useEffect, useRef, useState } from "react"
import { $profileForm } from "../model"

export const ProfileForm = () => {
    const { fields, submit, eachValid } = useForm($profileForm)

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (eachValid) submit()
    }

    return (
        <form className="flex grow flex-col items-start space-y-4 rounded-lg bg-gray-100 px-10" onSubmit={onSubmit}>
            <UserCircleIcon className="h-40 w-40 " />
            <UserNameField />
            <UserEmailField />
            <UserPasswordField />
            <button type="submit">submit</button>
        </form>
    )
}

const UserNameField = () => {
    const { value, onChange, errorText, hasError } = useField($profileForm!.fields!.name!)
    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.value)
        },
        [value]
    )

    return <UserInput value={value} onChange={handleChange} className="text-4xl" errorText={errorText} name="name" />
}

const UserPasswordField = () => {
    const { value, onChange, errorText } = useField($profileForm!.fields!.password!)
    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.value)
        },
        [value]
    )

    return <UserInput value={value} onChange={handleChange} type="password" errorText={errorText} name="password" />
}

const UserEmailField = () => {
    const { value, onChange, errorText } = useField($profileForm!.fields!.email!)
    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.value)
        },
        [value]
    )

    return (
        <UserInput
            value={value}
            onChange={handleChange}
            className="text-base font-light italic"
            errorText={errorText}
            name="email"
        />
    )
}

interface UserInputProps extends InputHTMLAttributes<HTMLInputElement> {
    onSaveClicked?(): void
    errorText?: any
}
const UserInput = memo(
    ({ onSaveClicked, placeholder, value, onChange, errorText, ...props }: UserInputProps) => {
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
            <label className="group relative flex w-full flex-col items-center justify-between">
                <input
                    ref={ref}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    className={clsx(
                        props.className,
                        " focus:ring-none foucs:underline bg-transparent focus:border-b focus:border-b-black focus:outline-none"
                    )}
                    disabled={disabledField}
                />
                <span className="self-start text-sm italic text-rose-600">{errorText(props.name)}</span>
                <button
                    onClick={toggledDisabledField}
                    type="button"
                    className={clsx(
                        "absolute right-0 hidden rounded bg-gray-200 p-2",
                        disabledField && "group-hover:block"
                    )}
                >
                    <PencilIcon className="h-4 w-4" />
                </button>

                <button
                    onClick={onSaveClicked}
                    type="button"
                    className={clsx("absolute right-0  rounded bg-gray-200 p-2", !disabledField ? "block" : "hidden")}
                >
                    <SaveIcon className="h-4 w-4" />
                </button>
            </label>
        )
    },
    (prev, next) => {
        if (prev.value !== next.value) return false
        return true
    }
)
