import { createEvent, sample } from "effector"
import { storeModel } from "entities/store"

export const showCartClicked = createEvent()

storeModel.stores.$visibledCart.on(showCartClicked, (state, _) => !state)
