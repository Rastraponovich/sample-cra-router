import { ReactNode } from "react"
import { BurgerButton } from "../../features/drawer"

interface HeaderProps {
    children: ReactNode
    title: string | ReactNode
}

export const Header = ({ children, title }: HeaderProps) => {
    return (
        <header className="flex items-center bg-blue-500 text-white space-x-12 px-4 py-2  shadow-md duration-150 hover:shadow-lg">
            <h2 className="font-bold text-2xl hover:drop-shadow-xl duration-150">
                {title}
            </h2>
            {children}
            <div className="grow"></div>
            <BurgerButton />
        </header>
    )
}
