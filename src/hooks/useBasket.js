import { useSelector } from "react-redux"

export const useBasket = () => {
	const basket = useSelector(state => state.basket)
	
	return basket
}