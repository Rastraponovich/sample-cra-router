import { AxiosResponse } from "axios"
import { createEffect } from "effector"
import { BookingAPI } from "shared/lib/api"
import {
    TAccessToken,
    TCredentialUser,
    TRegistrationCredential,
    TUser,
} from "./models"

export const loginFx = createEffect<
    TCredentialUser,
    AxiosResponse<TAccessToken>,
    Error
>(BookingAPI.login)

export const checkAuthFx = createEffect(BookingAPI.getMe)

export const registrationFx = createEffect<
    TRegistrationCredential,
    AxiosResponse<string>,
    Error
>(BookingAPI.registration)

export const logoutFx = createEffect(BookingAPI.logout)
