import { CalculatorActionsButtons } from "./calculator-actions-buttons"
import { CalculatorNumbersButtons } from "./calculator-numbers-buttons"
import { InputNumber } from "./input-number"

export const Calculator = () => {
    return (
        <div className="bg-gray-200 p-6 rounded flex max-w-[300px] flex-col border-2 border-gray-500/50">
            <InputNumber />
            <div className="flex space-x-2 relative">
                <CalculatorNumbersButtons />
                <CalculatorActionsButtons />
            </div>
        </div>
    )
}
