import { useQuery } from "@tanstack/react-query"
import { AdminService } from "../../../../services/admin.service"

export function useUsersBanned() {
    const { data, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: () => AdminService.getUsersBanned(),
        select: data => data.map(user => ({
            _id: user.id,
            items: [user.email, user.dataStart, user.dataEnd, user.reasonBan]
        }))
    })

    return { data, isLoading }
}