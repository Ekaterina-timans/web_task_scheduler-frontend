import { useAuth } from "../../../hooks/useAuth"
import { AdminButton } from "./admin/AdminButton"
import { LogoutButton } from "./LogoutButton"
import { MenuItem } from "./MenuItem"
import styles from "./Sidebar.module.scss"
import { MENU } from "./menu.data"

const Sidebar = () => {
    const { userRole } = useAuth()
    
    return (
        <aside className={styles.sidebar}>
            <div>
                <span className={styles.title}>
                    Web Task Sheduler
                </span>
                <div className={styles.line}/>
                <div className={styles.items}>
                    {MENU.map(item => (
                        <MenuItem 
                            item={item}
                            key={item.link}
                        />
                    ))}
                    { userRole === 'admin' 
                        ? ( <AdminButton />) 
                        : ''
                    }
                    <LogoutButton />
                </div>
            </div>
        </aside>
    )
}

export default Sidebar