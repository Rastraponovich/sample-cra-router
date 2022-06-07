import { Routes, Route, Navigate, Outlet } from "react-router-dom"
import { Home } from "../../pages/home"
import { MainLayout } from "../../widgets/main-layout"
import { BookingPage } from "pages/booking"
import { SchedullerPage } from "pages/booking/scheduller"
import { AuthPage } from "pages/auth"
import { authModel } from "entities/auth"
import { ReactNode } from "react"
import { NotFoundPage } from "pages/404"
import { ProfilePage } from "pages/profile"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route
                    index
                    element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    }
                />
                <Route path="auth" element={<AuthPage />} />
                <Route path="booking" element={<PrivateOutlet />}>
                    <Route index element={<BookingPage />} />
                    <Route path="scheduller" element={<SchedullerPage />} />
                </Route>
                <Route
                    path="profile"
                    element={
                        <PrivateRoute>
                            <ProfilePage />
                        </PrivateRoute>
                    }
                />

                <Route path="*" element={<NotFoundPage />} />
            </Route>
            {/* <Route path="dark-store" element={<AdminLayout />}>
                <Route index element={<DarkStore />} />
                <Route path="lk" element={<LKPage />} />
                <Route path="dashboard" element={<Dashboard />} />
            </Route> */}

            {/* <Route path="ritm-style" element={<RitmStyleLayout />}>
                <Route index element={<RitmStypePage />} />
            </Route> */}
        </Routes>
    )
}

const PrivateOutlet = () => {
    const isAuth = authModel.selectors.useIsAuth()

    return isAuth ? <Outlet /> : <Navigate to="/auth" />
}
interface PrivateRouteProps {
    children: JSX.Element
}
const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const isAuth = authModel.selectors.useIsAuth()

    if (!isAuth) return <Navigate to="/auth" replace />
    return children
}
