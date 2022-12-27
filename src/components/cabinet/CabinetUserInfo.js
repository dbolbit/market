import React from "react"
import { Field, Form, Formik } from "formik"

const CabinetUserInfo = (props) => {

	return (
		<Formik
			initialValues={{ name: "", phone: "", date: "", email: "" }}>
			<Form>
				<Field name={"name"} placeholder={"Имя"}/>
				<Field name={"phone"} placeholder={"+380993456789"}/>
				<Field type={"date"} name={"date"}/>
				<Field type={"email"} name={"email"}/>
			</Form>
		</Formik>
	)
}

export default CabinetUserInfo