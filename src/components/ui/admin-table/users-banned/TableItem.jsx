import { FaRegEdit } from "react-icons/fa"
import { AiOutlineDelete } from "react-icons/ai"
import styles from "./Table.module.scss"
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io"
import { useState } from "react"
import { useFormContext } from "react-hook-form"
import { useUserDelete } from "../../../screens/admin/blocked-users/hooks/useUserDelete"
import Circle from "../../loader/Circle"

const TableItem = ({ tableItem }) => {
    const { reset } = useFormContext()
    const [isReasonVisible, setIsReasonVisible] = useState(false)

    const { userDelete, isDeletePending } = useUserDelete(tableItem._id)

    const toggleReasonVisibility = () => {
        setIsReasonVisible(!isReasonVisible);
    }

	return (
        <div className={styles.element}>
            <div className={styles.item}>
                {tableItem.items.slice(0, 3).map((value) => (
                    <div key={value}>{value}</div>
                ))}
                <div>
                    <button className={styles.btn}
                        onClick={() => {
                            reset({
                                id: tableItem._id,
                                email: tableItem.items[0],
                                dataEnd: tableItem.items[2],
                                reasonBan: tableItem.items[3]
                            })
                        }}>
                        <FaRegEdit size={26}/>
                    </button>
                    <button className={styles.btn} onClick={() => userDelete()}>
                        { isDeletePending ? <Circle /> : <AiOutlineDelete size={26} />}
                    </button>
                    <button onClick={toggleReasonVisibility} className={styles.btn}>
                        {isReasonVisible ? <IoIosArrowDropup size={28} /> : <IoIosArrowDropdown size={28} />}
                    </button>
                </div>
            </div>
            <div className={styles.reason} style={{ maxHeight: isReasonVisible ? '400px' : '0px', padding: isReasonVisible ? '10px 5px' : '0px' }}>
                {isReasonVisible && (
                    <div className={styles.content}>
                        <span>Reason:</span>
                        <div>{tableItem.items[3]}</div>
                    </div>
                )}
            </div>
        </div>
	)
}

export default TableItem