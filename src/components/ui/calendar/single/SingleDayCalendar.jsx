import { useState } from "react"
import { useOutside } from "../../../../hooks/useOutside"
import { IoMdClose } from "react-icons/io"
import { DayPicker } from "react-day-picker"
import dayjs from "dayjs"
import LocalizedFormat from "dayjs/plugin/localizedFormat"
import "react-day-picker/dist/style.css"
import styles from "./SingleCalendar.module.scss"

dayjs.extend(LocalizedFormat)

export function SingleDayCalendar({ onChange, value }) {
    const [selected, setSelected] = useState()
    const {isShow, setIsShow, ref} = useOutside(false)

    const handleDaySelect = date => {
        const stringDate = dayjs(date).format('YYYY-MM-DD')
        setSelected(date)
        if (stringDate) {
            onChange(stringDate)
            setIsShow(false)
        }
        else {
            onChange('')
        }
    }

    return (
        <div ref={ref} className={styles.calendar}>
            <div className={styles.block}>
                <button onClick={() => setIsShow(!isShow)} className={styles.btnSelect}>
                {value ? dayjs(value).format('LL') : 'Select date'}
                </button>
                {value && (
                    <button onClick={() => onChange('')} className={styles.btnDelete}>
                        <IoMdClose size={20} />
                    </button>
                )}
            </div>
            {isShow && (
                <div>
                    <DayPicker
                        fromYear={2023}
                        toYear={2054}
                        initialFocus={isShow}
                        mode='single'
                        defaultMonth={selected}
                        selected={selected}
                        onSelect={handleDaySelect}
                        weekStartsOn={1} 
                    />
                </div>
            )}
        </div>
    )
}