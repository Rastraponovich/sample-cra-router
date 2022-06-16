import { memo } from "react"
import { SpinerLoader } from "../spinner-loading"

interface SuspenseLoaderProps {}

export const SuspenseLoader = memo(({}: SuspenseLoaderProps) => {
    return (
        <div className="fixed inset-0 z-50 flex grow items-center justify-center bg-white/30">
            <SpinerLoader className="h-20 w-20" />
        </div>
    )
})

SuspenseLoader.displayName = "SuspenseLoader"
