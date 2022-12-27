import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
	isAuth: false,
	id: "",
	email: "",
	username: "",
	firstName: "",
	lastName: "",
	gender: "",
	image: "",
	token: ""

}
export const fetchUserById = createAsyncThunk(
	"user/fetchUser",
	async ({ id, token }) => {
		try {
			const response = await fetch(`https://dummyjson.com/auth/users/${id}`, {
				method: "GET",
				headers: {
					"Authorization": `Bearer ${token}`,
					"Content-Type": "application/json"
				}
			})
			const res = await response.json()
			if (res.name === "TokenExpiredError") {
				localStorage.clear()
				return
			}
			return res
		} catch (e) {
			console.log(e.message)
		}
	}
)
const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		logInUser (state, action) {
			return { ...action.payload, isAuth: true }

		},
		logOutUser () {
			localStorage.clear()
			return initialState
		}
	},
	extraReducers: builder => {
		builder.addCase(fetchUserById.fulfilled, (state, action) => {
			return { ...action.payload, isAuth: true }
		})
	}
})

export const { logInUser, logOutUser } = userSlice.actions
export default userSlice.reducer