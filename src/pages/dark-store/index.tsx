import { ShoppingCartIcon } from "@heroicons/react/outline"
import { GunList } from "entities/guns/ui"
import { Cart, storeModel } from "entities/store"
import { ShowCartButton } from "features/show-cart"

export const DarkStore = () => {
    const visibledCart = storeModel.selectors.useVisibled()
    return (
        <main className="flex grow flex-col px-10 py-5">
            <h2>Dark Store Page</h2>

            <section className="grid gap-8 md:grid-cols-3">
                <GunList />
                {visibledCart && <Cart />}

                <ShowCartButton />
            </section>
        </main>
    )
}
