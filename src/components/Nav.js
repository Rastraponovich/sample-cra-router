import { Link } from "react-router-dom"

export const Nav = () => {
    return (
        <nav className="flex items-center space-x-2">
            <ul className="flex space-x-2 items-center">
                <NavLink href="/" title="Home" />
                <NavLink href="/about" title="About" />
                <NavLink href="/profile" title="Profile" />
            </ul>
            <h3 className="text-xl font-bold">AdminRoutes</h3>
            <ul className="flex space-x-2 items-center">
                <NavLink href="/admin/dashboard" title="Dashboard" />
                <NavLink href="/admin/lk" title="LK" />
            </ul>
        </nav>
    )
}

const NavLink = ({ href, title }) => {
    return (
        <li style={{ margin: "0 1rem" }}>
            <Link to={href}>{title}</Link>
        </li>
    )
}
