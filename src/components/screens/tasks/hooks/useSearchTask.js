import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useDebounce } from "../../../../hooks/useDebounce"
import { useState } from "react"
import { TaskService } from "../../../../services/task.service"

export const useSearchTask = () => {
    const queryClient = useQueryClient()

    const [searchTerm, setSearchTerm] = useState('')
    const debouncedSearch = useDebounce(searchTerm, 500)

    const { data: searchItems } = useQuery({
        queryKey: ['search tasks', debouncedSearch],
        queryFn: () => TaskService.getTask(debouncedSearch),
        enabled: !!debouncedSearch,
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ['tasks']
            })
        }
    })

    return { searchItems, setSearchTerm, debouncedSearch }
}