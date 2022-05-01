import { useEvent } from "effector-react"
import { memo } from "react"
import { setQuantity } from "../model"

import type { TGuns } from "entities/guns/lib"

interface QuantityInputProps {
    id: TGuns["id"]
    quantity: number
}

export const QuantityInput = memo(({ id, quantity }: QuantityInputProps) => {
    const onChange = useEvent(setQuantity)

    return (
        <input
            className="h-10 w-10 rounded border border-black p-2 text-center text-gray-900"
            id={String(id)}
            value={quantity}
            onChange={onChange}
        />
    )
})

QuantityInput.displayName = "QuantityInput"
