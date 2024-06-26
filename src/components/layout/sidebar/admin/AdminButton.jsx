import { MdOutlineAdminPanelSettings } from "react-icons/md"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { useState } from "react"
import styles from "./Admin.module.scss"
import { MenuAdmin } from "../menu.data"
import { AdminItem } from "./AdminItem"

export function AdminButton() {
    const [isPanelVisible, setIsPanelVisible] = useState(false)
    const togglePanelVisibility = () => {
        setIsPanelVisible(!isPanelVisible)
    }

    return (
        <div className={styles.block}>
            <div className={styles.panel} onClick={togglePanelVisibility}>
                <div>
                    <MdOutlineAdminPanelSettings className={styles.icon}/>
                    <span className={styles.name}>Admin panel</span>
                </div>
                <div>
                    {isPanelVisible ? <IoIosArrowDown className={styles.arrow} /> : <IoIosArrowUp className={styles.arrow} />}
                </div>
            </div>
            <div>
                {isPanelVisible && (
                    <div>
                        {MenuAdmin.map(item => (
                            <AdminItem
                                item={item}
                                key={item.link}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}