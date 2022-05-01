import { PlusIcon } from "@heroicons/react/outline"
import { useEvent } from "effector-react"
import type { TGuns } from "entities/guns/lib"
import { memo } from "react"
import { incrementClicked } from "../model"

interface IncrementButtonProps {
    id: TGuns["id"]
}

export const IncrementButton = memo(({ id }: IncrementButtonProps) => {
    const handleClick = useEvent(incrementClicked)

    return (
        <button
            className="rounded bg-green-600 p-2 text-white shadow-lg"
            onClick={() => handleClick(id)}
        >
            <PlusIcon className="h-6 w-6" />
        </button>
    )
})

IncrementButton.displayName = "IncrementButton"
