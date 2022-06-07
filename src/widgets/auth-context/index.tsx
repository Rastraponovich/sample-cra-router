import { useEvent } from "effector-react"
import { authModel } from "entities/auth"
import jwtDecode from "jwt-decode"
import { createContext, useContext, useEffect, useLayoutEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { daysJS } from "shared/lib/api"

const AuthContext = createContext({})

interface AuthProviderProps {}
const AuthProvider = (props: AuthProviderProps) => {
    const login = useEvent(authModel.events.login)
    const logout = useEvent(authModel.events.logout)
    const registration = useEvent(authModel.events.registration)
    const checkAuth = useEvent(authModel.events.checkAuth)
    const isAuth = authModel.selectors.useIsAuth()

    const location = useLocation()

    const navigate = useNavigate()

    useLayoutEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            const decodedToken: { exp: number } = jwtDecode(token!)

            if (decodedToken.exp <= daysJS().unix()) checkAuth()
        }
    }, [location])

    useEffect(() => {
        checkAuth()
    }, [])

    useEffect(() => {
        if (!isAuth) navigate("/auth", { state: { from: location } })
    }, [isAuth])

    return <AuthContext.Provider value={{ login, logout, registration, isAuth, checkAuth }} {...props} />
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
