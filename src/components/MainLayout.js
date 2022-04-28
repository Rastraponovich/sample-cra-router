import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Nav } from "./Nav"

export const MainLayout = () => {
    return (
        <>
            <Header title="MainLayout">
                <Nav />
            </Header>
            <main>
                <hr />

                <Outlet />
            </main>
            <footer></footer>
        </>
    )
}
