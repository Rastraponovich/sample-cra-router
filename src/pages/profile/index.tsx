import { PencilIcon, SaveIcon, UserCircleIcon } from "@heroicons/react/outline"
import clsx from "clsx"
import { useEvent } from "effector-react"
import { authModel } from "entities/auth"
import { InputHTMLAttributes, memo, useCallback, useEffect, useRef, useState } from "react"

export const ProfilePage = () => {
    const user = authModel.selectors.useUser()

    const handleSaveUser = useEvent(authModel.events.modifyUser)
    const handleChangeUser = useEvent(authModel.events.changeUserValues)

    const handleSaveClicked = useCallback(() => handleSaveUser(), [])

    const handleChange = useCallback(handleChangeUser, [])

    return (
        <section className="flex grow flex-col items-center px-10 py-5">
            <form
                className="flex grow flex-col items-start space-y-4 rounded-lg bg-gray-100 px-10"
                onSubmit={(e) => e.preventDefault()}
            >
                <UserCircleIcon className="h-40 w-40 " />
                <UserInput
                    type="text"
                    value={user!.name}
                    name="name"
                    className="text-4xl"
                    onChange={handleChange}
                    onSaveClicked={handleSaveClicked}
                />
                <UserInput
                    type="text"
                    value={user!.role.name}
                    name="role[name]"
                    className="text-xl font-normal"
                    onChange={handleChange}
                    onSaveClicked={handleSaveClicked}
                />
                <UserInput
                    type="text"
                    value={user!.email}
                    name="email"
                    className="text-base font-light italic"
                    onChange={handleChange}
                    onSaveClicked={handleSaveClicked}
                />
                <UserInput
                    type="password"
                    value={user!.password}
                    name="password"
                    onChange={handleChange}
                    onSaveClicked={handleSaveClicked}
                />
            </form>
        </section>
    )
}

interface UserInputProps extends InputHTMLAttributes<HTMLInputElement> {
    onSaveClicked(): void
}
const UserInput = memo(
    ({ onSaveClicked, ...props }: UserInputProps) => {
        const [disabledField, setDisabledField] = useState(true)
        const ref = useRef<HTMLInputElement | null>(null)

        console.log("render, ", props?.name)

        const toggledDisabledField = () => {
            setDisabledField((prev) => !prev)

            ref.current?.focus()
        }

        useEffect(() => {
            ref.current?.focus()
        }, [disabledField])

        return (
            <label className="group relative flex w-full items-center justify-between">
                <input
                    ref={ref}
                    {...props}
                    className={clsx(
                        props.className,
                        " focus:ring-none foucs:underline bg-transparent focus:border-b focus:border-b-black focus:outline-none"
                    )}
                    disabled={disabledField}
                />
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
