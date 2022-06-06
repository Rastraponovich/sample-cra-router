import { Link } from "react-router-dom"

export const NotFoundPage = () => {
    return (
        <section className="flex grow flex-col items-center justify-center space-y-4 text-gray-900">
            <h2 className="text-center text-3xl font-bold first-letter:uppercase">
                страница не найдена
            </h2>
            <Link
                to="/"
                replace
                className="rounded-lg bg-gray-200 px-10 py-5 shadow-lg duration-150 first-letter:uppercase hover:bg-green-600 hover:text-white"
            >
                домашняя страница
            </Link>
        </section>
    )
}
