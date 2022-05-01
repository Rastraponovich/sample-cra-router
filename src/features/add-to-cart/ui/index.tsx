import { ShoppingCartIcon } from "@heroicons/react/outline"
import { useEvent } from "effector-react"
import { TGuns } from "entities/guns/lib"
import { memo } from "react"
import { addToCartButtonModel } from ".."

interface AddToCartButtonProps {
    gun: TGuns
}

export const AddToCartButton = memo(({ gun }: AddToCartButtonProps) => {
    const handleClick = useEvent(addToCartButtonModel.events.addToCartClicked)

    return (
        <button
            className="self-start rounded bg-green-600 px-4 py-2 text-white"
            onClick={() => handleClick(gun)}
        >
            <ShoppingCartIcon className="h-6 w-6 text-white" />
        </button>
    )
})

AddToCartButton.displayName = "AddToCartButton"
