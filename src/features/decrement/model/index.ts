import { createEvent, sample } from "effector"
import { TGuns } from "entities/guns/lib"
import { storeModel } from "entities/store"

export const decrementClicked = createEvent<TGuns["id"]>()

sample({
    clock: decrementClicked,
    source: storeModel.stores.$cart,

    fn: (cart, id) =>
        cart.map((gun) => {
            if (gun.id === id) return { ...gun, quantity: --gun.quantity }

            return gun
        }),
    target: storeModel.stores.$cart,
})
