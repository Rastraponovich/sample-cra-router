export type TDict = {
    id: number
    name: string
    value: string
}

export type THallplane = {
    id: number
    image: string
    isActive: boolean
    name: string
}

export type TPrepay = {
    id: number
    name: string
    value: Array<number>
}

export type TTable = {
    hallplaneId: number
    id: number
    isActive: boolean
    name: string
    reserves: Array<TReserve>
}

export type TReserve = {
    id: number
    table: TTable
    tableId: TTable["id"]
    prepay: number
    guests: number
    status: TDict
    hallplane: THallplane
    hallplaneId: THallplane["id"]
    startDate: number
    person?: any

    endDate: number
} & Partial<TCRUDDate>

type TCRUDDate = {
    deletedAt: string
    createdAt: string
    updatedAt: string
}

export type TReservesParams = {
    withDeleted?: boolean
    hallplaneId?: number
    prepayType?: number
}
