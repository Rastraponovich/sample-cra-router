import clsx from "clsx"
import { useCallback, useEffect, useState } from "react"

const calcNumbers = [
    { id: 1, tilte: "1", value: 1 },
    { id: 2, tilte: "2", value: 2 },
    { id: 3, tilte: "3", value: 3 },
    { id: 4, tilte: "4", value: 4 },
    { id: 5, tilte: "5", value: 5 },
    { id: 6, tilte: "6", value: 6 },
    { id: 7, tilte: "7", value: 7 },
    { id: 8, tilte: "8", value: 8 },
    { id: 9, tilte: "9", value: 9 },
    { id: 0, tilte: "0", value: 0, full: true },
    { id: 11, tilte: ".", value: "." },
]

export const Calculator = () => {
    const [value, setValue] = useState("")

    const [finishedCalc, setFinishedCalc] = useState(false)

    const [values, setValues] = useState([])

    const [pretotal, setPretotal] = useState(0)

    const handleActionClick = useCallback((action) => {
        console.log(action)
    }, [])

    const handleClick = (val) => {
        if (finishedCalc) {
            setValue("")
            setFinishedCalc(false)
        }
        setValue(value + String(val))
    }

    const handleErase = () => {
        const result = value.substring(0, value.length - 1)
        setValue(result)
    }

    const handleSum = () => {
        setValues([...values, Number(value)])
        setValue("")
    }

    const handleTotal = () => {
        setValue(pretotal)
        setValues([])
        setPretotal(0)
        setFinishedCalc(true)
    }

    useEffect(() => {
        setPretotal(values.reduce((acc, val) => acc + val, 0))
        return () => {
            setPretotal(0)
        }
    }, [values])

    return (
        <div className="flex flex-col ">
            <h2>calc</h2>
            <div className="bg-gray-200 p-2 rounded flex max-w-[300px] flex-col">
                <input
                    className="h-10 px-4 py-2 rounded bg-white mb-4"
                    value={value}
                />

                <div className="flex space-x-2 divide-x divide divide-gray-300">
                    <div className="grid grid-cols-3 gap-2 max-w-[150px] min-w-[150px] justify-items-stretch rounded">
                        {calcNumbers.map((number) => (
                            <CalculatorButton
                                title={number.tilte}
                                value={number.value}
                                key={number.id}
                                onClick={() => handleClick(number.value)}
                                full={number.full}
                            />
                        ))}
                    </div>
                    <div className="grid grid-cols-2 w-full gap-2 content-start">
                        <CalculatorButton title={"<"} onClick={handleErase} />

                        <CalculatorButton
                            title={"-"}
                            onClick={handleActionClick}
                        />
                        <CalculatorButton
                            title={"*"}
                            onClick={handleActionClick}
                        />
                        <CalculatorButton
                            title={"/"}
                            onClick={handleActionClick}
                        />
                        <CalculatorButton
                            title={"+"}
                            className="row-span-2 h-full"
                            onClick={handleSum}
                        />
                        <CalculatorButton
                            title={"C"}
                            className="bg-rose-600 text-white"
                            onClick={handleActionClick}
                        />
                        <CalculatorButton
                            title={"%"}
                            onClick={handleActionClick}
                        />
                        <CalculatorButton
                            title={"="}
                            className="col-span-2"
                            onClick={handleTotal}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

const CalculatorButton = ({ title, onClick, full, className }) => {
    return (
        <button
            onClick={onClick}
            className={clsx(
                full && "col-span-2 w-full",
                "h-10 bg-gray-50 text-gray-900 rounded p-2 text-center align-middle shadow-sm active:shadow-inner hover:bg-blue-600 hover:text-white duration-150",
                className
            )}
        >
            {title}
        </button>
    )
}
