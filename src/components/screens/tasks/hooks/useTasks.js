import { useQuery } from "@tanstack/react-query"
import { TaskService } from "../../../../services/task.service"
import { useEffect, useState } from "react"

export const useTasks = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['tasks'],
        queryFn: () => TaskService.getTasks()
    })

    const [items, setItems] = useState([])

    useEffect(() => {
        if (Array.isArray(data)) {
            setItems(data)
        }
    }, [data])

    return { items, setItems, isLoading }
}