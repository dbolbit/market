import { configureStore } from "@reduxjs/toolkit"
import modalReducer from "./slices/modalSlice"
import subMenuReducer from "./slices/subMenuSlice"
import itemsReducer from "./slices/itemsSlice"
import userReducer from "./slices/userSlice"
import basketReducer from "./slices/busketSlice"

export const store = configureStore({
	reducer: {
		modal: modalReducer,
		catalog: subMenuReducer,
		items: itemsReducer,
		user: userReducer,
		basket: basketReducer
	}

})