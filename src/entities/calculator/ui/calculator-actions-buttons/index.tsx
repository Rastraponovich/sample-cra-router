import { useEvent } from "effector-react"
import { calculatorModel } from "../.."
import { CalculatorButton } from "../calculator-button"

export const CalculatorActionsButtons = () => {
    return (
        <div className="grid grid-cols-2 w-full gap-2 content-start">
            <ClearAllValuesButton />
            <ClearLastNumberButton />
            <MinusButton />
            <SummButton />
            <MultiplyButton />
            <DelButton />
            <ResultButton />
        </div>
    )
}

const ClearLastNumberButton = () => {
    const handleClick = useEvent(calculatorModel.events.clearLastValue)
    return <CalculatorButton title="<" onClick={handleClick} />
}

const ClearAllValuesButton = () => {
    const handleClick = useEvent(calculatorModel.events.clearAllButtonClicked)
    return (
        <CalculatorButton
            title="C"
            variant="rose"
            className="col-span-2 bg-rose-400 text-white hover:bg-rose-600"
            onClick={handleClick}
        />
    )
}

const SummButton = () => {
    const handleClick = useEvent(calculatorModel.events.summButtonClicked)
    return (
        <CalculatorButton
            title="+"
            onClick={handleClick}
            className="row-span-2 h-full"
        />
    )
}

const MinusButton = () => {
    const handleClick = useEvent(calculatorModel.events.minusButtonClicked)
    return <CalculatorButton title="-" onClick={handleClick} />
}

const DelButton = () => {
    const handleClick = useEvent(calculatorModel.events.delButtonClicked)
    return <CalculatorButton title="/" onClick={handleClick} />
}

const MultiplyButton = () => {
    const handleClick = useEvent(calculatorModel.events.multiplyButtonClicked)
    return <CalculatorButton title="*" onClick={handleClick} />
}

const ResultButton = () => {
    const handleClick = useEvent(calculatorModel.events.resultButtonClicked)
    return (
        <CalculatorButton
            title="="
            onClick={handleClick}
            className="col-span-2 bg-green-400 hover:bg-green-600 "
        />
    )
}
