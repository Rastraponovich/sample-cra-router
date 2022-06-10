import { useStore } from "effector-react"
import {
    $accessToken,
    $authError,
    $credential,
    $isAuth,
    $pending,
    $processing,
    $registrationComplited,
    $registrationCredential,
} from "./auth"

export const useIsAuth = () => useStore($isAuth)
export const usePending = () => useStore($pending)
export const useAuthError = () => useStore($authError)
export const useProcessing = () => useStore($processing)
export const useCredential = () => useStore($credential)
export const useAccessToken = () => useStore($accessToken)
export const useRegistrationComlited = () => useStore($registrationComplited)
export const useRegistrationCredential = () => useStore($registrationCredential)
