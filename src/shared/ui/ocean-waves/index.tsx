import { memo } from "react"

interface OceanWavesProps {
    waveCounts: number
    started: boolean
}

export const OceanWaves = memo(({ waveCounts, started }: OceanWavesProps) => {
    return (
        <div className="ocean">
            {started &&
                [...Array(waveCounts!)].map((wave) => (
                    <div key={wave} className="wave"></div>
                ))}
        </div>
    )
})

OceanWaves.displayName = "OceanWaves"
