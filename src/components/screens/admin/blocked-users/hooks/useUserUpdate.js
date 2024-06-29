import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AdminService } from "../../../../services/admin.service"
import { toast } from "sonner"

export function useUserUpdate(key) {
    const queryClient = useQueryClient()

    const { mutate: userUpdate } = useMutation({
        mutationKey: ['update user', key],
        mutationFn: ({ id, data }) => AdminService.userUpdate(id, data),
        onSuccess() {
            toast.success('Successfully update user!', {
                style: { background: 'forestgreen' }
            })
            queryClient.invalidateQueries({
                queryKey: ['users']
            })
        },
        onError() {
            toast.error('Incorrect data', {
                style: { background: 'crimson' }
            })
        }
    })

    return { userUpdate }
}