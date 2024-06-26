import { useLocation } from "react-router-dom"
import { useAuth } from "./useAuth"
import { TOKEN } from "../app.constant"
import { useEffect } from "react"
import Cookies from "js-cookie"
import { jwtDecode } from "jwt-decode"

export const useCheckToken = () => {
	const { setIsAuth, isAuth, userRole } = useAuth()
	const { pathname } = useLocation()

	useEffect(() => {
		const token = Cookies.get(TOKEN)
		if (!token) {
		  setIsAuth(false)
		} else {
			try {
				const decodedToken = jwtDecode(token)
				const isTokenExpired = decodedToken.exp * 1000 < Date.now()
				if (isTokenExpired) {
					Cookies.remove(TOKEN)
					setIsAuth(false)
				} else {
					setIsAuth(true)
				}
		    } catch (error) {
				Cookies.remove(TOKEN)
				setIsAuth(false)
		  	}
		}
	}, [pathname, isAuth, userRole])
}