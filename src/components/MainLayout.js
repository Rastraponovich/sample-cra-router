import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Nav } from "./Nav"

export const MainLayout = () => {
    return (
        <>
            <Header title="MainLayout">
                <Nav />
            </Header>
            <main className="flex flex-col grow">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
