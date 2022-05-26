module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "ritm-hero": "url('/public/assets/ritmstyle/hero-bg.jpg')",
            },
            backgroundColor: {
                ocean: "#015871",
            },
            fill: {
                ocean: "#015871",
            },
            fontFamily: {
                // Montserrat: "'Montserrat', sans-serif",
                // Rubik: "'Rubik', sans-serif",
                // RobotoMono: "'Roboto Mono', monospace",
                ElMessiri: "'El Messiri', sans-serif",
            },
            keyframes: {
                slideArrow: {
                    "0%,100%": {
                        opacity: 1,
                        transform: "translate3d(0, 0, 0)",
                    },
                    "30%": {
                        transform: "translate3d(50%, 0, 0)",
                    },

                    "50%": {
                        transform: "translate3d(-200%, 0, 0)",
                        opacity: 1,
                    },
                    "50.1%": {
                        opacity: 0,
                    },
                    "75%": {
                        opacity: 0,

                        transform: "translate3d(200%, 0, 0)",
                    },
                    "75.1%": {
                        opacity: 1,
                    },
                },
                wave: {
                    "0%": {
                        marginLeft: 0,
                    },
                    "100%": {
                        marginLeft: "-1600px",
                    },
                },
                swell: {
                    "0%,100%": {
                        transform: "translate3d(0, -25px, 0)",
                    },
                    "50%": {
                        transform: "translate3d(0, 5px, 0)",
                    },
                },
                wiggle: {
                    "0%,100%": {},

                    "50%": {
                        transform: "translateY(-10px)",
                    },
                },
            },
            animation: {
                slideArrow: "slideArrow 700ms ease-in-out",
                wiggle: "wiggle 1s ease-in-out infinite",
                "wiggle-1": "wiggle 1s ease-in-out 150ms infinite",
                "wiggle-2": "wiggle 1s ease-in-out 300ms infinite",
                "wiggle-3": "wiggle 1s ease-in-out 450ms infinite",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
}
