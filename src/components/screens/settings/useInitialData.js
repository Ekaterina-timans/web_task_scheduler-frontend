import { useEffect } from "react"
import { useProfile } from "../../../hooks/useProfile"

export function useInitialData(reset) {
    const { user, isSuccess } = useProfile()

    useEffect(() => {
		if (isSuccess && user) {
			reset({
				email: user.email,
				name: user.name
			})
		}
	}, [isSuccess])
}