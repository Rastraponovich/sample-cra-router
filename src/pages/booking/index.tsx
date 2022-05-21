import { AdjustmentsIcon, CalendarIcon, CheckIcon, TrashIcon, XCircleIcon, XIcon } from "@heroicons/react/outline"
import { memo, useCallback, useEffect, useMemo, useState } from "react"
import { Select } from "shared/ui/select"

import type { TReserve, TTable, TDict, TPrepay } from "entities/booking/lib"

import { _defaultReserve_, _prepaysDict_, _tables_, _hallPlanes_, _statuses_ } from "entities/booking/lib"
import { ReserveForm } from "features/reserve-form/ui"
import { ReservePreview } from "features/reserve-form/ui/reserve-preview"
import { ReservesList } from "entities/booking/ui/reserves-list"

export const BookingPage = () => {
    const [reserves, setReserves] = useState<Array<TReserve>>([])

    const [filteredHallPlanes, setFilteredHallPlanes] = useState<TDict>({
        id: 0,
        name: "все залы",
        value: "all",
    })
    const [prepays, setPrepays] = useState<TPrepay>(_prepaysDict_[0])

    const filteredOrders = useMemo(() => {
        if (filteredHallPlanes.id !== 0) {
            if (prepays.value.length === 1)
                return reserves.filter(
                    (order) => order.hall.id === filteredHallPlanes.id && order.price === prepays.value[0]
                )
            if (prepays.value.length === 2)
                return reserves.filter(
                    (order) =>
                        order.hall.id === filteredHallPlanes.id &&
                        order.price >= prepays.value[0] &&
                        order.price <= prepays.value[1]
                )

            return reserves.filter((order) => order.hall.id === filteredHallPlanes.id)
        }

        if (prepays.value.length === 1) return reserves.filter((order) => order.price === prepays.value[0])
        if (prepays.value.length === 2)
            return reserves.filter((order) => order.price >= prepays.value[0] && order.price <= prepays.value[1])

        return reserves
    }, [reserves, filteredHallPlanes, prepays])

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

    const [selectedBookings, setSelectedBookings] = useState<Array<TReserve["id"]>>([])

    const handleResetOrders = useCallback(() => {
        setReserves([])
    }, [])

    const handleSelectAllFilteredOrders = useCallback(() => {
        if (filteredOrders.length === selectedBookings.length) return setSelectedBookings([])

        setSelectedBookings(filteredOrders.map((item) => item.id))
    }, [filteredOrders, selectedBookings])

    //
    const handleResetSelectedOrders = useCallback(() => {
        setReserves((prev) => prev.filter((order) => !selectedBookings.some((sb) => sb === order.id)))
        setSelectedBookings([])
    }, [reserves, selectedBookings])

    return (
        <div className="flex flex-col space-y-4 px-10 py-5">
            <section className="flex flex-col justify-center rounded bg-slate-100 p-8 ">
                <h3 className="mb-4 text-xl font-semibold sm:text-base">Booking Card</h3>
                <div className="grid grid-cols-2">
                    <ReservePreview />
                    <ReserveForm />
                </div>
            </section>

            <CodeGenerator filteredhallPlanesId={filteredHallPlanes.id} prepaysId={prepays.id} />

            <section className="flex flex-col space-y-2 bg-gray-200 p-4">
                <div className="flex items-center space-x-2">
                    <h4 className="!my-4 text-2xl font-bold first-letter:uppercase sm:text-xl">список резервов</h4>
                    <CalendarIcon className="h-6 w-6" />
                </div>
                {reserves.length > 0 && (
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
                            selectFilteredHallPlanes={handleSelectFilteredHallPlanes}
                        />
                    </div>
                )}

                {filteredOrders.length === 0 && <span className="w-full text-center text-4xl ">броней нет</span>}
                <ReservesList />
            </section>
            <div className="flex h-40 grow flex-col"></div>
        </div>
    )
}

interface FiltersProps {
    selectFilteredHallPlanes: (hallPlane: TDict) => void
    filteredHallPlanes: TDict
    selectPrepayFilter: (prepay: TPrepay) => void
    selectedPrepay: TPrepay
}
const Filters = memo(
    ({ selectedPrepay, selectPrepayFilter, selectFilteredHallPlanes, filteredHallPlanes }: FiltersProps) => {
        return (
            <div className="flex flex-col space-y-4 rounded bg-gray-100 px-2 py-4">
                <div className="flex items-center space-x-2">
                    <span className="text-xl font-semibold first-letter:uppercase sm:text-base">фильтры</span>
                    <AdjustmentsIcon className="h-6 w-6" />
                </div>

                <div className="flex  space-x-4">
                    <div className="flex grow items-center space-x-4">
                        <span>по залам:</span>
                        <Select<TDict>
                            items={[
                                ..._hallPlanes_,
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

                    <div className="flex grow items-center space-x-4">
                        <span>по предоплате:</span>
                        <Select<TDict>
                            items={_prepaysDict_}
                            onSelect={selectPrepayFilter}
                            selected={selectedPrepay}
                            containerClassName="grow"
                        />
                    </div>
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
                    className="flex items-center space-x-2 self-start rounded-lg bg-rose-600 py-2 pl-4 pr-2 text-white shadow-lg"
                    onClick={resetAllOrders}
                >
                    <span>отчистить все</span>
                    <TrashIcon className="h-4 w-4" />
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
                    className="flex items-center space-x-2 self-start rounded-lg bg-green-600 py-2 pl-4 pr-2 text-white shadow-lg disabled:opacity-50"
                    onClick={selectAllOrders}
                    disabled={filteredOrdersCount === 0}
                >
                    <span>{selectedOrdersCount === filteredOrdersCount ? "снять выделение" : "выбрать все"}</span>
                    {selectedOrdersCount === filteredOrdersCount ? (
                        <XIcon className="h-4 w-4" />
                    ) : (
                        <CheckIcon className="h-4 w-4" />
                    )}
                </button>

                <button className="flex items-center space-x-2 self-start rounded-lg bg-rose-600 py-2 pl-4 pr-2 text-white shadow-lg disabled:opacity-50">
                    <span>сбросить фильтры</span>

                    <XCircleIcon className="h-4 w-4" />
                </button>
            </div>
        )
    }
)

ActionPanel.displayName = "ActionPanel"

interface CodeGeneratorProps {
    filteredhallPlanesId: number
    prepaysId: number
    // params?:Array<string>
}
//refactoring needded to accept params array
const CodeGenerator = memo(({ filteredhallPlanesId, prepaysId }: CodeGeneratorProps) => {
    const params = [
        filteredhallPlanesId !== 0 && `hallId=${filteredhallPlanesId}`,
        prepaysId !== 0 && `prepaysId=${prepaysId}`,
    ]

    return (
        <section className="flex flex-col space-y-4 bg-teal-600 px-4 py-8">
            <h4 className="text-2xl font-bold text-white sm:text-xl">api query generator</h4>

            <pre className="rounded bg-gray-300 p-4 text-sm">
                <p>для получения данных выполним запрос</p>
                <code>GET: /api/orders?{params.join("&")}</code>
            </pre>
        </section>
    )
})

CodeGenerator.displayName = "CodeGenerator"
