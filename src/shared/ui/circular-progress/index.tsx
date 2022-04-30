import clsx from "clsx"
import { memo } from "react"

interface CircularProgressProps {
    radius: number
    stroke: number
    progress: number
    max: number
}
export const CircularProgress = memo(
    ({ progress, radius, stroke, max }: CircularProgressProps) => {
        const normalizedRadius = radius - stroke * 2
        const circumference = normalizedRadius * 2 * Math.PI
        const strokeDashoffset =
            circumference - (progress / max) * circumference

        return (
            <svg
                height={radius * 2}
                width={radius * 2}
                className="relative -rotate-90 fill-transparent"
            >
                <circle
                    className="text-gray-300 drop-shadow-md"
                    strokeWidth={stroke}
                    stroke="currentColor"
                    fill="transparent"
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
                <circle
                    stroke="currentColor"
                    className={clsx(
                        "text-blue-600 drop-shadow-sm ease-linear",
                        progress === 0 ? "duration-150" : "duration-1000 "
                    )}
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeDasharray={circumference + " " + circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
            </svg>
        )
    }
)

CircularProgress.displayName = "CircularProgress"
