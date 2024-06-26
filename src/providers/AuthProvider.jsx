import { createContext, useEffect, useState } from "react"
import { TOKEN } from "../app.constant"
import Cookies from "js-cookie"
import { jwtDecode } from "jwt-decode"

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
	const [isAuth, setIsAuth] = useState(!!Cookies.get(TOKEN))
	const [userRole, setUserRole] = useState(null)

	useEffect(() => {
		if (isAuth) {
		  const token = Cookies.get(TOKEN)
		  const decodedToken = jwtDecode(token)
		  setUserRole(decodedToken.isAdmin == 0 ? 'user' : 'admin')
		}
	}, [isAuth])

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth, userRole, setUserRole }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider