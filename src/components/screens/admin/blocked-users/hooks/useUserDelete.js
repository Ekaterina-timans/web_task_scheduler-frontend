import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AdminService } from "../../../../services/admin.service"
import { toast } from "sonner"

export function useUserDelete(userId) {
    const queryClient = useQueryClient()

    const { mutate: userDelete, isPending: isDeletePending } = useMutation({
        mutationKey: ['delete user', userId],
        mutationFn: () => AdminService.userDelete(userId),
        onSuccess() {
            toast.success('User delete successfully!', {
                style: { background: 'forestgreen' }
            })
            queryClient.invalidateQueries({
                queryKey: ['users']
            })
        },
        onError() {
            toast.error('User has not been deleted', {
                style: { background: 'crimson' }
            })
        }
    })

    return { userDelete, isDeletePending }
}