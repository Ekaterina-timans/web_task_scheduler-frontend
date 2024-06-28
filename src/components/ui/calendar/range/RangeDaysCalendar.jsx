import { useState } from "react"
import { DayPicker } from "react-day-picker"
import "react-day-picker/dist/style.css"
import { useOutside } from "../../../../hooks/useOutside"
import { IoMdClose } from "react-icons/io"
import { LuCalendarClock } from "react-icons/lu"
import styles from "./RangeCalendar.module.scss"
import dayjs from "dayjs"
import LocalizedFormat from "dayjs/plugin/localizedFormat"

dayjs.extend(LocalizedFormat)

const RangeDaysCalendar = ({ setSelectedPeriod }) => {
    const [selectedRange, setSelectedRange] = useState({ from: null, to: null })
    const {isShow, setIsShow, ref} = useOutside(false)

    const handleDayClick = (day) => {
        const { from, to } = selectedRange
        if (!from || (from && to)) {
            setSelectedPeriod(null)
            setSelectedRange({ from: day, to: null })
        } else if (!to || (from && to)) {
            if (day < from) {
                setSelectedPeriod(null);
                setSelectedRange({ from: day, to: null })
            } else {
                setSelectedPeriod({ from, to: day })
                setSelectedRange({ from, to: day })
            }
        } else {
            setSelectedRange({ from: null, to: null })
            setSelectedPeriod(null)
        }
    }

    return (
        <div className={styles.block}>
            <LuCalendarClock size={25} style={{margin: '0 15px 0 5px'}}/>
            <div ref={ref}>
                <div>
                    <button onClick={() => setIsShow(!isShow)} className={styles.btn}>
                    {selectedRange.from && selectedRange.to 
                        ? `${dayjs(selectedRange.from).format('DD/MM/YYYY')} - ${dayjs(selectedRange.to).format('DD/MM/YYYY')}`
                        : 'Select date range'}
                    </button>
                    {(selectedRange.from || selectedRange.to) && (
                        <button className={styles.btnDelete}
                            onClick={() => {
                                setSelectedRange({ from: null, to: null });
                                setSelectedPeriod(null);
                            }}
                        >
                            <IoMdClose size={20} />
                        </button>
                    )}
                </div>
                {isShow && (
                <div className={styles.calendar}>
                    <DayPicker
                        fromYear={2023}
                        toYear={2054}
                        mode='range'
                        numberOfMonths={1}
                        selected={[selectedRange.from, { from: selectedRange.from, to: selectedRange.to }]}
                        onDayClick={handleDayClick}
                    />
                </div>
            )}
            </div>
        </div>
    )
}

export default RangeDaysCalendar