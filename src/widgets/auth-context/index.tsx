import { useEvent } from "effector-react"
import { authModel } from "entities/auth"
import jwtDecode from "jwt-decode"
import { createContext, useContext, useEffect, useLayoutEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { daysJS } from "shared/lib"

const AuthContext = createContext({})

interface AuthProviderProps {}
const AuthProvider = (props: AuthProviderProps) => {
    const logout = useEvent(authModel.events.logout)
    const checkAuth = useEvent(authModel.events.checkAuth)
    const isAuth = authModel.selectors.useIsAuth()

    const location = useLocation()

    const navigate = useNavigate()

    useEffect(() => {
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
        const token = localStorage.getItem("token")
        if (!token) navigate("/auth?login=true", { state: { from: location } })
    }, [isAuth])

    return (
        <AuthContext.Provider
            value={{ logout, isAuth, checkAuth }}
            {...props}
        />
    )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
