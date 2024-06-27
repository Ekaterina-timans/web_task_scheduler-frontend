import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { UserService } from "../../../services/user.service"

export function useUpdateData() {
	const queryClient = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationKey: ['update profile'],
		mutationFn: (data) => UserService.updateProfile(data),
		onSuccess() {
			toast.success('Successfully update profile!', {
				style: { background: 'forestgreen' }
			})
			queryClient.invalidateQueries({ queryKey: ['profile'] })
		}
	})

	return { mutate, isPending }
}