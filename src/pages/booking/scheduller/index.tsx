import { useEffect, useMemo } from "react"

import { ReservesSheduler } from "features/reserves-sheduller/ui"
import { useEvent } from "effector-react"
import { bookingModel } from "entities/booking"
import { Loader } from "entities/booking/ui"
import { NavLink, useLocation, matchPath } from "react-router-dom"
import clsx from "clsx"

const BreadCrumbs = () => {}

export const SchedullerPage = () => {
    const initPage = useEvent(bookingModel.events.initPage)
    const pageMounted = bookingModel.selectors.usePageMounted()
    useEffect(() => {
        initPage()
    }, [])

    const location = useLocation()

    const links = useMemo(
        () => location.pathname.split("/"),
        [location.pathname]
    )

    return (
        <div className=" z-50 flex grow flex-col space-y-2 px-4 py-2 font-sans md:space-y-4 md:px-10 md:py-5">
            <nav className="flex">
                {links.map((link, idx) => (
                    <NavLink
                        key={idx}
                        to={`/${link}`}
                        className={clsx(
                            idx !== links.length - 1 &&
                                "after:mx-4 after:content-['>']",
                            matchPath(location.pathname, link) && "underline"
                        )}
                    >
                        {idx === 0 ? "Home" : link}
                    </NavLink>
                ))}
            </nav>

            <Loader />

            {pageMounted && <ReservesSheduler />}
        </div>
    )
}
