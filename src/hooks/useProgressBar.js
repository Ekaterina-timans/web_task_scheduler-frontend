import { useMemo } from "react"
import { calculateProgress, darkenColor } from "../utils/progressBar"

export const useProgressBar = (item, colorsPriority) => {
    return useMemo(() => {
        let backgroundColor = colorsPriority.variants.backgroundColor[item.priority]
        let progressColor = backgroundColor
        let progress = 0
        if (item.status == true) {
        backgroundColor = colorsPriority.completedVariants.backgroundColor
        } else if (item.dataEnd) {
        progress = calculateProgress(item.dataStart, item.dataEnd)
        progressColor = darkenColor(backgroundColor, 0.2)
        }
        return { backgroundColor, progressColor, progress }
    }, [item, colorsPriority])
}