import clsx from "clsx"
import { memo } from "react"
import { useLocation } from "react-router-dom"
import type { TRoute } from "../../shared/lib"
import { NavLink } from "../../shared/ui"

interface NavProps {
    routes: TRoute[]
    vertiacal?: boolean
}

export const Nav = memo(({ routes, vertiacal }: NavProps) => {
    const location = useLocation()
    return (
        <nav
            className={clsx(
                vertiacal ? "flex-col items-center space-y-4" : "flex-row items-center space-x-4 divide-x-2",
                "    divide-gray-200",
                "flex"
            )}
        >
            <ul
                className={clsx(
                    vertiacal ? "w-full flex-col items-center space-y-4 px-2" : "flex-row items-center space-x-4",
                    "flex "
                )}
            >
                {routes.map((route) => (
                    <NavLink
                        href={route.path}
                        title={route.title}
                        key={route.id}
                        vertical
                        selected={location.pathname === route.path}
                    />
                ))}
            </ul>
        </nav>
    )
})
Nav.displayName = "Nav"
