import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../hooks/useAuth"
import { useMutation } from "@tanstack/react-query"
import { AuthService } from "../../../services/auth.service"
import { LuLogOut } from "react-icons/lu"
import styles from "./Sidebar.module.scss"

export function LogoutButton() {
    const { setIsAuth } = useAuth()

	const navigate = useNavigate()

    const { mutate } = useMutation({
        mutationKey: ['logout'],
        mutationFn: () => AuthService.logout(),
        onSuccess() {
            setIsAuth(false)
            navigate('/auth')
        }
    })

    return (
		<div>
			<button className={styles.btn}
				onClick={() => mutate()}
			>
				<LuLogOut className={styles.logout}/>
			</button>
		</div>
	)
}