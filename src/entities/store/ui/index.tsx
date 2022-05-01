import { memo } from "react"
import { storeModel } from ".."
import type { ICartGun } from "../lib"

export const Cart = () => {
    const cart = storeModel.selectors.useCart()
    const total = storeModel.selectors.useSummaryCart()
    return (
        <div className="flex flex-col space-y-4 rounded border border-gray-50  shadow-lg">
            <h2 className="mt-2 text-center text-2xl font-bold">корзина</h2>
            {total > 0 ? (
                <ul className="flex flex-col">
                    {cart
                        .filter((item) => item.quantity > 0)
                        .map((item, idx) => (
                            <CartItem
                                cartItem={item}
                                key={item.id}
                                idx={++idx}
                            />
                        ))}
                </ul>
            ) : (
                <div className="flex items-center py-4 px-2 text-gray-900 ">
                    <span className=" w-full bg-gray-50 px-2 py-1 text-center font-bold">
                        корзина пуста
                    </span>
                </div>
            )}
            {total > 0 && (
                <>
                    <h3 className="border-t-2 border-gray-200 px-2 py-4 text-right first-letter:uppercase ">
                        итого: <b>{total.toLocaleString()}$</b>
                    </h3>
                    <button className="self-end rounded bg-green-600 px-12 py-4 text-base font-semibold uppercase text-white shadow-lg duration-150 hover:shadow-xl">
                        оплата
                    </button>
                </>
            )}
        </div>
    )
}

interface CartItemProps {
    cartItem: ICartGun
    idx: number
}
const CartItem = memo(({ idx, cartItem }: CartItemProps) => {
    return (
        <li className="flex space-x-2 bg-gray-200 px-4 py-2 text-gray-900 md:text-sm">
            <span className="after:content-['.']">{idx}</span>
            <span className="grow font-bold">{cartItem.model}</span>
            <span>{cartItem.price.toLocaleString()}$</span>
            <span className="before:text-sm before:content-['x']">
                {cartItem.quantity}
            </span>
            <span className="before:mr-1 before:text-sm before:content-['=']">
                {(cartItem.quantity * cartItem.price).toLocaleString()}$
            </span>
        </li>
    )
})

CartItem.displayName = "CartItem"
