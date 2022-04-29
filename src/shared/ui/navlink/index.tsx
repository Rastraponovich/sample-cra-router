import clsx from "clsx"
import { memo } from "react"
import { Link } from "react-router-dom"

interface NavLinkProps {
    href: string
    title: string
    vertical?: boolean
}

export const NavLink = memo(({ href, title, vertical }: NavLinkProps) => {
    return (
        <li className={clsx(vertical && "w-full flex")}>
            <Link
                to={href}
                className={clsx(
                    "hover:text-gray-900 duration-150 hover:bg-gray-200 rounded p-2 active:bg-white active:text-gray-900",
                    vertical && "w-full text-center"
                )}
            >
                {title}
            </Link>
        </li>
    )
})

NavLink.displayName = "NavLink"
