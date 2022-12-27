import React from "react"
import { CardButton, CardButtonIn } from "./CardButton"
import { addItemToBasket } from "../../redux/slices/busketSlice"
import { useDispatch } from "react-redux"
import { useBasket } from "../../hooks/useBasket"

const CardBasketBtn = ({ data }) => {
	const { id, stock } = data
	// console.log(stock)
	const dispatch = useDispatch()
	const basket = useBasket()
	const isInBasket = !!basket.find(el => el.id === id)
	const itemDataBasket = basket.find(el => el.id === id)

	return (
		<>
			{isInBasket ? <CardButtonIn id={id} count={itemDataBasket.count} stock={stock}/> : <CardButton
				onClick={() => dispatch(addItemToBasket(data))}>В
				корзину</CardButton>}
		</>
	)
}

export default CardBasketBtn