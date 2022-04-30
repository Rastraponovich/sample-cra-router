import { CalculatorIcon } from "@heroicons/react/outline"
import { memo, ReactNode } from "react"
import { NavLink } from "react-router-dom"

interface NavCardProps {
    icon: ReactNode
    title: string
    description: string
    href: string
}

export const NavCard = memo(
    ({ title, icon, href, description }: NavCardProps) => {
        return (
            <NavLink to={href}>
                <article className="p-4 bg-gray-200 hover:bg-amber-600 duration-150 hover:text-white rounded shadow-sm hover:shadow-xl ">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold">{title}</h3>
                        {icon}
                    </div>
                    <p className="text-sm">{description}</p>
                </article>
            </NavLink>
        )
    }
)

NavCard.displayName = "NavCard"
