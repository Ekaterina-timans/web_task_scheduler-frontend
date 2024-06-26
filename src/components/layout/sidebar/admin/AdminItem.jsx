import { Link } from "react-router-dom"
import styles from "./Admin.module.scss"

export function AdminItem({ item }) {
    return (
        <div className={styles.items}>
            <Link className={styles.element} to={item.link}>
                <span className={styles.title}>{item.name}</span>
            </Link>
        </div>
    )
}