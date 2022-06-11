import { useField, useForm } from "effector-forms"
import { useEvent } from "effector-react"
import { InputHTMLAttributes, ReactNode, memo, ChangeEvent, useCallback, FormEvent } from "react"
import { UserInput } from "shared/ui/user-input"
import { authModel } from ".."

export const AuthForm = () => {
    const { fields, submit, eachValid } = useForm(authModel.$loginForm)

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (eachValid) submit()
    }

    return (
        <form onSubmit={onSubmit} className="flex w-full flex-col space-y-8">
            <UserEmailField />
            <UserPasswordField />
            <div className="!my-4 flex justify-between text-sm text-gray-400">
                <button className="hover:text-gray-900" type="button">
                    запомнить
                </button>
                <button className="hover:text-gray-900" type="button">
                    забыли пароль?
                </button>
            </div>

            <button
                type="submit"
                className="flex justify-center  rounded-lg bg-cyan-600 px-8 py-4 text-sm uppercase text-white duration-150 hover:bg-green-500"
            >
                вход
            </button>
        </form>
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
        <form onSubmit={handleSubmit} className="flex w-full flex-col space-y-4 ">
            <UserInput
                value={credential.email}
                onChange={handleChange}
                errorText={() => ""}
                placeholder="почта"
                name="почта"
            />
            <UserInput
                value={credential.name}
                onChange={handleChange}
                errorText={() => ""}
                placeholder="имя"
                name="имя"
            />
            <UserInput
                value={credential.password}
                onChange={handleChange}
                errorText={() => ""}
                placeholder="пароль"
                name="пароль"
            />
            <UserInput
                value={credential.password}
                onChange={handleChange}
                errorText={() => ""}
                placeholder="повтор пароля"
                name="повтор пароля"
            />

            <button
                type="submit"
                className="flex justify-center  rounded-lg bg-cyan-600 px-8 py-4 text-sm uppercase text-white duration-150 hover:bg-green-500"
            >
                регистрация
            </button>
        </form>
    )
}

const UserPasswordField = () => {
    const { value, onChange, errorText } = useField(authModel.$loginForm.fields!.password!)
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
    const { value, onChange, errorText } = useField(authModel.$loginForm.fields!.email!)
    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.value)
        },
        [value]
    )

    return <UserInput value={value} onChange={handleChange} errorText={errorText} placeholder="почта" name="почта" />
}
