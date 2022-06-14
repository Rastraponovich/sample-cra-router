import { useEvent } from "effector-react"
import { bookingModel } from "entities/booking"
import { ReserveForm } from "features/reserve-form/ui"
import { ReservePreview } from "features/reserve-form/ui/reserve-preview"
import { useEffect } from "react"

export const AddReservePage = () => {
    const init = useEvent(bookingModel.events.initPage)

    useEffect(() => {
        init()
    }, [])

    return (
        <section className="flex flex-col justify-center rounded bg-slate-100 p-4 md:p-8 ">
            <h3 className="mb-4 text-xl font-semibold sm:text-base">
                Booking Card
            </h3>
            <div className="grid  gap-2 md:grid-cols-2 md:gap-0">
                <ReservePreview />
                <ReserveForm />
            </div>
        </section>
    )
}
