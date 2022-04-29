import { useEvent } from "effector-react"
import { calculatorModel } from "../.."
import { calcNumbers } from "../../lib"
import { CalculatorButton } from "../calculator-button"

export const CalculatorNumbersButtons = () => {
    const handleClick = useEvent(calculatorModel.events.setInputNumber)

    return (
        <div className="grid grid-cols-3 gap-2 max-w-[150px] min-w-[150px] justify-items-stretch rounded">
            {calcNumbers.map((number) => (
                <CalculatorButton
                    title={number.tilte}
                    key={number.id}
                    onClick={() => handleClick(number.value)}
                    full={number.full}
                />
            ))}
            <CalculatorButton title={"."} onClick={() => handleClick(".")} />
        </div>
    )
}
