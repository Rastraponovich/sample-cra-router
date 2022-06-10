import { AxiosResponse } from "axios"
import { createEffect, createStore, restore, sample } from "effector"
import { createForm } from "effector-forms"
import { useStore } from "effector-react"
import { BookingAPI, rules } from "shared/lib/api"
import { TUser } from "../lib"

export const getMeFx = createEffect<void, AxiosResponse<TUser>, Error>(BookingAPI.getMe)
export const modifyUserFx = createEffect<TUser, AxiosResponse<any>, Error>(BookingAPI.modifyUser)

export const $user = createStore<TUser | null>(null)
const $serverError = restore(modifyUserFx.failData, null)

export const $profileForm = createForm<Partial<TUser>>({
    filter: $serverError.map((error) => error === null),
    validateOn: ["submit", "blur"],
    fields: {
        id: { init: 0 },
        email: {
            init: "",
            rules: [rules.email()],
            validateOn: ["blur", "change"],
        },
        name: {
            init: "",
            rules: [rules.minLength(1)],
            validateOn: ["blur", "change"],
        },
        password: {
            init: "",
            rules: [rules.minLength(1)],
            validateOn: ["blur", "change"],
        },
        isActive: {
            init: true as boolean,
        },
    },
})

sample({
    clock: $profileForm.formValidated,
    fn: (user) => {
        console.log(user)
        return user as TUser
    },
    target: modifyUserFx,
})

sample({
    clock: modifyUserFx.doneData,
    target: getMeFx,
})

sample({
    clock: getMeFx.doneData,
    fn: (res) => res.data,
    target: [$profileForm.setForm, $user],
})

const useUser = () => useStore($user)
export const selectors = { useUser }
