import { useOutside } from "../../../hooks/useOutside"
import { IoMdClose } from "react-icons/io"
import styles from "./Selected.module.scss"
import { colorsPriority } from "../../screens/tasks/colors.data"

export function Selected({ data, onChange, value }) {
    const {isShow, setIsShow, ref} = useOutside(false)
    const getValue = () => data.find(item => item.value === value)?.value

    return (
        <div ref={ref} className={styles.list}>
            <div className={styles.block} style={value ? { backgroundColor: colorsPriority.variants.backgroundColor[value] } : {}}>
                <button 
                    onClick={e => {
                        e.preventDefault()
                        setIsShow(!isShow)
                    }}
                    className={styles.btnSelect}
                >
                    {getValue() ? getValue() : 'Select priority'}
                </button>
                {value && (
                    <button
                        onClick={e => {
                            e.preventDefault()
                            onChange('')
                        }}
                        className={styles.btnDelete}
                    >
                        <IoMdClose size={20} />
                    </button>
                )}
            </div>
            {isShow && (
                <div>
                    {data.map(item => (
                        <button key={item.value} onClick={e => {
                            e.preventDefault()
                            onChange(item.value)  
                            setIsShow(false)
                        }
                    }
                        className={styles.element}
                        style={{ backgroundColor: colorsPriority.variants.backgroundColor[item.value] }}     
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}