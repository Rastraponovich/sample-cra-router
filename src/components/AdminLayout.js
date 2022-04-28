import { Outlet, Route, Routes } from "react-router-dom"
import { Header } from "./Header"
import { Nav } from "./Nav"

export const AdminLayout = () => {
    return (
        <>
            <Header title="AdminLayout">
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
