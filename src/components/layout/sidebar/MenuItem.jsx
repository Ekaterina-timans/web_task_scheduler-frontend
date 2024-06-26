import { Link } from "react-router-dom"
import styles from "./Sidebar.module.scss"

export function MenuItem({ item }) {
    const Icon = item.icon;
    return (
        <div>
            <Link className={styles.element} to={item.link}>
                <Icon className={styles.icon}/>
                <span className={styles.name}>{item.name}</span>
            </Link>
        </div>
    )
}