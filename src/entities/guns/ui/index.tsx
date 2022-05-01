import { storeModel } from "entities/store"
import { AddToCartButton } from "features/add-to-cart"
import { DecrementButton } from "features/decrement"
import { IncrementButton } from "features/increment"
import { QuantityInput } from "features/quantity-input/ui"
import { memo } from "react"
import { gunsModel } from ".."
import { TGuns } from "../lib"

interface GunProps {
    gun: TGuns
    existed: boolean
}
const GunCard = memo(({ gun, existed }: GunProps) => {
    const quantity = storeModel.selectors.useGetQuantity(gun.id)
    return (
        <figure className="flex flex-col  space-y-4 rounded bg-white shadow-lg">
            <img
                src={gun.image}
                height={100}
                width={300}
                className="h-[100px]"
            />
            <figcaption className="flex  flex-col space-y-2 p-4">
                <h2 className="text-2xl font-semibold">{gun.model}</h2>
                <span>{gun.price.toLocaleString()}$</span>
                {existed && quantity! > 0 ? (
                    <div className="flex space-x-4">
                        <DecrementButton id={gun.id} />
                        <QuantityInput id={gun.id} quantity={quantity!} />
                        <IncrementButton id={gun.id} />
                    </div>
                ) : (
                    <AddToCartButton gun={gun} />
                )}
            </figcaption>
        </figure>
    )
})

GunCard.displayName = "GunCard"

export const GunList = () => {
    const guns = gunsModel.selectors.useGuns()
    const keys = storeModel.selectors.useCartKeys()

    return (
        <div className="grid gap-4 md:col-span-2 md:grid-cols-2">
            {guns.map((gun) => (
                <GunCard
                    gun={gun}
                    key={gun.id}
                    existed={keys.some((item) => item === gun.id)}
                />
            ))}
        </div>
    )
}
