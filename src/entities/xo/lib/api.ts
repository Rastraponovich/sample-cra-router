import type { TPlayer, TXOCell } from "./models"

export const checkWinner = (board: TXOCell[], player: TPlayer) => {
    const algoritms = ["123", "456", "789", "147", "248", "369", "159", "357"]
    const playerMovesFiltered = board
        .filter((item) => item.playerId === player.id && !item.empty)
        .map((p1) => p1.id)
        .join("")

    const result = algoritms.some((item) => item === playerMovesFiltered)
    if (result) return { winner: true, player }

    return { winner: false, player }
}
