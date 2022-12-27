import React, { useContext } from "react"
import { SliderContext } from "../../state/context"
import { CustomButton } from "../buttons"

export const SlideOne = (props) => {
	const { contWidth } = useContext(SliderContext)
	return (
		<div style={{ minWidth: contWidth }} className="slide slide_one">
			<h1>Товары для всей семьи</h1>
			<CustomButton style={{ color: "green", borderColor: "green" }}>Перейти к покупкам</CustomButton>
		</div>
	)
}

export const SlideTwo = (props) => {
	const { contWidth } = useContext(SliderContext)
	return (
		<div style={{ minWidth: contWidth }} className="slide slide_two">
			<h1>Скидки на все телефоны</h1>
			<CustomButton style={{ color: "blue", borderColor: "blue" }}>Перейти к покупкам</CustomButton>
		</div>
	)
}

export const SlideThree = (props) => {
	const { contWidth } = useContext(SliderContext)
	return (
		<div style={{ minWidth: contWidth }} className="slide slide_three">
			<h1>Скидки до нового года</h1>
			<CustomButton style={{ color: "red", borderColor: "red" }}>Перейти к покупкам</CustomButton>
		</div>
	)
}

