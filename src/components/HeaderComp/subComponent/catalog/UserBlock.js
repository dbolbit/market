import React, { useState } from "react"
import { FaUser } from "react-icons/fa"
import DefaultButton from "../../../buttons/DefaultButton"
import { logOutUser } from "../../../../redux/slices/userSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../../hooks/useAuth"

const UserBlock = () => {
	const userStyle = {
		height: 25,
		padding: "5px 10px",
		minWidth: 100

	}

	const dispatch = useDispatch()
	const navigator = useNavigate()
	const [showUser, setShowUser] = useState(false)
	const { isAuth, firstName, image } = useAuth()

	return (
		<div style={{ position: "relative" }} className={"user_elem "} onMouseEnter={() => setShowUser(true)}
		>
			<div className="user_login ">
				{isAuth ? <img style={{ height: 35 }} src={image}/> : <FaUser size={20}/>}
			</div>
			{showUser && (
				<div className={"userModal"} onMouseLeave={() => setShowUser(false)}>
					<h3 onClick={() => !isAuth ? navigator("login") : false}>{firstName || "Войдите"}</h3>
					<DefaultButton onClick={() => isAuth ? navigator("cabinet") : false} style={userStyle}>Мой
						кабинет</DefaultButton>
					<DefaultButton onClick={() => dispatch(logOutUser())} style={userStyle}>Выйти</DefaultButton>
				</div>
			)}
		</div>
	)
}

export default UserBlock
