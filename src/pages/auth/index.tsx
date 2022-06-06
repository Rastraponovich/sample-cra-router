import { AuthForm, authModel, RegistrationForm } from "entities/auth"
import { useEffect, useLayoutEffect, useState } from "react"
import { Location, useLocation, useNavigate } from "react-router-dom"

export const AuthPage = () => {
    const isAuth = authModel.selectors.useIsAuth()
    const navigate = useNavigate()
    const registrationComlited = authModel.selectors.useRegistrationComlited()

    const location: Location = useLocation()
    //@ts-ignore
    const fromPage = location.state?.from?.pathname || "/"

    const [wind, setWind] = useState("auth")

    const handleSetWindow = () => {
        if (wind === "auth") return setWind("reg")

        return setWind("auth")
    }

    useLayoutEffect(() => {
        if (isAuth) navigate(fromPage, { replace: true })
    }, [isAuth])

    return (
        <div className="flex grow flex-col space-y-2 px-4 py-2 font-sans md:space-y-4 md:px-10 md:py-5">
            {fromPage}
            <button onClick={handleSetWindow}>toggle</button>
            <div className="flex flex-col items-center space-y-4 rounded-lg bg-gray-200 p-4">
                {registrationComlited ? (
                    <div>ой красава!</div>
                ) : wind === "auth" ? (
                    <AuthForm />
                ) : (
                    <RegistrationForm />
                )}
            </div>
        </div>
    )
}
