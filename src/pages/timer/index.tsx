import clsx from "clsx"
import { useEffect, useRef, useState } from "react"
import { CircularProgress } from "shared/ui/circular-progress"
import { WiggledDotted } from "shared/ui/wiggled-dotted"

const MAX = 10

export const TimerPage = () => {
    const [progress, setProgress] = useState(0)
    const [started, setStarted] = useState(false)
    const [customInterval, setCustomInterval] = useState(1000)

    const [radius, setRadius] = useState(60)
    const [stroke, setStroke] = useState(8)

    const [max, setMax] = useState(MAX)

    const [looped, setLooped] = useState(false)

    useEffect(() => {
        if (started) {
            const intervalId = setInterval(() => {
                setProgress((p) => ++p)
            }, customInterval * 1000)
            return () => {
                clearInterval(intervalId)
            }
        }
    }, [started, setProgress, progress, customInterval])

    useEffect(() => {
        if (progress >= max) {
            if (looped) return setProgress(0)

            return () => {
                setStarted(false)
                setProgress(0)
            }
        }
    }, [progress, max, looped])

    const handleStart = () => {
        if (looped) return setStarted(true)

        setProgress(0)
        setStarted(true)
    }

    const handleStop = () => {
        setStarted(false)
    }

    return (
        <div className="flex flex-col grow">
            <section className="px-10 py-5 flex flex-col">
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="col-span-1 flex flex-col items-center space-y-4">
                        <div className="relative w-fit h-fit">
                            <CircularProgress
                                max={max}
                                stroke={stroke}
                                radius={radius}
                                progress={progress}
                            />
                            <span className="absolute top-0 flex justify-center items-center h-full w-full text-4xl drop-shadow-lg">
                                {started && progress}
                            </span>
                        </div>
                        <div className="flex space-x-2">
                            {!started ? (
                                <button
                                    className="px-4 py-2 text-center first-letter:uppercase bg-green-600 text-white rounded"
                                    onClick={handleStart}
                                >
                                    start
                                </button>
                            ) : (
                                <button
                                    className="px-4 py-2 text-center first-letter:uppercase bg-rose-600 text-white rounded"
                                    onClick={handleStop}
                                >
                                    stop
                                </button>
                            )}
                        </div>

                        <WiggledDotted started={started} />
                    </div>
                    <div className="col-span-1 flex flex-col space-y-2">
                        <label className="flex flex-col space-y-2 rounded p-2 bg-gray-200">
                            <pre>set Looping</pre>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={looped}
                                    onChange={() => setLooped((l) => !l)}
                                />
                                <span>looping</span>
                            </div>
                        </label>

                        <label className="flex flex-col space-y-2 rounded p-2 bg-gray-200">
                            <pre>set Radius</pre>
                            <span>
                                current radius value: <b>{radius}</b>
                            </span>
                            <input
                                type="range"
                                step={1}
                                max={600}
                                value={radius}
                                onChange={(e) =>
                                    setRadius(Number(e.target.value))
                                }
                            />
                        </label>

                        <label className="flex flex-col space-y-2 rounded p-2 bg-gray-200">
                            <pre>set Stroke</pre>
                            <span>
                                current stroke value: <b>{stroke}</b>
                            </span>
                            <input
                                type="range"
                                step={1}
                                max={60}
                                value={stroke}
                                onChange={(e) =>
                                    setStroke(Number(e.target.value))
                                }
                            />
                        </label>

                        <label className="flex flex-col space-y-2 rounded p-2 bg-gray-200">
                            <pre>max value</pre>
                            <span>
                                current max value: <b>{max}</b>
                            </span>
                            <input
                                type="range"
                                step={1}
                                max={100}
                                value={max}
                                onChange={(e) => setMax(Number(e.target.value))}
                            />
                        </label>
                        <label className="flex flex-col space-y-2 bg-gray-200 rounded p-2">
                            <pre>set interval</pre>
                            <span className="first-letter:uppercase">
                                current interval: <b>{customInterval}</b>
                            </span>

                            <input
                                type="range"
                                value={customInterval}
                                step={0.05}
                                min={0.05}
                                max={5}
                                onChange={(e) =>
                                    setCustomInterval(Number(e.target.value))
                                }
                            />
                        </label>
                    </div>
                </div>
            </section>
        </div>
    )
}
