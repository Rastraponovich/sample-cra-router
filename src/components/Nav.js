import { Link } from "react-router-dom"

export const Nav = () => {
    return (
        <nav>
            <ul
                style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    listStyle: "none",
                }}
            >
                <NavLink href="/" title="Home" />
                <NavLink href="/about" title="About" />
                <NavLink href="/profile" title="Profile" />
                <h3 style={{ margin: "0 1rem" }}>AdminRoutes</h3>

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
