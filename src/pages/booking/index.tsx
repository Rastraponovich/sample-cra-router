import { UsersIcon } from "@heroicons/react/outline"
import { MinusIcon, MinusSmIcon, PlusIcon, PlusSmIcon } from "@heroicons/react/solid"
import clsx from "clsx"
import { ChangeEvent, memo, useCallback, useEffect, useMemo, useState } from "react"
import { InputField } from "shared/ui/input-field"
import { Select } from "shared/ui/select"

type TDict = {
    id: number
    name: string
    value: string
}

type TTable = {
    hallId: number
    active: boolean
    id: number
    name: string
    value: number
}

type TBookingOrder = {
    id: number
    table: TTable
    price: number
    guests: number
    status: TDict
    orders: any[]
    hall: TDict
}

const hallPlanes: TDict[] = [
    { id: 1, name: "основной", value: "main" },
    { id: 2, name: "вип", value: "vip" },
    { id: 3, name: "второй зал", value: "second" },
    { id: 4, name: "терраса", value: "terrace" },
    { id: 5, name: "служебный", value: "reserve" },
]

const tablesArr: TTable[] = [
    { id: 1, value: 1, name: "стол 1", hallId: 1, active: true },
    { id: 2, value: 2, name: "стол 2", hallId: 1, active: true },
    { id: 3, value: 3, name: "стол 3", hallId: 1, active: true },
    { id: 4, value: 4, name: "стол 4", hallId: 1, active: true },
    { id: 5, value: 5, name: "стол 5", hallId: 3, active: true },
    { id: 6, value: 6, name: "стол 6", hallId: 3, active: true },
    { id: 7, value: 7, name: "стол 7", hallId: 3, active: true },
    { id: 8, value: 8, name: "вип 1", hallId: 2, active: true },
    { id: 9, value: 9, name: "вип 2", hallId: 2, active: true },
    { id: 10, value: 10, name: "улица 1", hallId: 4, active: true },
    { id: 11, value: 11, name: "улица 2", hallId: 4, active: true },
    { id: 12, value: 12, name: "улица 3", hallId: 4, active: true },
    { id: 13, value: 13, name: "служебный 1", hallId: 5, active: true },
]

const statuses: TDict[] = [
    { id: 1, name: "свободен", value: "free" },
    { id: 2, name: "занят", value: "ordered" },
    { id: 3, name: "недоступен", value: "outOfServie" },
]

const bulk: TBookingOrder = {
    id: 0,
    table: { id: 0, value: 0, name: "выберите стол", hallId: 0, active: true },
    hall: { id: 1, name: "Основной", value: "main" },
    price: 0,
    guests: 0,
    status: { id: 1, name: "свободен", value: "free" },
    orders: [],
}

export const BookingPage = () => {
    const [bookingOrder, setBookingOrder] = useState<TBookingOrder>(bulk)

    const [orders, setOrders] = useState<Array<TBookingOrder>>([])

    useEffect(() => {
        setBookingOrder({ ...bulk, id: orders.length })
    }, [orders])

    const tables = useMemo(() => {
        return tablesArr.filter((table) => table.hallId === bookingOrder.hall.id && table.active)
    }, [bookingOrder, tablesArr])

    const handleChangeBookingOrderNumber = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setBookingOrder((prev) => ({ ...prev, [name]: Number(value) }))
    }

    const handleIncrement = () => {
        setBookingOrder((prev) => ({ ...prev, guests: prev.guests++ }))
    }
    const handleDecrement = () => {
        if (bookingOrder.guests > 0) setBookingOrder((prev) => ({ ...prev, guests: prev.guests-- }))
    }

    const handleSelectHallPlane = useCallback(
        (value: TDict) => {
            setBookingOrder((prev) => ({
                ...prev,
                hall: value,
                table: { id: 0, value: 0, name: "выберите стол", hallId: 0, active: true },
            }))
        },
        [bookingOrder]
    )

    const handleSelectOrderStatus = useCallback(
        (value: TDict) => {
            setBookingOrder((prev) => ({ ...prev, status: value }))
        },
        [bookingOrder]
    )

    const handleSelectOrderTable = useCallback(
        (value: TTable) => {
            setBookingOrder((prev) => ({ ...prev, table: value }))
        },
        [bookingOrder]
    )

    const handleAddOrder = () => {
        const condition =
            bookingOrder.guests > 0 && bookingOrder.table.value > 0 && bookingOrder.status.value !== "outOfServie"

        if (condition) setOrders((prev) => [...prev, bookingOrder])
    }

    const handleReset = () => {
        setBookingOrder(bulk)
    }

    const handleResetOrders = () => {
        setOrders([])
    }

    return (
        <div className="flex flex-col px-10 py-5">
            <section className="flex flex-col">
                <h2>BookingPage</h2>

                <div className="flex   flex-col  justify-center rounded bg-slate-100 p-8">
                    <h3 className="mb-4 text-center">Booking Card</h3>
                    <div className="grid grid-cols-2">
                        <BookingCard order={bookingOrder} />
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex flex-col space-y-4 bg-white p-4 text-base shadow-md sm:text-sm"
                        >
                            <div className="flex items-center justify-between space-x-10">
                                <span className="first-letter:uppercase">зал</span>
                                <Select<TDict>
                                    items={hallPlanes}
                                    selected={bookingOrder.hall}
                                    onSelect={handleSelectHallPlane}
                                    containerClassName="grow"
                                />
                            </div>

                            <InputField
                                caption="цена"
                                placeholder="цена"
                                onChange={handleChangeBookingOrderNumber}
                                name="price"
                                value={bookingOrder.price}
                                type="number"
                                containerClassName="space-x-10"
                                className="relative  w-full cursor-default appearance-none rounded-lg bg-white px-4 py-2  text-left shadow-md placeholder:italic placeholder:text-gray-500 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm
                                "
                            />
                            <div className="flex items-center justify-between">
                                <span className="first-letter:uppercase">гости</span>
                                <div className="flex items-center space-x-2">
                                    <span className="rounded border py-2 px-4">{bookingOrder.guests}</span>

                                    <button onClick={handleIncrement} className=" text-white">
                                        <PlusSmIcon className="h-6 w-6 rounded bg-green-600" />
                                    </button>
                                    <button
                                        disabled={bookingOrder.guests === 0}
                                        onClick={handleDecrement}
                                        className="group text-white"
                                    >
                                        <MinusSmIcon className="h-6 w-6 rounded bg-rose-600 group-disabled:bg-rose-300" />
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between space-x-10">
                                <span className="first-letter:uppercase">стол</span>
                                <Select<TTable>
                                    items={tables}
                                    selected={bookingOrder.table}
                                    onSelect={handleSelectOrderTable}
                                    containerClassName="grow"
                                />
                            </div>

                            <div className="flex items-center justify-between space-x-10">
                                <span className="first-letter:uppercase">статус</span>
                                <Select<TDict>
                                    items={statuses}
                                    selected={bookingOrder.status}
                                    onSelect={handleSelectOrderStatus}
                                    containerClassName="grow"
                                />
                            </div>

                            <div className="flex items-center justify-between text-base font-bold  text-white">
                                <button
                                    className="rounded-lg bg-green-600 px-4 py-2 uppercase shadow-lg disabled:opacity-50 "
                                    disabled={
                                        bookingOrder.guests === 0 ||
                                        bookingOrder.table.value === 0 ||
                                        bookingOrder.status.value === "outOfServie"
                                    }
                                    onClick={handleAddOrder}
                                >
                                    добавить
                                </button>

                                <button
                                    className="rounded-lg bg-rose-600 px-4 py-2 uppercase shadow-lg "
                                    onClick={handleReset}
                                >
                                    сбросить
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <section className="flex flex-col space-y-2 bg-gray-200 p-4">
                {orders.length > 0 && (
                    <div className="flex items-center space-x-4">
                        <button className="rounded-lg bg-rose-600 px-4 py-2 text-white" onClick={handleResetOrders}>
                            отчистить все
                        </button>
                    </div>
                )}
                {orders.length === 0 && <span className="w-full text-center text-4xl ">броней нет</span>}
                {orders.length > 0 && (
                    <div className="grid grid-cols-4 gap-4">
                        {orders.map((order) => (
                            <BookingCard key={order.id} order={order} />
                        ))}
                    </div>
                )}
            </section>
        </div>
    )
}
interface BookingCardProps {
    order: TBookingOrder
}
const BookingCard = memo(({ order }: BookingCardProps) => {
    return (
        <div className="text-md flex h-[200px] w-[200px] flex-col justify-between rounded-lg bg-white p-4 font-light shadow-lg  hover:shadow-2xl">
            <div className="flex items-center justify-between">
                <h2 className=" truncate first-letter:uppercase">{order.status.name}</h2>
                <span
                    className={clsx(
                        order.status.value === "outOfServie"
                            ? "bg-rose-600 ring-2 ring-rose-300 "
                            : "bg-green-100 ring-2 ring-green-300 ",
                        "h-3 w-3 animate-pulse rounded-full border-2  border-white  "
                    )}
                ></span>
            </div>
            <div className="flex flex-col">
                <div className="flex items-center justify-between">
                    <h5 className="first-letter:uppercase">{order.hall.name}</h5>
                    <span className="after:ml-1 after:content-['р']">{order.price}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="font-medium before:content-['№']">{order.table.value}</span>
                    <div className="flex items-center space-x-2">
                        <UsersIcon className="h-3 w-3 " />
                        <span>{order.guests}</span>
                    </div>
                </div>
            </div>
        </div>
    )
})

BookingCard.displayName = "BookingCard"
