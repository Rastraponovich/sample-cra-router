module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            keyframes: {
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
                wiggle: "wiggle 1s ease-in-out infinite",
                "wiggle-1": "wiggle 1s ease-in-out 150ms infinite",
                "wiggle-2": "wiggle 1s ease-in-out 300ms infinite",
                "wiggle-3": "wiggle 1s ease-in-out 450ms infinite",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
}
