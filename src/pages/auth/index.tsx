import clsx from "clsx"
import { useMemo, useRef } from "react"
import {
    Location,
    Navigate,
    NavLink,
    useLocation,
    useNavigate,
    useSearchParams,
} from "react-router-dom"

import { AuthForm, authModel, RegistrationForm } from "entities/auth"

import { UserIcon } from "@heroicons/react/solid"

export const AuthPage = () => {
    const isAuth = authModel.selectors.useIsAuth()

    const location: Location = useLocation()
    const navigate = useNavigate()
    //@ts-ignore
    const fromPage = location.state?.from?.pathname || "/"
    const [searchParams, setSearchParams] = useSearchParams()

    const currentWindow = useMemo(() => {
        return searchParams.get("login") === "true" ?? true
    }, [location.search])

    if (isAuth) return <Navigate to={fromPage} replace />

    const ref = useRef<HTMLDivElement>(null)

    return (
        <div
            ref={ref}
            className="relative flex grow flex-col items-center justify-center font-sans  "
        >
            <BGSliceGradient />

            <div className="group relative flex w-full max-w-md flex-col items-center  rounded-lg bg-white/70 px-10 shadow-lg hover:bg-white">
                <UserIcon className="absolute h-32 w-32 -translate-y-1/2 rounded-full border-[8px] border-teal-500 bg-cyan-600 p-6 text-white ring-[8px] ring-white duration-300 group-hover:-translate-x-[calc(100%-1rem)] " />
                <h2 className="mt-20 mb-4 text-2xl font-semibold uppercase text-gray-600">
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

const BGSliceGradient = () => {
    return (
        <div className="absolute inset-0 flex overflow-hidden bg-cyan-800  [&>*]:border-l [&>*]:border-slate-400/30 ">
            {[...Array(5).keys()]
                .map((i) => i + 1)
                .map((item) => (
                    <span
                        key={item}
                        className={clsx(
                            "flex-1 skew-x-[35deg]  from-green-800 via-green-800/50 to-cyan-800 hover:bg-gradient-to-r ",
                            item === 5 && "border-r"
                        )}
                    ></span>
                ))}
        </div>
    )
}
