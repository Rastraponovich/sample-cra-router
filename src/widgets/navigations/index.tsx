import clsx from "clsx"
import { memo } from "react"
import type { TRoute } from "../../shared/lib"
import { NavLink } from "../../shared/ui"

interface NavProps {
    routes: TRoute[]
    privateRoutes: TRoute[]
    vertiacal?: boolean
}

export const Nav = memo(({ routes, privateRoutes, vertiacal }: NavProps) => {
    return (
        <nav
            className={clsx(
                vertiacal
                    ? "flex-col items-center space-y-4"
                    : "flex-row space-x-4 items-center divide-x-2",
                "flex    divide-gray-200"
            )}
        >
            <ul
                className={clsx(
                    vertiacal
                        ? "flex-col space-y-4 items-center w-full px-2"
                        : "flex-row space-x-4 items-center",
                    "flex "
                )}
            >
                {routes.map((route) => (
                    <NavLink
                        href={route.path}
                        title={route.title}
                        key={route.id}
                        vertical
                    />
                ))}
            </ul>
            <ul
                className={clsx(
                    vertiacal
                        ? "flex-col space-y-4 items-center w-full px-2"
                        : "flex-row space-x-4 items-center",
                    "flex "
                )}
            >
                {privateRoutes.map((route) => (
                    <NavLink
                        href={route.path}
                        title={route.title}
                        key={route.id}
                        vertical
                    />
                ))}
            </ul>
        </nav>
    )
})
Nav.displayName = "Nav"
