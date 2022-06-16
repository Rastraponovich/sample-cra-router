import { lazy } from "react"
import { Routes, Route, Navigate, Outlet } from "react-router-dom"
import { MainLayout } from "widgets/main-layout"
import { authModel } from "entities/auth"

const Home = lazy(() =>
    import("pages/home").then((module) => ({ default: module.Home }))
)

const NotFoundPage = lazy(() =>
    import("pages/404").then((module) => ({ default: module.NotFoundPage }))
)

const BookingPage = lazy(() =>
    import("pages/booking").then((module) => ({ default: module.BookingPage }))
)

const ProfilePage = lazy(() =>
    import("pages/profile").then((module) => ({ default: module.ProfilePage }))
)

const AuthPage = lazy(() =>
    import("pages/auth").then((module) => ({ default: module.AuthPage }))
)

const SchedullerPage = lazy(() =>
    import("pages/booking/scheduller").then((module) => ({
        default: module.SchedullerPage,
    }))
)

const AddReservePage = lazy(() =>
    import("pages/booking/add").then((module) => ({
        default: module.AddReservePage,
    }))
)

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
                <Route path="booking" element={<PrivateOutlet />}>
                    <Route index element={<BookingPage />} />
                    <Route path="scheduller" element={<SchedullerPage />} />
                    <Route path="add" element={<AddReservePage />} />
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
            <Route path="auth" element={<AuthPage />} />
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
