import { chessModel } from "entities/chess"
import { ChessSprites } from "shared/ui/icons/sprites/chess"

export const PlayersList = () => {
    const players = chessModel.selectors.usePlayerFigures()

    return (
        <div className="flex flex-col justify-between">
            <div className="flex flex-col space-y-2 rounded border p-2">
                <h2>Black Player</h2>

                <ul className="grid grid-cols-4 gap-1">
                    {players.black.map((figure) => (
                        <li key={figure.id}>
                            <ChessSprites
                                name={`${figure.type.toLowerCase()}-${figure.color.toLowerCase()}`}
                                className="h-6 w-6"
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col space-y-2 rounded border p-2">
                <h2>White Player</h2>

                <ul className="grid grid-cols-4 gap-1">
                    {players.white.map((figure) => (
                        <li key={figure.id}>
                            <ChessSprites
                                name={`${figure.type.toLowerCase()}-${figure.color.toLowerCase()}`}
                                className="h-6 w-6"
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
