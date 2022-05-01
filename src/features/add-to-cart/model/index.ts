import { createEvent, sample } from "effector"
import { TGuns } from "entities/guns/lib"
import { storeModel } from "entities/store"

const addToCartClicked = createEvent<TGuns>()

// storeModel.stores.$cart.on(addToCartClicked, (cart, gun) => [
//     ...cart,
//     { ...gun, quantity: 1 },
// ])

sample({
    clock: addToCartClicked,
    source: storeModel.stores.$cart,
    fn: (store, gun) => {
        const condition = store.find((item) => item.id === gun.id)

        if (condition)
            return store.map((item) => {
                if (item.id === gun.id)
                    return { ...item, quantity: ++item.quantity }

                return item
            })

        return [...store, { ...gun, quantity: 1 }]
    },
    target: storeModel.stores.$cart,
})

export const events = {
    addToCartClicked,
}
