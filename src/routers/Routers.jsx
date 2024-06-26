import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import { routes } from "./routers.data"
import NotFound from "../components/screens/not-found/NotFound"

const Router = () => {
	const { isAuth, userRole } = useAuth()

	const checkAccess = (route) => {
        if (route.isAuth && !isAuth) {
            return <Navigate to="/auth" />
        }
        else if (route.userRole && route.userRole !== userRole) {
            return <Navigate to="/" />
        }
        return <route.component />
    }

	return (
		<BrowserRouter>
			<Routes>
                {routes.map(route => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={checkAccess(route)}
                    />
                ))}
                <Route path='*' element={<NotFound />} />
            </Routes>
		</BrowserRouter>
	)
}

export default Router