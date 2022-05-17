import { PlayersList } from "entities/chess/ui/player-list"
import { ChessBoard } from "entities/chess/ui/chess-board"

export const ChessBoardPage = () => {
    return (
        <section className="flex flex-col">
            <h2>Chess Page</h2>

            <div className="grid grid-cols-4 gap-x-2 px-10">
                <PlayersList />
                <div className="col-span-3">
                    <ChessBoard />
                </div>
            </div>
        </section>
    )
}
