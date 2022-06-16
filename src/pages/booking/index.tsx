import { memo, useEffect } from "react"

import { Reserves } from "entities/booking/ui/reserves-list"

import { useEvent } from "effector-react"
import { bookingModel } from "entities/booking"
import { Loader } from "entities/booking/ui"

export const BookingPage = () => {
    const initPage = useEvent(bookingModel.events.initPage)

    useEffect(() => {
        initPage()
    }, [])

    return (
        <div className=" z-50 flex grow flex-col space-y-2 px-4 py-2 font-sans md:space-y-4 md:px-10 md:py-5">
            <Reserves />
        </div>
    )
}

interface CodeGeneratorProps {
    filteredhallPlanesId: number
    prepaysId: number
    // params?:Array<string>
}
//refactoring needded to accept params array
const CodeGenerator = memo(
    ({ filteredhallPlanesId, prepaysId }: CodeGeneratorProps) => {
        const params = [
            filteredhallPlanesId !== 0 && `hallId=${filteredhallPlanesId}`,
            prepaysId !== 0 && `prepaysId=${prepaysId}`,
        ]

        return (
            <section className="flex flex-col space-y-4 bg-teal-600 px-4 py-8">
                <h4 className="text-2xl font-bold text-white sm:text-xl">
                    api query generator
                </h4>

                <pre className="rounded bg-gray-300 p-4 text-sm">
                    <p>для получения данных выполним запрос</p>
                    <code>GET: /api/orders?{params.join("&")}</code>
                </pre>
            </section>
        )
    }
)

CodeGenerator.displayName = "CodeGenerator"
