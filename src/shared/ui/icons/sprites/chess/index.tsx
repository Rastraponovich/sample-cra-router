import { ComponentProps, ForwardedRef, forwardRef } from "react"

const ChessSprite = (props: ComponentProps<"svg">, ref: ForwardedRef<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 45 45" aria-hidden={true} {...props} ref={ref}>
            <use xlinkHref={`/assets/chess/chess-sprite.svg#${props.name}`}></use>
        </svg>
    )
}

export const ChessSprites = forwardRef(ChessSprite)
