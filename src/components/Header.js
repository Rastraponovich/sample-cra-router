export const Header = ({ children, title }) => {
    return (
        <header
            style={{
                display: "flex",
                alignItems: "center",
                padding: "1rem 2rem",
                backgroundColor: "aqua",
            }}
        >
            <h2 style={{ marginRight: "3rem" }}>{title}</h2>
            {children}
        </header>
    )
}
