import { useMutation, useQueryClient } from "@tanstack/react-query"
import { TaskService } from "../../../../services/task.service"
import { toast } from "sonner"

export function useDeleteTask(itemId) {
    const queryClient = useQueryClient()

    const { mutate: deleteTask, isPending: isDeletePending } = useMutation({
        mutationKey: ['delete task', itemId],
        mutationFn: () => TaskService.deleteTask(itemId),
        onSuccess() {
            toast.success('Successfully delete task!', {
                style: { background: 'forestgreen' }
            })
            queryClient.invalidateQueries({
                queryKey: ['tasks']
            })
        }
    })

    return { deleteTask, isDeletePending }
}