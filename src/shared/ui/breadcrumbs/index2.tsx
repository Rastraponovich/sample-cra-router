import { useMemo } from "react"
import { Link, useLocation } from "react-router-dom"

type TBreadCrumbs = {
    path: string
    name: string
    id: number
}

export const BreadCrumbs = () => {
    const location = useLocation()

    const paths = useMemo(
        () =>
            location.pathname
                .split("/")
                .reduce(
                    (
                        acc: TBreadCrumbs[],
                        path: string,
                        currentIndex,
                        array
                    ) => {
                        if (currentIndex === 0)
                            return [
                                {
                                    id: currentIndex,
                                    name: "home",
                                    path: "/",
                                },
                            ]
                        if (currentIndex === 1)
                            return [
                                ...acc,
                                { id: currentIndex, name: path, path },
                            ]
                        if (currentIndex <= array.length - 1)
                            return [
                                ...acc,
                                {
                                    id: currentIndex,
                                    name: path,
                                    path: `/${array[currentIndex - 1]}/${path}`,
                                },
                            ]
                        return []
                    },
                    []
                ),

        [location]
    )

    return (
        <nav className="flex items-center space-x-2 px-10 py-2">
            {paths.map(({ path, id, name }) => (
                <Link
                    to={path}
                    key={id}
                    className="first-letter:uppercase hover:underline hover:underline-offset-1 not-last-child:after:mx-2 not-last-child:after:content-['>']"
                >
                    {name}
                </Link>
            ))}
        </nav>
    )
}
