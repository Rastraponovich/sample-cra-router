import { memo } from "react"
import { Link } from "react-router-dom"

export const NavLink = memo(({ href, title }) => {
    return (
        <li>
            <Link
                to={href}
                className="hover:text-gray-900 duration-150 hover:bg-gray-200 rounded p-2 
                active:bg-white active:text-gray-900
                
                "
            >
                {title}
            </Link>
        </li>
    )
})

NavLink.displayName = "NavLink"
