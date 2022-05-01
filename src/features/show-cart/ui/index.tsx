import { ShoppingCartIcon } from "@heroicons/react/outline"
import { useEvent } from "effector-react"
import { showCartClicked } from "../model"

export const ShowCartButton = () => {
    const handleClick = useEvent(showCartClicked)
    return (
        <button
            onClick={handleClick}
            className="absolute bottom-8 left-4 rounded-full bg-ocean p-3 text-white opacity-80 shadow-sm duration-150 hover:opacity-100 hover:shadow-lg active:animate-pulse"
        >
            <ShoppingCartIcon className="h-8 w-8" />
        </button>
    )
}
