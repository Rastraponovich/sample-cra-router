import { UsersIcon } from "@heroicons/react/outline"
import clsx from "clsx"
import { selectors } from "../model"

export const ReservePreview = () => {
    const reserve = selectors.useReserve()
    return (
        <div className="text-md flex h-[200px] w-[200px] flex-col justify-between rounded-lg border-2 border-transparent bg-white p-4 font-light shadow-lg duration-150  hover:shadow-2xl">
            <div className="flex items-center justify-between">
                <h2 className=" truncate first-letter:uppercase">{reserve.status.name}</h2>
                <span
                    className={clsx(
                        reserve.status.value === "outOfServie"
                            ? "bg-rose-600 ring-2 ring-rose-300 "
                            : "bg-green-100 ring-2 ring-green-300 ",
                        "h-3 w-3 animate-pulse rounded-full border-2  border-white  "
                    )}
                ></span>
            </div>
            <div className="flex flex-col">
                <div className="flex items-center justify-between">
                    <h5 className="first-letter:uppercase">{reserve.hall.name}</h5>
                    <span className="after:ml-1 after:content-['р']">{reserve.price}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="font-medium before:content-['№']">{reserve.table.value}</span>
                    <div className="flex items-center space-x-2">
                        <UsersIcon className="h-3 w-3 " />
                        <span>{reserve.guests}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
