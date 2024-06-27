import styles from "./Statistics.module.scss"

export function TaskStatistics({ totalTasks, completedTasks, incompleteTasks}) {

    return (
        <div>
            <div className={styles.card}>
                <div className={styles.label}>Total tasks</div>
                <div className={styles.count}>{totalTasks}</div>
            </div>
            <div className={styles.card}>
                <div className={styles.label}>Completed task</div>
                <div className={styles.count}>{completedTasks}</div>
            </div>
            <div className={styles.card}>
                <div className={styles.label}>Unfulfilled task</div>
                <div className={styles.count}>{incompleteTasks}</div>
            </div>
        </div>
        
    )
}