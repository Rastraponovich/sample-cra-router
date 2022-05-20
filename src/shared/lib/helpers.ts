import type { TRoute } from "./models"

export const routes: TRoute[] = [
    { id: 1, path: "/", title: "главная" },
    // { id: 2, path: "/calculator", title: "калькулятор" },
    // { id: 3, path: "/timer", title: "таймер" },
    // { id: 4, path: "chess", title: "Chess" },
    { id: 5, path: "/animate-icons", title: "анимированные иконки" },
    // { id: 6, path: "/xo", title: "крестики-нолики(proccess)" },
    { id: 7, path: "/booking", title: "бронирование (proccess)" },
]

export const privateRoutes: TRoute[] = [
    { id: 1, path: "/dark-store", title: "Dark Store" },
    { id: 2, path: "/ritm-style", title: "Ritm Style" },

    // { id: 2, path: "/admin/dashboard", title: "Dashboard" },
    // { id: 3, path: "/admin/lk", title: "LK" },
]
