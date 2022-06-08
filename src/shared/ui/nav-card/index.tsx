import { memo, ReactNode } from "react"
import { NavLink } from "react-router-dom"

interface NavCardProps {
    icon: ReactNode
    title: string
    description: string
    href: string
}

export const NavCard = memo(({ title, icon, href, description }: NavCardProps) => {
    return (
        <NavLink to={href}>
            <article className="rounded bg-gray-200 p-4 shadow-sm duration-150 hover:bg-amber-600 hover:text-white hover:shadow-xl ">
                <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    {icon}
                </div>
                <p className="text-sm">{description}</p>
            </article>
        </NavLink>
    )
})

NavCard.displayName = "NavCard"
