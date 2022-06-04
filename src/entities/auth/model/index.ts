import { createEvent, createStore, sample } from "effector"
import { useStore } from "effector-react"
import { authLib } from ".."
import { TCredentialUser, TUser } from "../lib"
import { loginFx } from "../lib/api"

const $user = createStore<null | TUser>(null)
const $accessToken = createStore<string>("")

const $credential = createStore<TCredentialUser>({ email: "test2@test.ru", password: "1" } as TCredentialUser)

const login = createEvent()

sample({
    clock: login,
    source: $credential,
    fn: (cred, _) => cred,
    target: loginFx,
})

sample({ clock: loginFx.doneData, fn: (res) => res.data, target: $accessToken })

export const events = { login }

const useUser = () => useStore($user)

export const selectors = { useUser }
