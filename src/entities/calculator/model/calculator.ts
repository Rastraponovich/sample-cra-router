import { createEvent, createStore, sample } from "effector"
import { useStore } from "effector-react"
import { reset } from "patronum"

type TCalcAction = "summ" | "minus" | "none" | "multiply" | "del"

const $total = createStore<number | null>(null)
const $currentAction = createStore<TCalcAction>("none")

const setInputNumber = createEvent<number | string>()

const clearLastValue = createEvent()
const clearAllButtonClicked = createEvent()

const $inputNumber = createStore<string>("").on(clearLastValue, (state, _) =>
    state.substring(0, state.length - 1)
)

sample({
    clock: setInputNumber,
    source: [$total, $inputNumber, $currentAction],

    fn: ([total, current, action], val) => {
        if (total !== null) return String(val)

        return current + String(val)
    },
    target: $inputNumber,
})

// sample({
//     clock: setInputNumber,
//     source: $total,
//     filter: (total, num) => total !== null,
//     fn: () => null,
//     target: $total,
// })

const $accValues = createStore<number>(0)
$inputNumber.reset([$accValues])

const summButtonClicked = createEvent()

sample({
    clock: summButtonClicked,
    source: [$accValues, $inputNumber],
    //@ts-ignore
    fn: ([acc, val]: [number, string]) => (acc + Number(val)) as number,
    target: $accValues,
})
$currentAction.on(summButtonClicked, () => "summ")

const minusButtonClicked = createEvent()

sample({
    clock: minusButtonClicked,
    source: [$accValues, $inputNumber],
    //@ts-ignore
    fn: ([acc, val]: [number, string]) => {
        if (acc === 0) return Number(val) as number
        return (acc - Number(val)) as number
    },
    target: $accValues,
})
$currentAction.on(minusButtonClicked, () => "minus")

const multiplyButtonClicked = createEvent()

sample({
    clock: multiplyButtonClicked,
    source: [$accValues, $inputNumber],
    //@ts-ignore
    fn: ([acc, val]: [number, string]) => {
        if (acc === 0) return Number(val) as number
        return (acc * Number(val)) as number
    },
    target: $accValues,
})
$currentAction.on(multiplyButtonClicked, () => "multiply")

const delButtonClicked = createEvent()

sample({
    clock: delButtonClicked,
    source: [$accValues, $inputNumber],
    //@ts-ignore
    fn: ([acc, val]: [number, string]) => {
        if (acc === 0) return Number(val) as number
        return (acc / Number(val)) as number
    },
    target: $accValues,
})
$currentAction.on(delButtonClicked, () => "del")

const resultButtonClicked = createEvent()

const resultButtonClickedSum = sample({
    clock: resultButtonClicked,
    source: [$accValues, $currentAction, $inputNumber],

    filter: ([acc, action, num], _) => action === "summ",
    //@ts-ignore
    fn: ([acc, action, num]: [number, TCalcAction, string], _) =>
        (acc + Number(num)) as number,
    target: $total,
})

const resultButtonClickedMinus = sample({
    clock: resultButtonClicked,
    source: [$accValues, $currentAction, $inputNumber],

    filter: ([acc, action, num], _) => action === "minus",
    //@ts-ignore
    fn: ([acc, action, num]: [number, TCalcAction, string], _) =>
        (acc - Number(num)) as number,
    target: $total,
})

const resultButtonClickedMultiply = sample({
    clock: resultButtonClicked,
    source: [$accValues, $currentAction, $inputNumber],

    filter: ([acc, action, num], _) => action === "multiply",
    //@ts-ignore
    fn: ([acc, action, num]: [number, TCalcAction, string], _) =>
        (acc * Number(num)) as number,
    target: $total,
})

const resultButtonClickedDel = sample({
    clock: resultButtonClicked,
    source: [$accValues, $currentAction, $inputNumber],

    filter: ([acc, action, num], _) => action === "del",
    //@ts-ignore
    fn: ([acc, action, num]: [number, TCalcAction, string], _) =>
        (acc / Number(num)) as number,
    target: $total,
})

sample({
    clock: $total,
    filter: (total) => total !== null,
    fn: (total) => String(total),
    target: $inputNumber,
})

reset({
    clock: [
        resultButtonClickedSum,
        resultButtonClickedMinus,
        resultButtonClickedMultiply,
        resultButtonClickedDel,
    ],
    target: [$accValues, $currentAction],
})

reset({
    clock: clearAllButtonClicked,
    target: [$accValues, $currentAction, $inputNumber, $total],
})

export const events = {
    setInputNumber,
    clearAllButtonClicked,
    clearLastValue,
    summButtonClicked,
    resultButtonClicked,
    minusButtonClicked,
    multiplyButtonClicked,
    delButtonClicked,
}

const useInputNumber = () => useStore($inputNumber)
const useAccValues = () => useStore($accValues)
const useTotal = () => useStore($total)
const useCurrentAction = () => useStore($currentAction)
export const selectors = {
    useInputNumber,
    useAccValues,
    useTotal,
    useCurrentAction,
}
