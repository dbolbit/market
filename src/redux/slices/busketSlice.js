import { createSlice } from "@reduxjs/toolkit"

const initialState = []
const busketSlice = createSlice({
	name: "busket",
	initialState,
	reducers: {
		addItemToBasket (state, action) {
			const { id } = action.payload
			const isIn = state.find(elem => elem.id === id)
			if (isIn) {
				return state.map(el => el.id === id ? { ...el, count: el.count + 1 } : el)
			} else {
				state.push({ id, count: 1, data: { ...action.payload } })
			}
		},
		removeItemInBasket (state, action) {
			const { id } = action.payload
			const result = []
			state.forEach(elem => {
				if (elem.id === id && elem.count > 1) {
					result.push({ ...elem, count: elem.count - 1 })
				} else if (elem.id === id && elem.count <= 1) {
					return false
				} else {
					result.push(elem)
				}
			})
			return result
		},
		clearBasket (state) {
			return initialState
		}
	}
})

export const { addItemToBasket, removeItemInBasket, clearBasket } = busketSlice.actions
export default busketSlice.reducer