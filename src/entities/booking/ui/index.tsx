import { UsersIcon } from "@heroicons/react/outline"
import clsx from "clsx"
import dayjs from "dayjs"
import { memo } from "react"
import { TReserve } from "../lib"

interface ReserveCardProps {
    reserve: TReserve
    onClick(id: TReserve["id"]): void
    selected: boolean
    compact?: boolean
}
export const ReserveCard = memo(
    ({ reserve, onClick, selected, compact }: ReserveCardProps) => {
        const handleClick = () => {
            reserve.deletedAt = "" && onClick(reserve.id)
        }
        return (
            <div
                style={{
                    backgroundImage: !compact
                        ? `url(/assets/booking/${reserve.hallplane.image})`
                        : "",
                }}
                onClick={handleClick}
                className={clsx(
                    "group  relative bg-white bg-cover bg-no-repeat bg-origin-border text-white",
                    reserve.deletedAt && "opacity-30",
                    compact
                        ? "flex-row text-gray-900"
                        : "h-[200px] w-[200px] flex-col",
                    selected &&
                        "  shadow-blue-100/50 ring-2 ring-blue-500/50 ring-offset-1 ring-offset-current ",
                    "text-md flex   justify-between rounded-lg border border-transparent  p-4 font-light shadow-lg duration-150  hover:shadow-2xl"
                )}
            >
                {!compact && (
                    <div className="absolute inset-0  bg-black/30"></div>
                )}

                <div
                    className={clsx(
                        "z-10 flex items-center justify-between",
                        compact && "order-2 space-x-2 "
                    )}
                >
                    <div
                        className={clsx(
                            compact
                                ? "flex items-center space-x-2"
                                : "flex flex-col space-y-1"
                        )}
                    >
                        <span className=" truncate drop-shadow-xl ">
                            c {dayjs(reserve.startDate).format("DD.MM.YYYY")}
                        </span>
                        <span className=" truncate drop-shadow-xl ">
                            по {dayjs(reserve.endDate).format("DD.MM.YYYY")}
                        </span>
                    </div>
                    <span
                        className={clsx(
                            // reserve.status.value === "outOfServie"
                            //     ? "bg-rose-600 ring-2 ring-rose-300 "
                            //     : "bg-green-100 ring-2 ring-green-300 ",
                            "h-3 w-3 animate-pulse rounded-full border-2  border-white  "
                        )}
                    ></span>
                </div>
                <div
                    className={clsx(compact && "order-1", "z-10 flex flex-col")}
                >
                    <div
                        className={clsx(
                            compact && "space-x-4",
                            "flex items-center justify-between"
                        )}
                    >
                        <h5 className="first-letter:uppercase">
                            {reserve.hallplane.name}
                        </h5>
                        <span className="after:ml-1 after:content-['р']">
                            {reserve.prepay}
                        </span>
                    </div>
                    <div
                        className={clsx(
                            compact && "space-x-3",
                            "flex items-center justify-between"
                        )}
                    >
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
)

ReserveCard.displayName = "ReserveCard"
