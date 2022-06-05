import { createDomain, sample } from "effector"
import { useStore } from "effector-react"
import { debug } from "patronum"
import { ChangeEvent, FormEvent } from "react"
import { TCredentialUser, TUser } from "../lib"
import { checkAuthFx, loginFx } from "../lib/api"

const _bulkCredential_: TCredentialUser = {
    email: "test2@test.ru",
    password: "1",
}

const AuthDomain = createDomain("authDomain")

const $user = AuthDomain.createStore<null | TUser>(null)
const $accessToken = AuthDomain.createStore<string | null>(null).reset(
    loginFx.fail
)

const setCredential = AuthDomain.createEvent<ChangeEvent<HTMLInputElement>>()
const $credential = AuthDomain.createStore<TCredentialUser>({
    email: "",
    password: "",
} as TCredentialUser)
    .on(setCredential, (state, event) => ({
        ...state,
        [event.target.name]: event.target.value,
    }))
    .reset(loginFx.doneData)

const login = AuthDomain.createEvent<FormEvent<HTMLFormElement>>()

login.watch((e) => e.preventDefault())

sample({
    clock: login,
    source: $credential,
    fn: (cred, _) => cred,
    target: loginFx,
})

sample({
    clock: loginFx.doneData,
    fn: (res) => {
        localStorage.setItem("token", res.data.accessToken)
        return res.data.accessToken
    },
    target: $accessToken,
})

const $authError = AuthDomain.createStore<string | null>(null)
sample({
    clock: loginFx.failData,
    fn: (res) => res.message,
    target: $authError,
}).reset([login, setCredential])

const checkAuth = AuthDomain.createEvent()

sample({
    clock: checkAuth,
    target: checkAuthFx,
})
sample({
    clock: $accessToken,
    filter: (token) => token !== null && token.length > 0,

    target: checkAuth,
})

sample({
    clock: checkAuthFx.doneData,
    fn: (res) => res.data,
    target: $user,
})

debug($user)

export const events = { login, setCredential, checkAuth }

const useUser = () => useStore($user)
const useCredential = () => useStore($credential)
const useAccessToken = () => useStore($accessToken)
const useAuthError = () => useStore($authError)

export const selectors = {
    useUser,
    useCredential,
    useAccessToken,
    useAuthError,
}
