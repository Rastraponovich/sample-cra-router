import { Calculator } from "entities/calculator"

export const CalculatorPage = () => {
    return (
        <div className="px-10 py-5 flex flex-col">
            <p
                className="prose-xl mb-4 bg-slate-200 p-10 rounded first-line:uppercase first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-1 first-letter:float-left "
            >
                simple calculator with effector-way
            </p>

            <section className="flex justify-center items-center">
                <Calculator />
            </section>
        </div>
    )
}
