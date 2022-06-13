import { useStore } from "effector-react"
import {
    $accessToken,
    $isAuth,
    $pending,
    $processing,
    $registrationComplited,
    $serverError,
} from "./auth"

export const useIsAuth = () => useStore($isAuth)
export const usePending = () => useStore($pending)
export const useProcessing = () => useStore($processing)
export const useAccessToken = () => useStore($accessToken)
export const useServerError = () => useStore($serverError)
export const useRegistrationComlited = () => useStore($registrationComplited)
