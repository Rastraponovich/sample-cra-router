import { Outlet, Route, Routes } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Nav } from "./Nav"

export const AdminLayout = () => {
    return (
        <>
            <Header title="AdminLayout">
                <Nav />
            </Header>
            <main className="flex flex-col grow">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
