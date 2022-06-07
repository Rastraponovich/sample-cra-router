import { Outlet } from "react-router-dom"
import { Drawer } from "../../features/drawer"
import { privateRoutes, routes } from "../../shared/lib"
import { Footer } from "../footer"
import { Header } from "../header"
import { Nav } from "../navigations"

export const AdminLayout = () => {
    return (
        <>
            <Header title="DarkStore">
                <div className="hidden lg:flex">
                    <Nav routes={routes} />
                </div>
            </Header>

            <Drawer />

            <Outlet />
            <Footer />
        </>
    )
}
