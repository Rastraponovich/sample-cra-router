export const Header = ({ children, title }) => {
    return (
        <header className="flex items-center bg-blue-500 text-white space-x-12 px-4 py-2">
            <h2 className="font-bold text-2xl">{title}</h2>
            {children}
        </header>
    )
}
