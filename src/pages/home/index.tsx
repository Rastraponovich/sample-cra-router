import { CalculatorIcon, ClockIcon, WifiIcon } from "@heroicons/react/outline"
import { useTitle } from "shared/lib/dom"
import { NavCard } from "shared/ui/nav-card"

export const Home = () => {
    useTitle("Booking - сервис бронирования")
    return (
        <div className="flex flex-col px-10 py-5">
            <section className="flex flex-col">
                <h2>Главная страница</h2>

                <div className="mb-20 grid items-stretch gap-4 md:mb-0 md:grid-cols-3">
                    <NavCard
                        title="booking"
                        href="/booking"
                        description="резервирование"
                        icon={<CalculatorIcon className="h-10 w-10 " />}
                    />
                    <NavCard
                        title="add new reserve"
                        href="/booking/add"
                        description="создать резерв"
                        icon={<ClockIcon className="h-10 w-10 " />}
                    />
                    <NavCard
                        title="scheduller"
                        href="/booking/scheduller"
                        description="расписание"
                        icon={<WifiIcon className="h-10 w-10 " />}
                    />
                </div>
            </section>
        </div>
    )
}
