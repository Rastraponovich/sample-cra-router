import { Outlet } from "react-router-dom"
import { privateRoutes, routes } from "../../shared/lib"
import { Footer } from "../footer"
import { Header } from "../header"
import { Nav } from "../navigations"

export const MainLayout = () => {
    return (
        <>
            <Header title="MainLayout">
                <Nav routes={routes} privateRoutes={privateRoutes} />
            </Header>
            <main className="flex flex-col grow">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
