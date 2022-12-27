import { useSelector } from "react-redux"

export const useAuth = () => {
	const user = useSelector(state => state.user)
	const { id, firstName, userName, isAuth, email, token, image } = user

	return { id, firstName, userName, isAuth, email, token, image }
}