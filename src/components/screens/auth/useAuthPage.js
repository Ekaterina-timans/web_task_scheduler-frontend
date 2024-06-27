import { useMutation } from "@tanstack/react-query"
import { useEffect, useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import { useAuth } from "../../../hooks/useAuth"
import { AuthService } from "../../../services/auth.service"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

export const useAuthPage = () => {
    const [type, setType] = useState('login')

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
		mode: 'onChange'
	})

    const { isAuth, setIsAuth } = useAuth()
	const navigate = useNavigate()

    useEffect(() => {
		if (isAuth) {
			navigate('/')
		}
	}, [isAuth])

    const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: ({ email, password }) => 
            AuthService.main(email, password, type),
        onSuccess() {
            setIsAuth(true)
            toast.success('Successfully login!', {
                style: { background: 'forestgreen' }
            })
            reset()
		}
    })

    const onSubmit = data => {
		mutate(data)
	}

    return useMemo(
		() => ({
			setType,
			register,
			handleSubmit,
			errors,
			onSubmit
		}),
		[errors]
	)
}