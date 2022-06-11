import { UserCircleIcon } from "@heroicons/react/outline"
import { useField, useForm } from "effector-forms"
import { ChangeEvent, FormEvent, useCallback } from "react"
import { UserInput } from "shared/ui/user-input"
import { $profileForm } from "../model"

export const ProfileForm = () => {
    const { fields, submit, eachValid } = useForm($profileForm)

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (eachValid) submit()
    }

    return (
        <form
            className="flex w-full max-w-md grow flex-col items-center  space-y-8 rounded-lg px-10 py-4 shadow-md"
            onSubmit={onSubmit}
        >
            <UserCircleIcon className="h-40 w-40 animate-pulse text-gray-200" />

            <div className="flex w-full grow flex-col space-y-8">
                <UserNameField />
                <UserEmailField />
                <UserPasswordField />
            </div>

            <button
                type="submit"
                className="rounded bg-green-600 px-4 py-2 text-base uppercase text-white"
            >
                сохранить
            </button>
        </form>
    )
}

const UserNameField = () => {
    const { value, onChange, errorText, hasError } = useField(
        $profileForm!.fields!.name!
    )
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
            errorText={errorText}
            placeholder="имя пользователя"
            name="имя"
        />
    )
}

const UserPasswordField = () => {
    const { value, onChange, errorText } = useField(
        $profileForm!.fields!.password!
    )
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
            type="password"
            errorText={errorText}
            placeholder="пароль"
            name="пароль"
        />
    )
}

const UserEmailField = () => {
    const { value, onChange, errorText } = useField(
        $profileForm!.fields!.email!
    )
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
            errorText={errorText}
            placeholder="почта"
            name="почта"
        />
    )
}
