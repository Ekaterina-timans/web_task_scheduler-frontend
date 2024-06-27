import { isOverdue } from "../../../../utils/checkingTasks"
import styles from "./Notifications.module.scss"
import { BiError } from "react-icons/bi"
import cn from "clsx"
import Dots from "../../../ui/loader/Dots"

const WarningNotification = ({tasksItems, isLoading}) => {
    const overdueTasks = tasksItems.filter(tasksItem => tasksItem.status == 0 && (isOverdue(tasksItem.dataEnd) == true))

    return (
        <div>
            <div className={cn(styles.heading, styles.warning)}>
                <div className={styles.content}>
                    <div className={cn(styles.icon, styles.iconWarning)}>
                        <BiError />
                    </div>
                    <p>Overdue tasks:</p>
                </div>
            </div>
            { isLoading ? (
                <div className={styles.loader}><Dots /></div>
            ) : overdueTasks.length > 0 ? (
                overdueTasks.map((task) => (
                    <div key={task.id} className={cn(styles.element, styles.elementWarning)}>
                        <p>Задача "{task.title}" просрочена!</p>
                    </div>
				))
			) : (
				<div className={styles.text}>There are no overdue tasks</div>
            )}
        </div>
    )
}

export default WarningNotification