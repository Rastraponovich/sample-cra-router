import { useForm } from "effector-forms/dist-types"
import { useEvent } from "effector-react"
import { authModel } from "entities/auth"
import { userModel } from "entities/user"
import { ReactNode } from "react"
import { Link, NavLink } from "react-router-dom"
import { BurgerButton } from "../../features/drawer"

interface HeaderProps {
    children: ReactNode
    title: string | ReactNode
}

export const Header = ({ children, title }: HeaderProps) => {
    const handleLogOut = useEvent(authModel.events.logout)

    const user = userModel.selectors.useUser()
    const isAuth = authModel.selectors.useIsAuth()

    return (
        <header className="flex items-center justify-between bg-blue-700 px-4 py-2 text-white  sm:space-x-12 md:px-8">
            <NavLink to="/">
                <h2 className="  text-2xl font-bold  first-letter:uppercase ">{title}</h2>
            </NavLink>
            {children}
            <div className="sm:grow"></div>
            <div className="flex items-center space-x-2">
                <a href="tg://resolve?domain=WildeDJ" className="fill-ocean rounded-full bg-white p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                        <path
                            d="M22.05 1.577c-.393-.016-.784.08-1.117.235-.484.186-4.92 1.902-9.41 3.64-2.26.873-4.518 1.746-6.256 2.415-1.737.67-3.045 1.168-3.114 1.192-.46.16-1.082.362-1.61.984-.133.155-.267.354-.335.628s-.038.622.095.895c.265.547.714.773 1.244.976 1.76.564 3.58 1.102 5.087 1.608.556 1.96 1.09 3.927 1.618 5.89.174.394.553.54.944.544l-.002.02s.307.03.606-.042c.3-.07.677-.244 1.02-.565.377-.354 1.4-1.36 1.98-1.928l4.37 3.226.035.02s.484.34 1.192.388c.354.024.82-.044 1.22-.337.403-.294.67-.767.795-1.307.374-1.63 2.853-13.427 3.276-15.38l-.012.046c.296-1.1.187-2.108-.496-2.705-.342-.297-.736-.427-1.13-.444zm-.118 1.874c.027.025.025.025.002.027-.007-.002.08.118-.09.755l-.007.024-.005.022c-.432 1.997-2.936 13.9-3.27 15.356-.046.196-.065.182-.054.17-.1-.015-.285-.094-.3-.1l-7.48-5.525c2.562-2.467 5.182-4.7 7.827-7.08.468-.235.39-.96-.17-.972-.594.14-1.095.567-1.64.84-3.132 1.858-6.332 3.492-9.43 5.406-1.59-.553-3.177-1.012-4.643-1.467 1.272-.51 2.283-.886 3.278-1.27 1.738-.67 3.996-1.54 6.256-2.415 4.522-1.748 9.07-3.51 9.465-3.662l.032-.013.03-.013c.11-.05.173-.055.202-.057 0 0-.01-.033-.002-.026zM10.02 16.016l1.234.912c-.532.52-1.035 1.01-1.398 1.36z"
                            color="#fff"
                        />
                    </svg>
                </a>
                <a
                    href="https://github.com/Rastraponovich"
                    rel="noreferrer"
                    target="_blank"
                    className="fill-ocean rounded-full bg-white p-2"
                >
                    <svg viewBox="0 0 24 24" width="16" height="16">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
                        ></path>
                    </svg>
                </a>
            </div>
            {user && (
                <Link to="/profile" className="underline underline-offset-2">
                    {user.email}
                </Link>
            )}
            {isAuth && user && (
                <button
                    onClick={handleLogOut}
                    className="flex items-center justify-center rounded-lg bg-gray-200 px-4 py-2 uppercase text-gray-900 duration-150 hover:bg-blue-600 hover:text-white"
                >
                    выход
                </button>
            )}
            {!isAuth && (
                <Link
                    to="/auth"
                    className="flex items-center justify-center rounded-lg bg-gray-200 px-4 py-2 uppercase text-gray-900 duration-150 hover:bg-blue-600 hover:text-white"
                >
                    вход/регистрация
                </Link>
            )}

            <BurgerButton />
        </header>
    )
}
