import dayjs from "dayjs"
import LocalizedFormat from "dayjs/plugin/localizedFormat"

dayjs.extend(LocalizedFormat)

export function darkenColor(rgb, amount) {
    let [r, g, b] = rgb.match(/\d+/g).map(Number)
    r = Math.floor(r * (1 - amount))
    g = Math.floor(g * (1 - amount))
    b = Math.floor(b * (1 - amount))
    return `rgb(${r},${g},${b})`
}

export function calculateProgress(start, end) {
    const startDate = dayjs(new Date(start)).format('L')
    const endDate = dayjs(new Date(end)).format('L')
    const today = dayjs(new Date()).format('L')
    const totalDuration = dayjs(endDate, 'L').diff(dayjs(startDate, 'L'), 'day')
    let progressPercentage
    const daysPassed = dayjs(today, 'L').diff(dayjs(startDate, 'L'), 'day')
    if (daysPassed == 0) {
        progressPercentage = 0
    } else {
        progressPercentage = Math.min(100, (daysPassed / totalDuration) * 100)
    }
    return progressPercentage
}