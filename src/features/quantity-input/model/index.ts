import { createEvent, createStore, sample } from "effector"
import { storeModel } from "entities/store"
import { ChangeEvent } from "react"

export const setQuantity = createEvent<ChangeEvent<HTMLInputElement>>()

sample({
    clock: setQuantity,
    source: storeModel.stores.$cart,

    filter: (cart, event) => Number.isInteger(Number(event.target.value)),

    fn: (cart, event) =>
        cart.map((item) => {
            if (item.id === Number(event.target.id))
                return { ...item, quantity: Number(event.target.value) }
            return item
        }),
    target: storeModel.stores.$cart,
})
