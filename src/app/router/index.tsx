import { Routes, Route } from "react-router-dom"
import { AdminHome } from "../../pages/admin-home"
import { AdminLayout } from "../../widgets/admin-layout"
import { Home } from "../../pages/home"
import { MainLayout } from "../../widgets/main-layout"
import { Dashboard } from "../../pages/dashboard"
import { CalculatorPage } from "../../pages/calculator"
import { TimerPage } from "../../pages/timer"
import { LKPage } from "../../pages/lk"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="calculator" element={<CalculatorPage />} />
                <Route path="timer" element={<TimerPage />} />
            </Route>
            <Route path="admin" element={<AdminLayout />}>
                <Route index element={<AdminHome />} />
                <Route path="lk" element={<LKPage />} />
                <Route path="dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    )
}
