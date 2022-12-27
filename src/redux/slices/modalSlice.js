import { createSlice } from "@reduxjs/toolkit"

const initialState = { show: false, data: { title: null } }

export const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		modalShow: (state, action) => {
			state.show = true
			state.data = action.payload
		},
		modalHide: (state, action) => {
			state.show = false
		}
	}
})
export const { modalShow, modalHide } = modalSlice.actions
export default modalSlice.reducer