import { useMutation, useQueryClient } from "@tanstack/react-query"
import { TaskService } from "../../../../services/task.service"
import { toast } from "sonner"

export function useCreateTask() {
    const queryClient = useQueryClient()

    const { mutate: createTask, isPending } = useMutation({
        mutationKey: ['create task'],
        mutationFn: (data) => TaskService.createTask(data),
        onSuccess() {
            toast.success('Successfully create task!', {
                style: { background: 'forestgreen' }
            })
            queryClient.invalidateQueries({
                queryKey: ['tasks']
            })
        }
    })

    return { createTask, isPending }
}