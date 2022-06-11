import { useField, useForm } from "effector-forms"
import { useEvent } from "effector-react"
import {
    InputHTMLAttributes,
    ReactNode,
    memo,
    ChangeEvent,
    useCallback,
    FormEvent,
} from "react"
import { UserInput } from "shared/ui/user-input"
import { authModel } from ".."
import { selectors } from "../model"
import { useServerError } from "../model/selectors"

export const AuthForm = () => {
    const { fields, submit, eachValid } = useForm(authModel.$loginForm)

    const error = useServerError()

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (eachValid) submit()
    }

    return (
        <div className="flex w-full max-w-xl flex-col space-y-4 rounded-lg bg-gray-100 shadow-sm">
            <h3 className=" rounded-t-lg bg-white p-2 text-center first-letter:uppercase">
                авторизация
            </h3>

            <form onSubmit={onSubmit} className="flex flex-col space-y-8 p-4 ">
                <UserEmailField />
                <UserPasswordField />

                <button
                    type="submit"
                    className="flex justify-center self-center rounded-lg bg-green-600 px-4 py-2 uppercase text-white duration-150 hover:bg-green-500"
                >
                    войти
                </button>
            </form>
            <span className="p-4 text-base italic text-rose-600">
                {error?.response?.data.message}
            </span>
        </div>
    )
}

interface InputFiledProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string | ReactNode
}

const InputFiled = memo(({ label, ...props }: InputFiledProps) => {
    return (
        <label className="flex flex-col space-y-2 text-gray-900">
            <span>{label}</span>
            <input {...props} className="rounded-lg border-2 p-2" />
        </label>
    )
})

export const RegistrationForm = () => {
    const credential = authModel.selectors.useRegistrationCredential()

    const handleChange = useEvent(authModel.events.setRegistrationCredential)
    const handleSubmit = useEvent(authModel.events.registration)

    return (
        <div className="flex w-full max-w-xl flex-col space-y-4 rounded-lg bg-gray-100 shadow-sm">
            <h3 className=" rounded-t-lg bg-white p-2 text-center first-letter:uppercase">
                регистрация
            </h3>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col space-y-4 p-4 "
            >
                <InputFiled
                    label="email"
                    placeholder="email"
                    name="email"
                    value={credential.email}
                    onChange={handleChange}
                />
                <InputFiled
                    label="name"
                    placeholder="name"
                    name="name"
                    value={credential.name}
                    onChange={handleChange}
                />
                <InputFiled
                    label="password"
                    placeholder="password"
                    type="password"
                    name="password"
                    value={credential.password}
                    onChange={handleChange}
                />

                <button
                    type="submit"
                    className="flex justify-center rounded-lg bg-green-600 px-4 py-2 text-white duration-150 hover:bg-green-500"
                >
                    войти
                </button>
            </form>
        </div>
    )
}

const UserPasswordField = () => {
    const { value, onChange, errorText } = useField(
        authModel.$loginForm.fields!.password!
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
        authModel.$loginForm.fields!.email!
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
