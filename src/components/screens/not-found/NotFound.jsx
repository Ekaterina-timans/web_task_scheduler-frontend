import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../hooks/useAuth"
import { useEffect } from "react"
import { Heading } from "../../ui/Heading"

const NotFound = () => {
	const { isAuth } = useAuth()

	const navigate = useNavigate()

	useEffect(() => {
		if (!isAuth) {
			navigate('/auth')
		}
	}, [])

	return (
		<>
			<Heading title='404 page not found' />
		</>
	)
}

export default NotFound