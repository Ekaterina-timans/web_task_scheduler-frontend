import { useMutation, useQueryClient } from "@tanstack/react-query"
import { TaskService } from "../../../../services/task.service"
import { toast } from "sonner"

export function useUpdateTask(key) {
    const queryClient = useQueryClient()

    const { mutate: updateTask } = useMutation({
        mutationKey: ['update task', key],
        mutationFn: ({ id, data }) => TaskService.updateTask(id, data),
        onSuccess() {
            toast.success('Successfully update task!', {
                style: { background: 'forestgreen' }
            })
            queryClient.invalidateQueries({
                queryKey: ['tasks']
            })
        }
    })

    return { updateTask }
}