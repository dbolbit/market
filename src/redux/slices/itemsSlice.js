import { createSlice } from "@reduxjs/toolkit"

const initialState = []
const itemsSlice = createSlice({
	name: "items",
	initialState,
	reducers: {
		addItems (state, action) {
			return action.payload
		},
		filter (state, action) {
			const { type } = action.payload

			return state.sort((cur, next) => next[type] - cur[type])
		}
	}

})

export const { updateItems, filter, addItems } = itemsSlice.actions
export default itemsSlice.reducer