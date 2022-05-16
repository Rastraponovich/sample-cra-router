import type { TRoute } from "./models"

export const routes: TRoute[] = [
    { id: 1, path: "/", title: "Home" },
    { id: 2, path: "/calculator", title: "Calculator" },
    { id: 3, path: "/timer", title: "Timer" },
    { id: 4, path: "chess", title: "Chess" },
]

export const privateRoutes: TRoute[] = [
    { id: 1, path: "/dark-store", title: "Dark Store" },
    { id: 2, path: "/ritm-style", title: "Ritm Style" },

    // { id: 2, path: "/admin/dashboard", title: "Dashboard" },
    // { id: 3, path: "/admin/lk", title: "LK" },
]
