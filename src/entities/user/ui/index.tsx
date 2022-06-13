import { UserCircleIcon } from "@heroicons/react/outline"
import { useForm } from "effector-forms"
import { FormEvent } from "react"
import { FormInput } from "shared/ui/user-input"
import { userModel } from ".."

export const ProfileForm = () => {
    const { submit, eachValid } = useForm(userModel.$profileForm)

    const pending = userModel.selectors.usePending()

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
                <FormInput
                    field={userModel.$profileForm.fields.name}
                    placeholder="имя пользователя"
                    name="имя"
                    pending={pending}
                />
                <FormInput
                    field={userModel.$profileForm.fields.email}
                    pending={pending}
                    placeholder="почта"
                    name="почта"
                />
                <FormInput
                    field={userModel.$profileForm.fields.password}
                    pending={pending}
                    type="password"
                    placeholder="пароль"
                    name="пароль"
                />
            </div>

            <button
                type="submit"
                disabled={pending || !eachValid}
                className="rounded bg-green-600 px-4 py-2 text-base uppercase text-white"
            >
                сохранить
            </button>
        </form>
    )
}
