import { useMutation, useQueryClient } from "@tanstack/react-query"
import { FileService } from "../../../../../services/files.service"
import { toast } from "sonner"

export const useUpload = (itemId, onChange) => {
    const queryClient = useQueryClient()

	const { mutateAsync } = useMutation({
		mutationKey: ['upload file', itemId],
		mutationFn: (file) => FileService.upload(itemId, file),
        onSuccess({file}) {
            onChange(file),
            toast.success('Successfully uploaded file!', {
                style: { background: 'forestgreen' }
            }),
            queryClient.invalidateQueries({
                queryKey: ['files']
            })
        },
        onError() {
            toast.error('The file has not been uploaded!', {
                style: { background: 'crimson' }
            })
        },
    })

    return { mutateAsync }
}