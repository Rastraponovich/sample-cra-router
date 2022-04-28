import { Calculator } from "../../entities/calculator"

export const Home = () => {
    return (
        <div className="px-10 py-5 flex flex-col">
            <section>
                <Calculator />
            </section>
        </div>
    )
}
