import React, { useEffect } from "react"
import Header from "../components/HeaderComp/Header"
import { Outlet } from "react-router-dom"
import PopUp from "../components/popup/PopUp"
import Footer from "../components/footer/Footer"
import { useAuth } from "../hooks/useAuth"
import { useDispatch } from "react-redux"
import { fetchUserById } from "../redux/slices/userSlice"
import { ConfigProvider } from "antd"

const RootLayout = (props) => {
	const { isAuth } = useAuth()
	console.log(isAuth)
	const dispatch = useDispatch()
	const id = localStorage.getItem("id")
	const token = localStorage.getItem("token")
	const theme = {
		token: {
			colorPrimary: "#FFA900"
		}
	}
	useEffect(() => {
		if (id && !isAuth) {
			dispatch(fetchUserById({ id, token }))
		}

	}, [id])

	return (
		<>
			<Header/>
			<ConfigProvider theme={theme}>
				<div className="container">
					<Outlet/>
					<PopUp/>
				</div>
			</ConfigProvider>
			<Footer/>
		</>
	)
}

export default RootLayout