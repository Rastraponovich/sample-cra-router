import { ClockIcon, ArrowCircleDownIcon, XIcon } from "@heroicons/react/outline"
import { Popover, Transition } from "@headlessui/react"

import clsx from "clsx"
import {
    JSXElementConstructor,
    useState,
    useCallback,
    ChangeEvent,
    useEffect,
    ButtonHTMLAttributes,
    ReactNode,
    memo,
    useRef,
} from "react"
import { InputField } from "shared/ui/input-field"
import { Select } from "shared/ui/select"
import { CircularProgress } from "shared/ui/circular-progress"

export const AnimateIconsConstructorPage = () => {
    const [opened, setOpened] = useState(false)
    const [data, setData] = useState()
    const [isPaused, setIsPaused] = useState(false)
    const [status, setStatus] = useState("")
    const ws = useRef<any>(null)

    useEffect(() => {
        if (data) setOpened(true)

        return () => setOpened(false)
    }, [data])

    // useEffect(() => {
    //     if (!isPaused) {
    //         ws.current = new WebSocket("ws://localhost:9000/") // создаем ws соединение
    //         ws.current.onopen = () => setStatus("Соединение открыто") // callback на ивент открытия соединения
    //         ws.current.onclose = () => setStatus("Соединение закрыто") // callback на ивент закрытия соединения

    //         gettingData()
    //     }

    //     return () => ws.current.close() // кода меняется isPaused - соединение закрывается
    // }, [ws, isPaused])

    // const gettingData = useCallback(() => {
    //     if (!ws.current) return

    //     ws.current.onmessage = (e: any) => {
    //         //подписка на получение данных по вебсокету
    //         if (isPaused) return
    //         setData(e.data)
    //     }
    // }, [isPaused])

    return (
        <div className="relative flex grow flex-col px-10 py-5">
            {status}
            <AnimateButtonsConstructor />

            <button onClick={() => setOpened((prev) => !prev)}>toggle</button>
            <Baloon opened={opened} interval={4}>
                {data}
            </Baloon>
        </div>
    )
}

type TIcon = {
    id: number
    color: string
    element: JSXElementConstructor<JSX.Element>
    iconSize?: TIconSize["value"]
}

type TIconSet = {
    id: number
    firstIcon: TIcon
    secondIcon: TIcon
    duration: number
}

type TIconSize = {
    id: number
    value: string
    name: string
}

const iconSizes: TIconSize[] = [
    { id: 1, name: "xs", value: "h-4 w-4" },
    { id: 2, name: "sm", value: "h-6 w-6" },
    { id: 3, name: "md", value: "h-8 w-8" },
    { id: 4, name: "lg", value: "h-10 w-10" },
    { id: 5, name: "xl", value: "h-12 w-12" },
    { id: 6, name: "2xl", value: "h-16 w-16" },
    { id: 7, name: "3xl", value: "h-20 w-20" },
]

const AnimateButtonsConstructor = () => {
    const [value, setValue] = useState(250)
    const [currentColor, setCurrentColor] = useState("#000000")

    const [icons, setIcons] = useState<TIconSet[]>([])
    const [animate, setAnimate] = useState(false)
    const [iconSize, setIconSize] = useState<TIconSize>(
        iconSizes[iconSizes.length - 1]
    )

    const [firstIcon, setFirstIcon] = useState<TIcon>({
        id: 1,
        color: "#000000",
        element: ClockIcon,
    })
    const [secondIcon, setSecondIcon] = useState<TIcon>({
        id: 2,
        color: "#000000",
        element: ArrowCircleDownIcon,
    })

    const handleSetValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue(Number(e.target.value) * 100)
    }, [])

    const handleSetColor = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setCurrentColor(e.target.value)
    }, [])

    const hanldeSelectIconSize = useCallback(
        (icon: TIconSize) => {
            setIconSize(icon)
        },
        [setIconSize]
    )

    useEffect(() => {
        setFirstIcon((prev) => ({
            ...prev,
            color: currentColor,
            iconSize: iconSize.value,
        }))
        setSecondIcon((prev) => ({
            ...prev,
            color: currentColor,
            iconSize: iconSize.value,
        }))
    }, [currentColor, iconSize])

    const hanldeSubmit = () => {
        const target: TIconSet = {
            duration: value,
            firstIcon,
            secondIcon,
            id: icons.length,
        }

        setIcons((prev) => [...prev, target])
    }

    return (
        <section className="flex grow flex-col space-y-4">
            <h2 className="text-left text-2xl font-bold first-letter:uppercase">
                конструктор анимированных иконок
            </h2>

            <button onClick={() => setAnimate((prev) => !prev)}>animate</button>
            <div className="grid grid-cols-2 gap-4">
                <div className="relative flex items-center justify-center rounded-lg border-2 border-slate-100 shadow-md">
                    <span className="absolute top-4 left-4">
                        анимация: {animate ? "вкл" : "выкл"}
                    </span>
                    <AnimateButton
                        firstIcon={firstIcon}
                        secondIcon={secondIcon}
                        duration={value}
                        animate={animate}
                    />
                </div>

                <form
                    className="flex flex-col space-y-4"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <h3> currentValue: {value}</h3>
                    <InputField
                        caption="Время анимации"
                        min={0}
                        step={0.25}
                        max={10}
                        value={value / 100}
                        type="range"
                        containerClassName="px-4 py-6 bg-slate-100 shadow-lg rounded-lg"
                        className="grow"
                        onChange={handleSetValue}
                    />
                    <InputField
                        caption="цвет"
                        type="color"
                        name="color"
                        id="color"
                        containerClassName="px-4 py-6 bg-slate-100 shadow-lg rounded-lg"
                        className="w-full"
                        value={currentColor}
                        onChange={handleSetColor}
                    />
                    <label className="flex items-center space-x-4 rounded-lg bg-slate-100 px-4 py-6 shadow-lg">
                        <span className="first-letter:uppercase">
                            размер иконки
                        </span>
                        <Select<TIconSet>
                            containerClassName="grow"
                            items={iconSizes}
                            onSelect={hanldeSelectIconSize}
                            selected={iconSize}
                        />
                    </label>
                    <button
                        type="button"
                        onClick={hanldeSubmit}
                        className="self-start rounded border border-white bg-green-600 px-8 py-4 uppercase text-white ring-2 ring-green-600 duration-150 active:opacity-70"
                    >
                        submit
                    </button>
                </form>
            </div>

            {icons.length > 0 && (
                <div className="flex space-x-2 rounded-lg border bg-slate-100 p-4 shadow-lg">
                    {icons.map(({ id, ...icon }) => (
                        <AnimateButton key={id} {...icon} />
                    ))}
                </div>
            )}
        </section>
    )
}

interface AnimateButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    firstIcon: TIcon | any
    secondIcon: TIcon | any
    duration?: number
    animate?: boolean
}

const AnimateButton = memo(
    ({
        firstIcon,
        secondIcon,
        duration = 1000,
        className,
        animate = false,
        ...props
    }: AnimateButtonProps) => {
        const { element: E1 } = firstIcon
        const { element: E2 } = secondIcon

        const ref = useRef<HTMLButtonElement>(null)

        return (
            <button
                ref={ref}
                className={clsx(
                    className,
                    firstIcon.iconSize,

                    "group relative rounded-full"
                )}
                {...props}
            >
                <E1
                    style={{
                        transitionDuration: `${duration / 1000}s`,
                        color: firstIcon.color,
                    }}
                    className={clsx(
                        firstIcon.iconSize,
                        "absolute inset-0 opacity-100 drop-shadow-md group-hover:rotate-180 group-hover:scale-0 group-hover:opacity-0 group-focus:rotate-180 group-focus:scale-0 group-focus:opacity-0"
                    )}
                />
                <E2
                    style={{
                        transitionDuration: `${duration / 1000}s`,
                        color: secondIcon.color,
                    }}
                    className={clsx(
                        secondIcon.iconSize,
                        "absolute inset-0 -rotate-180 scale-0 text-gray-900 opacity-0 drop-shadow-md group-hover:rotate-0 group-hover:scale-100 group-hover:opacity-100 group-focus:rotate-0 group-focus:scale-100 group-focus:opacity-100"
                    )}
                />
            </button>
        )
    }
)

AnimateButton.displayName = "AnimateButton"

interface BaloonProps {
    children?: ReactNode
    opened: boolean
    interval?: number
}

const Baloon = ({ children, opened, interval = 0 }: BaloonProps) => {
    const [open, setOpen] = useState(false)

    const [time, setTime] = useState(interval)

    useEffect(() => {
        if (children) setOpen(true)

        return () => setOpen(false)
    }, [children])

    useEffect(() => {
        setTime(interval)
    }, [open, interval])

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prev) => prev - 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [time, children])

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(false)
        }, interval * 1000)
        return () => clearTimeout(timer)
    }, [open, interval])

    return (
        <Transition
            as={"div"}
            show={open}
            enter="transition  duration-300 ease-out"
            enterFrom="absolute bottom-10 left-10 transform  translate-y-full opacity-0"
            enterTo="absolute bottom-10 left-10 transform translate-y-0 opacity-100"
            leave="transition duration-300 ease-out"
            leaveFrom="absolute bottom-10 left-10 transform translate-y-0"
            leaveTo="absolute bottom-10 left-10 transform  translate-y-full opacity-0"
        >
            <Popover className=" absoulte bottom-10 left-10 flex flex-col rounded-lg bg-green-600  py-2 text-white">
                <div className="flex flex-row-reverse items-center justify-between space-x-4 space-x-reverse px-1">
                    <div className="relative h-fit w-fit self-end">
                        {interval && (
                            <CircularProgress
                                max={interval}
                                stroke={1}
                                radius={10}
                                progress={time}
                            />
                        )}
                        <button className="absolute top-0 flex h-full w-full items-center justify-center text-2xl ">
                            <XIcon className="h-3 w-3 drop-shadow-lg" />
                        </button>
                        {/* <span className="absolute top-0 flex h-full w-full items-center justify-center text-2xl "> */}
                        {/* {time} */}
                        {/* </span> */}
                    </div>
                    <div className="flex px-4">{children}</div>
                </div>
            </Popover>
        </Transition>
    )
}
