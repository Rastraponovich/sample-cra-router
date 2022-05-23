import { UsersIcon } from "@heroicons/react/outline"
import clsx from "clsx"
import { memo } from "react"
import { TReserve } from "../lib"

interface ReserveCardProps {
    reserve: TReserve
    onClick(id: TReserve["id"]): void
    selected: boolean
}
export const ReserveCard = memo(
    ({ reserve, onClick, selected }: ReserveCardProps) => {
        const handleClick = () => onClick(reserve.id)
        return (
            <div
                style={{
                    backgroundImage: `url(/assets/booking/${reserve.hall.image})`,
                }}
                onClick={handleClick}
                className={clsx(
                    "group relative bg-opacity-50 bg-cover bg-no-repeat bg-origin-border text-white",
                    selected &&
                        "  shadow-blue-100/50 ring-2 ring-blue-500/50 ring-offset-1 ring-offset-current ",
                    "text-md flex h-[200px] w-[200px] flex-col justify-between rounded-lg border border-transparent bg-transparent p-4 font-light shadow-lg duration-150  hover:shadow-2xl"
                )}
            >
                <div className="absolute inset-0  bg-black/30"></div>

                <div className="z-10 flex items-center justify-between">
                    <h2 className=" truncate drop-shadow-xl first-letter:uppercase">
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
                            {reserve.hall.name}
                        </h5>
                        <span className="after:ml-1 after:content-['р']">
                            {reserve.price}
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="font-medium before:content-['№']">
                            {reserve.table.value}
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
)

ReserveCard.displayName = "ReserveCard"
