import React from "react"
import DefaultButton from "./DefaultButton"
import { useDispatch } from "react-redux"
import { addItemToBasket, removeItemInBasket } from "../../redux/slices/busketSlice"

export const CardButton = (props) => {
	return <button {...props} className="item_card_btn">{props.children}</button>
}

export const CardButtonIn = (props) => {
	const { id, count, stock } = props
	const dispatch = useDispatch()
	const style = { fontSize: 20, borderRadius: "50%", height: 25, width: 25, padding: 0 }
	return (
		<div {...props} className="item_card_btn_in">
			<DefaultButton style={style} onClick={() => dispatch(removeItemInBasket({ id }))}>-</DefaultButton>
			<span>{count}</span>
			<DefaultButton disabled={stock === count} style={style}
			               onClick={() => dispatch(addItemToBasket({ id }))}>+</DefaultButton>
		</div>
	)
}
