import { useEvent } from "effector-react"
import { InputHTMLAttributes, ReactNode, memo } from "react"
import { authModel } from ".."
import { events, selectors } from "../model"

export const AuthForm = () => {
    const handleSubmit = useEvent(events.login)
    const handleChange = useEvent(events.setCredential)
    const credential = selectors.useCredential()

    return (
        <div className="flex w-full max-w-xl flex-col space-y-4 rounded-lg bg-gray-100 shadow-sm">
            <h3 className=" rounded-t-lg bg-white p-2 text-center first-letter:uppercase">авторизация</h3>

            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-4 ">
                <InputFiled
                    label="login"
                    placeholder="email"
                    name="email"
                    value={credential.email}
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
            <AuthError />
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

const AuthError = () => {
    const authError = selectors.useAuthError()

    return <div>{authError}</div>
}

export const RegistrationForm = () => {
    const credential = authModel.selectors.useRegistrationCredential()

    const handleChange = useEvent(authModel.events.setRegistrationCredential)
    const handleSubmit = useEvent(authModel.events.registration)

    return (
        <div className="flex w-full max-w-xl flex-col space-y-4 rounded-lg bg-gray-100 shadow-sm">
            <h3 className=" rounded-t-lg bg-white p-2 text-center first-letter:uppercase">регистрация</h3>

            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-4 ">
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
