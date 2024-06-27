import dayjs from "dayjs"
import LocalizedFormat from "dayjs/plugin/localizedFormat"

dayjs.extend(LocalizedFormat)

export const isOverdue = (dataEnd) => {
    const today = dayjs(new Date()).format('L')
    const endDate = dayjs(new Date(dataEnd)).format('L')
    const totalDuration = dayjs(endDate, 'L').diff(dayjs(today, 'L'), 'day')
    if (totalDuration < 0) {
        return true
    }
    else {
        return false
    }
}

export const oneDayLeft = (dataEnd) => {
    const today = dayjs(new Date()).format('L')
    const endDate = dayjs(new Date(dataEnd)).format('L')
    const totalDuration = dayjs(endDate, 'L').diff(dayjs(today, 'L'), 'day')
    if ((totalDuration == 1) || (totalDuration == 0)) {
        return true
    }
    else {
        return false
    }
}