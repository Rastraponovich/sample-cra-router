import { createDomain, sample } from "effector"
import { appModel } from "entities/app"
import { poupupModel } from "features/poupup"
import { delay, pending, reset } from "patronum"
import { ChangeEvent, FormEvent } from "react"
import { API, TCredentialUser, TRegistrationCredential } from "../lib"
import { checkAuthFx, loginFx, logoutFx, registrationFx } from "../lib/api"
import { userModel } from "entities/user"

export const AuthDomain = createDomain("authDomain")
//for test
export const setCredentialFx = AuthDomain.createEffect<TCredentialUser, TCredentialUser, Error>()

export const $accessToken = AuthDomain.createStore<string | null>(null)

const setCredential = AuthDomain.createEvent<ChangeEvent<HTMLInputElement>>()
export const $credential = AuthDomain.createStore<TCredentialUser>({
    email: "",
    password: "",
} as TCredentialUser)
    .on(setCredential, (state, event) => ({
        ...state,
        [event.target.name]: event.target.value,
    }))
    .on(setCredentialFx.doneData, (state, payload) => ({ ...state, ...payload }))

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

export const $authError = AuthDomain.createStore<string | null>(null)
sample({
    clock: loginFx.failData,
    fn: (res) => res.message,
    target: $authError,
})

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
    target: [userModel.$profileForm.setForm, userModel.$user],
})

export const $isAuth = AuthDomain.createStore<boolean | null>(null)
    .on(checkAuthFx.doneData, () => true)
    .on(checkAuthFx.fail, () => false)

export const $pending = AuthDomain.createStore<boolean>(false).on(checkAuthFx.pending, (_, state) => state)

sample({
    clock: $isAuth,
    filter: (auth) => auth !== null,

    target: appModel.events.startedApp,
})

const setRegistrationCredential = AuthDomain.createEvent<ChangeEvent<HTMLInputElement>>()
export const $registrationCredential = AuthDomain.createStore<TRegistrationCredential>({
    roleId: 1,
} as TRegistrationCredential).on(setRegistrationCredential, (state, event) => ({
    ...state,
    [event.target.name]: event.target.value,
}))

const registration = AuthDomain.createEvent<FormEvent<HTMLFormElement>>()
export const $registrationComplited = AuthDomain.createStore<boolean>(false).reset([
    setRegistrationCredential,
    setCredential,
])
sample({
    clock: registration,
    source: $registrationCredential,
    target: registrationFx,
})

sample({
    clock: registrationFx.doneData,
    target: $registrationComplited,
    fn: () => true,
})

registration.watch((e) => e.preventDefault())

const logout = AuthDomain.createEvent()

sample({
    clock: logout,
    target: logoutFx,
})

reset({
    clock: [logoutFx.finally],
    target: [$isAuth, $accessToken],
})
reset({
    clock: [$isAuth, loginFx.finally, logoutFx.finally],
    target: [$credential, $registrationCredential, $registrationComplited],
})

reset({ clock: [login, setCredential], target: $authError })

reset({ clock: loginFx.fail, target: $accessToken })

delay({
    source: sample({
        clock: checkAuth,
        fn: () => "start checking authorization",
    }),
    timeout: 1000,
    target: appModel.events.setEventMessage,
})

delay({
    source: sample({
        clock: checkAuthFx.done,
        fn: () => "authorization complite",
    }),
    timeout: 1000,
    target: appModel.events.setEventMessage,
})

delay({
    source: sample({
        clock: checkAuthFx.fail,
        fn: () => "authorization failed",
    }),
    timeout: 1000,
    target: appModel.events.setEventMessage,
})

sample({
    clock: API.modifyUserFx.doneData,
    fn: (res) => JSON.stringify(res.data),
    target: poupupModel.events.setMessage,
})

export const $processing = pending({ effects: [loginFx, registrationFx, logoutFx], of: "some" })

export const events = {
    login,
    logout,
    checkAuth,
    registration,
    setCredential,
    setRegistrationCredential,
}
