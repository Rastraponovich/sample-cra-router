import { CalculatorIcon, ClockIcon, WifiIcon } from "@heroicons/react/outline"
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
        <div className="px-10 py-5 flex flex-col">
            <section className="flex flex-col">
                <h2>Главная страница</h2>

                <p className="bg-gray-200 shadow-md rounded px-4 py-10 font-semibold text-sm my-12">
                    тут представлены разнообразные решения сделанные мной
                </p>
                <div className="grid md:grid-cols-3 gap-4 items-stretch md:mb-0 mb-20">
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
                </div>
                <div className="flex flex-col space-y-2 my-10">
                    {start && (
                        <NavLink
                            to="/"
                            className="z-50 rounded-xl bg-cyan-600 text-gray-900 duration-150 shadow-xl px-8 py-2 self-start hover:bg-orange-600 hover:text-white"
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
