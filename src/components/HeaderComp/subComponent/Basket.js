import React, { useEffect, useState } from "react"
import { RedButton } from "../../buttons"
import { BsBasket2 } from "react-icons/bs"
import { useBasket } from "../../../hooks/useBasket"
import { useNavigate } from "react-router-dom"

export const countBasket = basket => {
	let count = 0
	basket.forEach(el => count += el.count)
	return count
}
export const sumBasket = basket => {
	let sum = 0
	basket.forEach(el => {
		sum += el.data.price * el.count
	})
	return sum
}

const Basket = (props) => {
	const navigate = useNavigate()
	const [basketLabel, setBasketLabel] = useState(false)
	const [basketPrice, setBasketPrice] = useState("Корзина")
	const basket = useBasket()
	useEffect(() => {
		if (basket.length) {
			setBasketLabel(countBasket(basket))
			setBasketPrice(`${sumBasket(basket)} $`)
		} else {
			setBasketLabel(false)
			setBasketPrice("Корзина")
		}

	}, [basket])

	return (
		<RedButton onClick={() => navigate("/basket")}
		           style={{ position: "relative", minWidth: 135, height: "inherit" }}><BsBasket2 size={20}/> {basketPrice}
			{basketLabel && (
				<span className={"basket_label"}>{basketLabel}</span>
			)}
		</RedButton>
	)
}

export default Basket
