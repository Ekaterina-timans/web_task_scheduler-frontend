import { useProfile } from "../../../hooks/useProfile"
import Dots from "../../ui/loader/Dots"
import styles from "./Profile.module.scss"

export function Profile() {
    const { user, isLoading } = useProfile()

    return (
        <div className={styles.header}>
            {isLoading ? (
                <Dots />
            ) : (
                <div className={styles.container}>
                    <div className={styles.profile}>
                        <p style={{ fontWeight: '700', marginBottom: '-4px' }}>{user.name}</p>
                        <p style={{ fontSize: '17.12px', opacity: '0.4' }}>{user.email}</p>
                    </div>
                    <div className={styles.icon}>
                        {user.email.charAt(0) || 'A'}
                    </div>
                </div>
            )}
        </div>
    )
}