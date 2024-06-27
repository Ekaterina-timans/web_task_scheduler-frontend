import Layout from "../../layout/Layout"
import { Heading } from "../../ui/Heading"
import Dots from "../../ui/loader/Dots"
import { useTasks } from "../tasks/hooks/useTasks"
import { Chart } from "./chart/Chart"
import { Notifications } from "./notifications/Notifications"
import { TaskStatistics } from "./task-statistics/TaskStatistics"
import styles from "./task-statistics/Statistics.module.scss"

const Statistics = () => {
    const { items, isLoading } = useTasks()

    const totalTasks = Array.isArray(items) ? items.length : 0
    const completedTasks = Array.isArray(items) ? items.filter(item => item.status == true).length : 0
    const incompleteTasks = Array.isArray(items) ? items.filter(item => item.status == false).length : 0

    return (
        <Layout>
            <Heading title='Statistics' />
            <Notifications tasksItems={items} isLoading={isLoading} />
            <div style={{display: 'grid', gridTemplateColumns: '2fr 3fr', gap: '48px' }}>
                {isLoading ? <div className={styles.loader}><Dots /></div> 
                    : 
                    <TaskStatistics totalTasks={totalTasks} completedTasks={completedTasks} incompleteTasks={incompleteTasks} />
                }
                {Array.isArray(items) && items.length > 0 && <Chart completedTasks={completedTasks} incompleteTasks={incompleteTasks} />}
            </div>
        </Layout>
    )
}

export default Statistics