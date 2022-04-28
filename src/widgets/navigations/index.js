import { memo } from "react"
import { NavLink } from "../../shared/ui"

export const Nav = memo(({ routes, privateRoutes }) => {
    return (
        <nav className="flex items-center space-x-4 divide-x-2 divide-gray-200">
            <ul className="flex space-x-4 items-center">
                {routes.map((route) => (
                    <NavLink
                        href={route.path}
                        title={route.title}
                        key={route.id}
                    />
                ))}
            </ul>
            <ul className="flex space-x-4 items-center">
                {privateRoutes.map((route) => (
                    <NavLink
                        href={route.path}
                        title={route.title}
                        key={route.id}
                    />
                ))}
            </ul>
        </nav>
    )
})
Nav.displayName = "Nav"
