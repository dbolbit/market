import { useAsyncValue, useLocation } from "react-router-dom"
import React, { useEffect } from "react"
import Card from "./itemCard/Card"
import { useDispatch, useSelector } from "react-redux"
import { addItems } from "../redux/slices/itemsSlice"

const Items = () => {
	const items = useAsyncValue()
	const dispatch = useDispatch()
	const itemsList = useSelector(state => state.items)
	useEffect(() => {
		dispatch(addItems(items))
	}, [items])
	return itemsList.map((el, i) => <Card key={i} data={el}/>) // При ошибках заменить на items

}
export default Items