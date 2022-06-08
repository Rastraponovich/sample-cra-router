import { AxiosResponse } from "axios"
import { createEffect } from "effector"
import { BookingAPI } from "shared/lib/api"
import type { TAccessToken, TCredentialUser, TRegistrationCredential } from "./models"

export const loginFx = createEffect<TCredentialUser, AxiosResponse<TAccessToken>, Error>(BookingAPI.login)

export const checkAuthFx = createEffect(BookingAPI.getMe)

export const registrationFx = createEffect<TRegistrationCredential, AxiosResponse<string>, Error>(
    BookingAPI.registration
)

export const logoutFx = createEffect(BookingAPI.logout)

export const modifyUserFx = createEffect(BookingAPI.modifyUser)
