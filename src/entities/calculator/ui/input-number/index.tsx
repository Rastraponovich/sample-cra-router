import { calculatorModel } from "../.."

const actions = {
    summ: "+",
    minus: "-",
    del: "/",
    multiply: "*",
    none: "",
}

export const InputNumber = () => {
    const inputValue = calculatorModel.selectors.useInputNumber()
    const currentAction = calculatorModel.selectors.useCurrentAction()

    return (
        <label className="relative mb-4 h-16 rounded bg-white flex items-center text-2xl text-gray-900">
            <span className="absolute left-4 text-base text-gray-700">
                {actions[currentAction]}
            </span>
            <input
                className="pr-4 pl-6 py-2 w-full text-right"
                value={Number(inputValue).toLocaleString()}
            />
        </label>
    )
}
