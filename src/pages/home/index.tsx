import {
    CalculatorIcon,
    ClockIcon,
    ShoppingCartIcon,
    WifiIcon,
} from "@heroicons/react/outline"
import { useEffect, useState } from "react"
import { NavLink, useParams, useSearchParams } from "react-router-dom"
import { NavCard } from "shared/ui/nav-card"
import { OceanWaves } from "shared/ui/ocean-waves"

export const Home = () => {
    const [started, setStarted] = useState(false)

    const start = useSearchParams()[0].get("start")

    useEffect(() => {
        if (start) return setStarted(true)
        return setStarted(false)
    }, [start])
    return (
        <div className="flex flex-col px-10 py-5">
            <section className="flex flex-col">
                <h2>Главная страница</h2>

                <p className="my-12 rounded bg-gray-200 px-4 py-10 text-sm font-semibold shadow-md">
                    тут представлены разнообразные решения сделанные мной
                </p>
                <div className="mb-20 grid items-stretch gap-4 md:mb-0 md:grid-cols-3">
                    <NavCard
                        title="calculator"
                        href="/calculator"
                        description="simple calculator with effector-way style"
                        icon={<CalculatorIcon className="h-10 w-10 " />}
                    />
                    <NavCard
                        title="timer"
                        href="/timer"
                        description="simple timer"
                        icon={<ClockIcon className="h-10 w-10 " />}
                    />
                    <NavCard
                        title="Waves"
                        href="/?start=true"
                        description="simple waves animation with css"
                        icon={<WifiIcon className="h-10 w-10 " />}
                    />
                    <NavCard
                        title="Dark Store"
                        href="/dark-store"
                        description="simple store effector-way with feature sliced"
                        icon={<ShoppingCartIcon className="h-10 w-10 " />}
                    />
                </div>
                <div className="my-10 flex flex-col space-y-2">
                    {start && (
                        <NavLink
                            to="/"
                            className="z-50 self-start rounded-xl bg-cyan-600 px-8 py-2 text-gray-900 shadow-xl duration-150 hover:bg-orange-600 hover:text-white"
                        >
                            stop
                        </NavLink>
                    )}

                    <OceanWaves waveCounts={3} started={started} />
                </div>
            </section>
        </div>
    )
}
