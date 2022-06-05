import { AxiosResponse } from "axios"
import { createEffect } from "effector"
import { BookingAPI } from "shared/lib/api"
import { TAccessToken, TCredentialUser, TUser } from "./models"

export const loginFx = createEffect<
    TCredentialUser,
    AxiosResponse<TAccessToken>,
    Error
>(BookingAPI.login)

export const checkAuthFx = createEffect(BookingAPI.getMe)
