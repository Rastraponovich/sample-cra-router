import { MinusIcon } from "@heroicons/react/outline"
import { useEvent } from "effector-react"
import type { TGuns } from "entities/guns/lib"
import { memo } from "react"
import { decrementClicked } from "../model"

interface DecrementButtonProps {
    id: TGuns["id"]
}

export const DecrementButton = memo(({ id }: DecrementButtonProps) => {
    const handleClick = useEvent(decrementClicked)

    return (
        <button
            className="rounded bg-green-600 p-2 text-white shadow-lg"
            onClick={() => handleClick(id)}
        >
            <MinusIcon className="h-6 w-6" />
        </button>
    )
})

DecrementButton.displayName = "DecrementButton"
