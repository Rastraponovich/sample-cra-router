import { UsersIcon } from "@heroicons/react/outline"
import clsx from "clsx"
import { selectors } from "../model"

export const ReservePreview = () => {
    const reserve = selectors.useReserve()

    return (
        <div
            style={{
                backgroundImage: `url(/assets/booking/${reserve.hallplane.image})`,
            }}
            className="text-md relative flex h-[200px] w-[200px] flex-col justify-between justify-self-center rounded-lg border-2 border-transparent bg-white bg-opacity-50 bg-cover bg-no-repeat bg-origin-border p-4 font-light text-white shadow-lg duration-150 hover:shadow-2xl  md:justify-self-start"
        >
            <div className="absolute inset-0  bg-black/30"></div>

            <div className="z-10 flex items-center justify-between">
                <h2 className=" truncate drop-shadow-lg first-letter:uppercase">
                    {reserve.status.name}
                </h2>
                <span
                    className={clsx(
                        reserve.status.value === "outOfServie"
                            ? "bg-rose-600 ring-2 ring-rose-300 "
                            : "bg-green-100 ring-2 ring-green-300 ",
                        "h-3 w-3 animate-pulse rounded-full border-2  border-white  "
                    )}
                ></span>
            </div>
            <div className="z-10 flex flex-col">
                <div className="flex items-center justify-between">
                    <h5 className="first-letter:uppercase">
                        {reserve.hallplane.name}
                    </h5>
                    <span className="after:ml-1 after:content-['р']">
                        {reserve.prepay}
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="font-medium before:content-['№']">
                        {reserve.table.id}
                    </span>
                    <div className="flex items-center space-x-2">
                        <UsersIcon className="h-3 w-3 " />
                        <span>{reserve.guests}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
