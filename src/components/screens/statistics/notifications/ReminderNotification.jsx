import { oneDayLeft } from "../../../../utils/checkingTasks"
import styles from "./Notifications.module.scss"
import { IoMdInformationCircleOutline } from "react-icons/io"
import cn from "clsx"
import Dots from "../../../ui/loader/Dots"

const ReminderNotification = ({tasksItems, isLoading}) => {
    const tasks = tasksItems.filter(tasksItem => tasksItem.status == 0 && (oneDayLeft(tasksItem.dataEnd) == true))

    return (
        <div>
            <div className={cn(styles.heading, styles.info)}>
                <div className={styles.content}>
                    <div className={cn(styles.icon, styles.iconInfo)}>
                        <IoMdInformationCircleOutline />
                    </div>
                    <p>Tasks that will expire soon:</p>
                </div>
            </div>
            { isLoading ? (
                <div className={cn(styles.loader, styles.loaderInfo)}><Dots /></div>
            ) : tasks.length > 0 ? (
                tasks.map((task) => (
                    <div key={task.id} className={cn(styles.element, styles.elementInfo)}>
                        <p>Срок окончания выполнения задачи "{task.title}" {task.dataEnd}</p>
                    </div>
				))
			) : (
				<div className={styles.text} style={{width: '65%'}}>There are no tasks yet</div>
            )}
        </div>
    )
}

export default ReminderNotification