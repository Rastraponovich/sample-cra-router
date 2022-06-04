import { AxiosResponse } from "axios"
import { createEffect } from "effector"
import { BookingAPI } from "shared/lib/api"
import { TCredentialUser, TUser } from "./models"

export const loginFx = createEffect<TCredentialUser, AxiosResponse<string>, Error>(BookingAPI.login)
