export type TDict = {
    id: number
    name: string
    value: string
}

export type THallplane = {
    image?: string
} & TDict

export type TPrepay = {
    id: number
    name: string
    value: Array<number>
}

export type TTable = {
    hallId: number
    active: boolean
    id: number
    name: string
    value: number
}

export type TReserve = {
    id: number
    table: TTable
    tableId: TTable["id"]
    price: number
    guests: number
    status: TDict
    orders: any[]
    hall: THallplane
    hallId: THallplane["id"]
    startDate: string

    endDate: string
}
