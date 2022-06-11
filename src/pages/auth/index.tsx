import { UserIcon } from "@heroicons/react/solid"
import { AuthForm, authModel, RegistrationForm } from "entities/auth"
import { useMemo } from "react"
import { Location, Navigate, NavLink, useLocation, useSearchParams } from "react-router-dom"

export const AuthPage = () => {
    const isAuth = authModel.selectors.useIsAuth()

    const location: Location = useLocation()
    //@ts-ignore
    const fromPage = location.state?.from?.pathname || "/"
    const [searchParams, setSearchParams] = useSearchParams()

    const currentWindow = useMemo(() => {
        return searchParams.get("login") === "true" ?? true
    }, [searchParams, location.search])

    if (isAuth) return <Navigate to={fromPage} replace />

    return (
        <div className="flex grow flex-col items-center space-y-2 bg-gradient-to-tr from-green-600 to-cyan-500 px-4 py-2 font-sans md:space-y-4 md:px-10 md:pb-5 md:pt-20">
            <div className="relative flex w-full max-w-md flex-col items-center  rounded-lg bg-white px-10 shadow-lg">
                <UserIcon className="absolute h-32 w-32 -translate-y-1/2 rounded-full border-[8px] border-teal-500 bg-cyan-600 p-6 text-white ring-[8px] ring-white " />
                <h2 className="mt-16 mb-4 text-2xl font-semibold uppercase text-gray-600">
                    {!currentWindow ? "регистрация" : "вход"}
                </h2>
                {currentWindow ? <AuthForm /> : <RegistrationForm />}

                <NavLink
                    to={`/auth?login=${!currentWindow}`}
                    replace
                    className="my-6 flex w-full justify-center rounded-lg  bg-transparent px-8 py-4 text-sm uppercase text-gray-600 duration-150 hover:bg-cyan-600 hover:text-white"
                >
                    {currentWindow ? "регистрация" : "вход"}
                </NavLink>
            </div>
        </div>
    )
}
