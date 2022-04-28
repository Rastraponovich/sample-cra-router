import { Routes, Route } from "react-router-dom"
import { AdminHome } from "../../pages/admin-home"
import { AdminLayout } from "../../widgets/admin-layout"
import { Home } from "../../pages/home"
import { MainLayout } from "../../widgets/main-layout"
import { Dashboard } from "../../pages/dashboard"
import { AboutPage } from "../../pages/about"
import { ProfilePage } from "../../pages/profile"
import { LKPage } from "../../pages/lk"

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
