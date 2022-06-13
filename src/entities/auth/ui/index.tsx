import { Transition } from "@headlessui/react"
import { useForm } from "effector-forms"
import { FormEvent, Fragment } from "react"
import { FormInput } from "shared/ui/user-input"
import { authModel } from ".."
import { $registationForm, selectors } from "../model"

export const AuthForm = () => {
    const { submit, eachValid } = useForm(authModel.$loginForm)
    const pending = selectors.useProcessing()

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (eachValid) submit()
    }

    return (
        <Transition
            appear
            show={true}
            enter="transition ease-in-out duration-700  transition-opacity"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in-out duration-700  transition-opacity"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            as={Fragment}
        >
            <form
                onSubmit={onSubmit}
                className="flex w-full flex-col space-y-8"
            >
                <FormInput
                    field={authModel.$loginForm.fields.email}
                    placeholder="почта"
                    pending={pending}
                    name="почта"
                />
                <FormInput
                    field={authModel.$loginForm.fields.password}
                    placeholder="пароль"
                    pending={pending}
                    name="пароль"
                    type="password"
                />
                <div className="!my-2 flex justify-between text-sm text-gray-400">
                    <button className="hover:text-gray-900" type="button">
                        запомнить
                    </button>
                    <button className="hover:text-gray-900" type="button">
                        забыли пароль?
                    </button>
                </div>

                <button
                    type="submit"
                    disabled={!eachValid}
                    className="flex justify-center  rounded-lg bg-cyan-600 px-8 py-4 text-sm uppercase text-white duration-150 hover:bg-green-500"
                >
                    вход
                </button>
            </form>
        </Transition>
    )
}

export const RegistrationForm = () => {
    const { eachValid, submit } = useForm($registationForm)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        submit()
    }

    const pending = selectors.useProcessing()

    return (
        <Transition
            appear
            show={true}
            enter="transition ease-in-out duration-700  transition-opacity"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in-out duration-700  transition-opacity"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            as={Fragment}
        >
            <form
                onSubmit={handleSubmit}
                className="flex w-full flex-col space-y-4 "
            >
                <FormInput
                    field={$registationForm.fields.email}
                    placeholder="почта"
                    pending={pending}
                    name="почта"
                />
                <FormInput
                    field={$registationForm.fields.name}
                    placeholder="имя"
                    pending={pending}
                    name="имя"
                />
                <FormInput
                    field={$registationForm.fields.password}
                    placeholder="пароль"
                    pending={pending}
                    type="password"
                    name="пароль"
                />
                <FormInput
                    field={$registationForm.fields.confirm}
                    placeholder="подтверждение"
                    name="подтверждение"
                    pending={pending}
                    type="password"
                />

                <button
                    type="submit"
                    disabled={pending || !eachValid}
                    className="flex justify-center  rounded-lg bg-cyan-600 px-8 py-4 text-sm uppercase text-white duration-150 hover:bg-green-500"
                >
                    регистрация
                </button>
            </form>
        </Transition>
    )
}
