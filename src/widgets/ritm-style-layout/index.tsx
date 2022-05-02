import { Outlet } from "react-router-dom"
import { Drawer } from "../../features/drawer"
import { privateRoutes, routes } from "../../shared/lib"
import { Footer } from "../footer"
import { Header } from "../header"
import { Nav } from "../navigations"

export const RitmStyleLayout = () => {
    return (
        <>
            <Header title="Ritm Style">
                <div className="hidden lg:flex">
                    <Nav routes={routes} privateRoutes={privateRoutes} />
                </div>
            </Header>

            <Drawer />

            <Outlet />
            <Footer />
        </>
    )
}
