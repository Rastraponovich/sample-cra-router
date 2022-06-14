import { PlusCircleIcon } from "@heroicons/react/solid"
import { useEvent } from "effector-react"
import { ReserveForm } from "features/reserve-form/ui"
import { shedullerModel } from "features/reserves-sheduller"
import { useCallback } from "react"
import { ControlledModal } from "shared/ui/modal"

export const AddReserveModal = () => {
    const opened = shedullerModel.selectors.useShowReserveModal()
    const onClose = useEvent(shedullerModel.events.closeReserveModalClicked)

    const handleClose = useCallback(onClose, [])

    return (
        <ControlledModal
            opened={opened}
            onClose={handleClose}
            title="добавить новый резерв"
            maxWidth="max-w-xl"
        >
            <ReserveForm />
        </ControlledModal>
    )
}

export const AddReserveButton = () => {
    const handleOpen = useEvent(shedullerModel.events.openReserveModalClicked)

    return (
        <button
            className="absolute bottom-8 right-8 z-50 rounded-full p-2 opacity-30 drop-shadow-lg duration-150 hover:opacity-100"
            onClick={handleOpen}
        >
            <PlusCircleIcon className="h-20 w-20 text-green-600" />
        </button>
    )
}
