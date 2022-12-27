import React, { useState } from "react"
import { RedButton } from "../components/buttons"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { formValidation } from "../func/formValidation"
import { urlLogin } from "../state/context/CatalogContext"
import { useDispatch, useSelector } from "react-redux"
import { logInUser } from "../redux/slices/userSlice"
import { useAuth } from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
	const dispatch = useDispatch()
	const [mess, setMess] = useState("")
	const navigate = useNavigate()
	const logIn = async data => {
		const res = await fetch(urlLogin, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data)
		})
		const result = await res.json()
		if (result.message) {
			setMess("Нет такого пользователя")
		} else {
			dispatch(logInUser(result))
			localStorage.setItem("token", result.token)
			localStorage.setItem("id", result.id)
			navigate("/")
		}

	}
	return (
		<section style={{ height: "60vh", width: "70%" }} className={"container"}>
			<Formik initialValues={{ username: "", password: "" }}
			        validate={values => formValidation(values)}
			        onSubmit={values => logIn(values)}
			>
				<Form className={"login_container"}>
					{mess ? <span>{mess}</span> : null}
					<div>
						<Field type={"text"} name={"username"} placeholder={"Login"}/>
						<ErrorMessage name={"username"} component={"div"}/>
					</div>
					<div>
						<Field type={"password"} name={"password"} placeholder={"Password"}/>
						<ErrorMessage name={"password"} component={"div"}/>
					</div>
					<RedButton type={"submit"}>Войти</RedButton>
				</Form>
			</Formik>
			<span>kminchelle</span>
			<span>0lelplR</span>

		</section>

	)
}

export default LoginPage

