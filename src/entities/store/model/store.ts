import { createStore } from "effector"
import { useStore } from "effector-react"
import type { ICartGun } from "../lib"

const $visibledCart = createStore<boolean>(false)

const $cart = createStore<ICartGun[]>([])

const $cartKeys = $cart.map((cart) => cart.map((item) => item.id))

const $summaryCart = $cart.map((cart) =>
    cart.reduce((acc, val) => acc + val.price * val.quantity, 0)
)

$visibledCart.on($summaryCart, (_, val) => val > 0 && true)

export const stores = { $cart, $visibledCart }

const useCart = () => useStore($cart)
const useSummaryCart = () => useStore($summaryCart)
const useCartKeys = () => useStore($cartKeys)
const useVisibled = () => useStore($visibledCart)
const useGetQuantity = (id: number) =>
    useStore($cart).find((item) => item.id === id)?.quantity

export const selectors = {
    useCart,
    useSummaryCart,
    useCartKeys,
    useGetQuantity,
    useVisibled,
}
