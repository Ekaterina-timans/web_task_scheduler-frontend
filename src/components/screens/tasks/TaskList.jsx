import { useEffect, useState } from "react"
import { TaskBlock } from "./TaskBlock"
import { useTasks } from "./hooks/useTasks"
import { Search } from "../../ui/search/Search"
import RangeDaysCalendar from "../../ui/calendar/range/RangeDaysCalendar"
import Dots from "../../ui/loader/Dots"
import styles from "./Task.module.scss"
import { useSearchTask } from "./hooks/useSearchTask"

export const TaskList = () => {
    const { items, isLoading } = useTasks()
    const [filteredTasks, setFilteredTasks] = useState([])
    const [selectedPeriod, setSelectedPeriod] = useState(null)
    const { searchItems, setSearchTerm, debouncedSearch } = useSearchTask()

    useEffect(() => {
        if (!isLoading && items) {
            let filteredTasks  = items

            if (selectedPeriod) {
                filteredTasks  = filteredTasks.filter(item => {
                    const taskDate = new Date(item.dataStart)
                    return taskDate >= selectedPeriod.from && taskDate <= selectedPeriod.to
                })
            }

            if (debouncedSearch) {
                filteredTasks = searchItems || []
            }

            setFilteredTasks(filteredTasks)
        }
    }, [isLoading, items, searchItems, debouncedSearch, selectedPeriod, setFilteredTasks])

    return (
        <div>
            <Search handleSearch={setSearchTerm} />
            <RangeDaysCalendar setSelectedPeriod={setSelectedPeriod} />
            <div>
                { isLoading ? (
                    <div className={styles.loader}><Dots /></div>
                ) : 
                    filteredTasks.length ? (
                        filteredTasks.map(item => (
                            <TaskBlock
                                key={item.id}
                                item={item}
                            />
                    )))
                : (
                    <div>There are no tasks for the week</div>
                )}
            </div>
        </div>
    )
}
