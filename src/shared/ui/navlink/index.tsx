import clsx from "clsx"
import { memo } from "react"
import { Link } from "react-router-dom"

interface NavLinkProps {
    href: string
    title: string
    vertical?: boolean
    selected?: boolean
}

export const NavLink = memo(
    ({ href, title, vertical, selected }: NavLinkProps) => {
        return (
            <li className={clsx(vertical && "flex w-full")}>
                <Link
                    to={href}
                    className={clsx(
                        "rounded p-2 duration-150 hover:bg-gray-200 hover:text-gray-900 active:bg-white active:text-gray-900",
                        vertical && "w-full text-center",
                        selected && "underline underline-offset-1"
                    )}
                >
                    {title}
                </Link>
            </li>
        )
    }
)

NavLink.displayName = "NavLink"
