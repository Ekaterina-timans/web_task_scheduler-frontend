import { useQuery } from "@tanstack/react-query"
import { FileService } from "../../../../../services/files.service"

export function useFiles(itemId) {
    const { data, isLoading } = useQuery({
        queryKey: ['files', itemId],
        queryFn: () => FileService.getFiles(itemId)
    })

    return { files: data, isLoading }
}