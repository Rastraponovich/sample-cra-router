export type TXOGameState = "started" | "ended" | "chosePlayers" | null

export type TPlayer = {
    id: number
    color: string
    name: string
    ready: boolean
}

export type THistoryRecord = {
    player: TPlayer | null
    id: number
    cell: number
}

export type TXOCell = {
    id: number
    playerId: number | null
    empty: boolean
}
