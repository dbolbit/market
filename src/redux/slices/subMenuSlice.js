import { createSlice } from "@reduxjs/toolkit"

const initialState = { data: { title: "Выберите категорию" }, isShow: false }

const subMenuSlice = createSlice({
	name: "subMenu",
	initialState,
	reducers: {
		update: (state, action) => {
			state.data = action.payload
		},
		subShow: (state, action) => {
			state.isShow = true
		},
		subHide: (state, action) => {
			state.isShow = false
		}
	}
})
export const { update, subShow, subHide } = subMenuSlice.actions
export default subMenuSlice.reducer