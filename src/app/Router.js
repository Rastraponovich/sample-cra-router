import { Routes, Route } from "react-router-dom"
import { AdminHome } from "../pages/AdminHome"
import { AdminLayout } from "../components/AdminLayout"
import { Home } from "../pages/Home"
import { MainLayout } from "../components/MainLayout"
import { Dashboard } from "../pages/Dashboard"
import { AboutPage } from "../pages/About"
import { ProfilePage } from "../pages/Profile"
import { LKPage } from "../pages/LK"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="profile" element={<ProfilePage />} />
            </Route>
            <Route path="admin" element={<AdminLayout />}>
                <Route index element={<AdminHome />} />
                <Route path="lk" element={<LKPage />} />
                <Route path="dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    )
}
