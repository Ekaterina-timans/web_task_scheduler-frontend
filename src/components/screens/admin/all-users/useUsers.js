import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { AdminService } from "../../../../services/admin.service"

export function useUsers() {
    const queryClient = useQueryClient()

    const { data, isLoading } = useQuery({
        queryKey: ['list'],
        queryFn: () => AdminService.getUsers(),
        select: data => data.map(user => ({
            _id: user.id,
            items: [user.email, user.dateRegistration, user.isBlocked]
        }))
    })

    const { mutate: userBlocked } = useMutation({
		mutationKey: ['user blocked'],
		mutationFn: ({id, data}) => AdminService.userBanned(id, data),
		onSuccess() {
            toast.success('User successfully blocked!', {
                style: { background: 'forestgreen' }
            })
            queryClient.invalidateQueries({
                queryKey: ['list']
            })
        }
    })

    return { data, isLoading, userBlocked }
}