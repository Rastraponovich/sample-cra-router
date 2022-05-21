import { Transition } from "@headlessui/react"
import { UsersIcon } from "@heroicons/react/outline"
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/solid"
import clsx from "clsx"
import {
    ChangeEvent,
    memo,
    ReactNode,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react"
import { InputField } from "shared/ui/input-field"
import { Select } from "shared/ui/select"

type TDict = {
    id: number
    name: string
    value: string
}

type TPrepay = {
    id: number
    name: string
    value: Array<number>
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

const prepaidedDict: TPrepay[] = [
    { id: 0, name: "без фильтрации", value: [] },

    { id: 1, name: "без предоплат", value: [0] },
    { id: 2, name: "от 1000 до 2000", value: [1000, 2000] },
    { id: 3, name: "от 2000 до 5000", value: [2000, 5000] },
    { id: 4, name: "от 5000 до 10000", value: [5000, 10000] },
    { id: 5, name: "от 10000", value: [10000] },
]

export const BookingPage = () => {
    const [bookingOrder, setBookingOrder] = useState<TBookingOrder>(bulk)

    const [orderedTables, setOrderedTables] = useState<TTable["id"][]>([])

    const [orders, setOrders] = useState<Array<TBookingOrder>>([])

    const [filteredHallPlanes, setFilteredHallPlanes] = useState<TDict>({
        id: 0,
        name: "все залы",
        value: "all",
    })
    const [prepays, setPrepays] = useState<TPrepay>(prepaidedDict[0])

    const filteredOrders = useMemo(() => {
        if (filteredHallPlanes.id !== 0) {
            if (prepays.value.length === 1)
                return orders.filter(
                    (order) =>
                        order.hall.id === filteredHallPlanes.id &&
                        order.price === prepays.value[0]
                )
            if (prepays.value.length === 2)
                return orders.filter(
                    (order) =>
                        order.hall.id === filteredHallPlanes.id &&
                        order.price >= prepays.value[0] &&
                        order.price <= prepays.value[1]
                )

            return orders.filter(
                (order) => order.hall.id === filteredHallPlanes.id
            )
        }

        if (prepays.value.length === 1)
            return orders.filter((order) => order.price === prepays.value[0])
        if (prepays.value.length === 2)
            return orders.filter(
                (order) =>
                    order.price >= prepays.value[0] &&
                    order.price <= prepays.value[1]
            )

        return orders
    }, [orders, filteredHallPlanes, prepays])

    const handleSelectFilteredHallPlanes = useCallback(
        (hallPlane: TDict) => {
            setFilteredHallPlanes(hallPlane)
        },
        [filteredHallPlanes]
    )

    const handleSelectPrepayFilter = useCallback(
        (prepay: TPrepay) => {
            setPrepays(prepay)
        },
        [prepays]
    )

    const [selectedBookings, setSelectedBookings] = useState<
        Array<TBookingOrder["id"]>
    >([])

    const handleSelectBooking = useCallback(
        (id: TBookingOrder["id"]) => {
            const existBookingId = selectedBookings.some((i) => i === id)

            if (existBookingId)
                return setSelectedBookings((prev) =>
                    prev.filter((item) => item !== id)
                )
            return setSelectedBookings((prev) => [...prev, id])
        },
        [selectedBookings]
    )

    useEffect(() => {
        setBookingOrder({ ...bulk, id: orders.length })

        const filteredTables = orders.map((order) => order.table.id)

        setOrderedTables(filteredTables)
    }, [orders])

    const tables = useMemo(() => {
        return tablesArr.filter(
            (table) =>
                table.hallId === bookingOrder.hall.id &&
                table.active &&
                !orderedTables.some((ot) => table.id === ot)
        )
    }, [bookingOrder, tablesArr, orderedTables])

    const handleChangeBookingOrderNumber = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target

            setBookingOrder((prev) => ({ ...prev, [name]: Number(value) }))
        },
        [bookingOrder]
    )

    const handleIncrement = useCallback(() => {
        setBookingOrder((prev) => ({ ...prev, guests: prev.guests + 1 }))
    }, [bookingOrder])
    const handleDecrement = useCallback(() => {
        if (bookingOrder.guests > 0)
            setBookingOrder((prev) => ({ ...prev, guests: prev.guests - 1 }))
    }, [bookingOrder])

    const handleSelectHallPlane = useCallback(
        (value: TDict) => {
            setBookingOrder((prev) => ({
                ...prev,
                hall: value,
                table: {
                    id: 0,
                    value: 0,
                    name: "выберите стол",
                    hallId: 0,
                    active: true,
                },
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

    const handleAddOrder = useCallback(() => {
        const condition =
            bookingOrder.guests > 0 &&
            bookingOrder.table.value > 0 &&
            bookingOrder.status.value !== "outOfServie"

        if (condition) setOrders((prev) => [...prev, bookingOrder])
    }, [bookingOrder, orders])

    const handleReset = useCallback(() => {
        setBookingOrder(bulk)
    }, [])

    const handleResetOrders = useCallback(() => {
        setOrders([])
    }, [])

    const handleSelectAllFilteredOrders = useCallback(() => {
        if (filteredOrders.length === selectedBookings.length)
            return setSelectedBookings([])

        setSelectedBookings(filteredOrders.map((item) => item.id))
    }, [filteredOrders, selectedBookings])

    //
    const handleResetSelectedOrders = useCallback(() => {
        setOrders((prev) =>
            prev.filter(
                (order) => !selectedBookings.some((sb) => sb === order.id)
            )
        )
        setSelectedBookings([])
    }, [orders, selectedBookings])

    return (
        <div className="flex flex-col space-y-4 px-10 py-5">
            <section className="flex flex-col justify-center rounded bg-slate-100 p-8 ">
                <h3 className="mb-4 text-xl font-semibold sm:text-base">
                    Booking Card
                </h3>
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
                            <span className="first-letter:uppercase">
                                гости
                            </span>
                            <div className="flex items-center space-x-2">
                                <span className="rounded border py-2 px-4">
                                    {bookingOrder.guests}
                                </span>

                                <button
                                    onClick={handleIncrement}
                                    className=" text-white"
                                >
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
                            <span className="first-letter:uppercase">
                                статус
                            </span>
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
            </section>

            <CodeGenerator
                filteredhallPlanesId={filteredHallPlanes.id}
                prepaysId={prepays.id}
            />

            <section className="flex flex-col space-y-2 bg-gray-200 p-4">
                <h4 className="!my-4 text-2xl font-bold first-letter:uppercase sm:text-xl">
                    список резервов
                </h4>
                {orders.length > 0 && (
                    <div className="flex flex-col  space-y-2 text-base sm:text-sm">
                        <ActionPanel
                            resetAllOrders={handleResetOrders}
                            selectedOrdersCount={selectedBookings.length}
                            selectAllOrders={handleSelectAllFilteredOrders}
                            resetSelectedOrders={handleResetSelectedOrders}
                            filteredOrdersCount={filteredOrders.length}
                        />

                        <Filters
                            selectedPrepay={prepays}
                            filteredHallPlanes={filteredHallPlanes}
                            selectPrepayFilter={handleSelectPrepayFilter}
                            selectFilteredHallPlanes={
                                handleSelectFilteredHallPlanes
                            }
                        />
                    </div>
                )}

                {filteredOrders.length === 0 && (
                    <span className="w-full text-center text-4xl ">
                        броней нет
                    </span>
                )}
                <div className="grid grid-cols-3 gap-4 py-2">
                    {filteredOrders.map((order) => (
                        <ScalesComponentAnimation key={order.id}>
                            <BookingCard
                                key={order.id}
                                order={order}
                                onClick={handleSelectBooking}
                                selected={selectedBookings.some(
                                    (id) => id === order.id
                                )}
                            />
                        </ScalesComponentAnimation>
                    ))}
                </div>
            </section>
            <div className="flex h-40 grow flex-col"></div>
        </div>
    )
}
interface BookingCardProps {
    order: TBookingOrder
    onClick?(id: TBookingOrder["id"]): void
    selected?: boolean
}
const BookingCard = memo(({ order, onClick, selected }: BookingCardProps) => {
    const handleClick = () => {
        if (onClick) onClick(order.id)
    }
    return (
        <div
            onClick={handleClick}
            className={clsx(
                selected && " shadow-blue-100/50 ring-2 ring-blue-200",
                "text-md flex h-[200px] w-[200px] flex-col justify-between rounded-lg border-2 border-transparent bg-white p-4 font-light shadow-lg duration-150  hover:shadow-2xl"
            )}
        >
            <div className="flex items-center justify-between">
                <h2 className=" truncate first-letter:uppercase">
                    {order.status.name}
                </h2>
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
                    <h5 className="first-letter:uppercase">
                        {order.hall.name}
                    </h5>
                    <span className="after:ml-1 after:content-['р']">
                        {order.price}
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="font-medium before:content-['№']">
                        {order.table.value}
                    </span>
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

interface ScalesComponentAnimationProps {
    children: ReactNode
}

const ScalesComponentAnimation = memo(
    ({ children }: ScalesComponentAnimationProps) => {
        return (
            <Transition
                show={true}
                as="div"
                appear
                enter="transition-[transform_opacity] duration-500 "
                enterFrom="scale-150 opacity-0"
                enterTo="scale-1 opacity-100"
                leave="transition-[transform_opacity] duration-500 "
                leaveFrom="scale-1 opacity-100"
                leaveTo="opacity-0 scale-70"
            >
                {children}
            </Transition>
        )
    }
)

interface FiltersProps {
    selectFilteredHallPlanes: (hallPlane: TDict) => void
    filteredHallPlanes: TDict
    selectPrepayFilter: (prepay: TPrepay) => void
    selectedPrepay: TPrepay
}
const Filters = memo(
    ({
        selectedPrepay,
        selectPrepayFilter,
        selectFilteredHallPlanes,
        filteredHallPlanes,
    }: FiltersProps) => {
        return (
            <div className="flex flex-col space-y-2 rounded bg-gray-100 px-2 py-4">
                <span className="text-xl font-semibold first-letter:uppercase sm:text-base">
                    фильтры
                </span>

                <div className="flex items-center space-x-4">
                    <span>по залам:</span>
                    <Select<TDict>
                        items={[
                            ...hallPlanes,
                            {
                                id: 0,
                                name: "все залы",
                                value: "all",
                            },
                        ]}
                        onSelect={selectFilteredHallPlanes}
                        selected={filteredHallPlanes}
                        containerClassName="grow"
                    />
                </div>

                <div className="flex items-center space-x-4">
                    <span>по предоплате:</span>
                    <Select<TDict>
                        items={prepaidedDict}
                        onSelect={selectPrepayFilter}
                        selected={selectedPrepay}
                        containerClassName="grow"
                    />
                </div>
            </div>
        )
    }
)

Filters.displayName = "Filters"

interface ActionPanelProps {
    resetAllOrders(): void
    resetSelectedOrders(): void
    selectAllOrders(): void
    selectedOrdersCount: number
    filteredOrdersCount: number
}

const ActionPanel = memo(
    ({
        resetAllOrders,
        resetSelectedOrders,
        selectedOrdersCount,
        filteredOrdersCount,
        selectAllOrders,
    }: ActionPanelProps) => {
        return (
            <div className="flex items-center space-x-4 rounded border  bg-gray-100 p-2">
                <button
                    className="self-start rounded-lg bg-rose-600 px-4 py-2 text-white shadow-lg"
                    onClick={resetAllOrders}
                >
                    отчистить все
                </button>
                <button
                    className="self-start rounded-lg bg-rose-600 px-4 py-2 text-white shadow-lg disabled:opacity-50"
                    onClick={resetSelectedOrders}
                    disabled={selectedOrdersCount === 0}
                >
                    отчистить
                    {selectedOrdersCount > 0 && ":" + selectedOrdersCount}
                </button>
                <button
                    className="self-start rounded-lg bg-green-600 px-4 py-2 text-white shadow-lg disabled:opacity-50"
                    onClick={selectAllOrders}
                    disabled={filteredOrdersCount === 0}
                >
                    {selectedOrdersCount === filteredOrdersCount
                        ? "снять выделение"
                        : "выбрать все"}
                </button>
            </div>
        )
    }
)

ActionPanel.displayName = "ActionPanel"

interface CodeGeneratorProps {
    filteredhallPlanesId: number
    prepaysId: number
}
//refactoring needded to accept params array
const CodeGenerator = memo(
    ({ filteredhallPlanesId, prepaysId }: CodeGeneratorProps) => {
        return (
            <section className="flex flex-col space-y-4 bg-teal-600 px-4 py-8">
                <h4 className="text-2xl font-bold text-white sm:text-xl">
                    api query generator
                </h4>

                <pre className="rounded bg-gray-300 p-4 text-sm">
                    <p>для получения данных выполним запрос</p>
                    <code>
                        GET: /api/orders
                        {filteredhallPlanesId !== 0
                            ? `?hallId=${filteredhallPlanesId}`
                            : ""}
                        {filteredhallPlanesId !== 0 && prepaysId !== 0
                            ? `&priceLimitId=${prepaysId}`
                            : prepaysId !== 0
                            ? `?priceLimitId=${prepaysId}`
                            : ""}
                    </code>
                </pre>
            </section>
        )
    }
)

CodeGenerator.displayName = "CodeGenerator"
