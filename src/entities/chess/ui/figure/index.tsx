import clsx from "clsx"
import { TFigure, EFigureColor } from "entities/chess/lib/models"
import { selectors } from "entities/chess/model"
import { memo, useRef } from "react"
import { ChessSprites } from "shared/ui/icons/sprites/chess"

interface FigureProps {
    figure: TFigure | null
}

export const Figure = memo(({ figure }: FigureProps) => {
    const selectedFigure = selectors.useSelectedFigureId()
    const ref = useRef<SVGSVGElement | null>(null)

    return (
        <span
            className={clsx(
                "flex w-full grow items-center justify-center p-2 text-center  text-5xl ",
                selectedFigure === figure?.id && "mb-2",
                figure?.color === EFigureColor.DARK
                    ? "text-gray-900"
                    : "text-white"
            )}
        >
            {figure !== null && (
                <ChessSprites
                    name={`${figure.type.toLowerCase()}-${figure.color.toLowerCase()}`}
                    ref={ref}
                    className="h-16 w-16"
                />
            )}
        </span>
    )
})

Figure.displayName = "Figure"
