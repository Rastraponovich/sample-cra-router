import { Routes, Route } from "react-router-dom"
import { DarkStore } from "../../pages/dark-store"
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
            <Route path="dark-store" element={<AdminLayout />}>
                <Route index element={<DarkStore />} />
                <Route path="lk" element={<LKPage />} />
                <Route path="dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    )
}
