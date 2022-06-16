import { useEffect, useMemo } from "react"

import { ReservesSheduler } from "features/reserves-sheduller/ui"
import { useEvent } from "effector-react"
import { bookingModel } from "entities/booking"
import { Loader } from "entities/booking/ui"
import { NavLink, useLocation, matchPath } from "react-router-dom"
import clsx from "clsx"
import { AddReserveButton } from "features/add-reserve"

export const SchedullerPage = () => {
    const initPage = useEvent(bookingModel.events.initPage)
    const pageMounted = bookingModel.selectors.usePageMounted()
    useEffect(() => {
        initPage()
    }, [])

    return (
        <div className=" relative z-10 flex grow flex-col space-y-2  bg-gray-200 px-4 py-2 font-sans md:space-y-4 md:px-10 md:py-5">
            {/* <Loader /> */}

            <AddReserveButton />

            {pageMounted && <ReservesSheduler />}
        </div>
    )
}
