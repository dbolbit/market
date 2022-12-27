export const formValidation = values => {
	const errors = {}
	if (!values.username) {
		errors.username = "Required"
	} else if (
		!/[a-z]+/i.test(values.username)
	) {
		errors.username = "Invalid login "
	}
	if (!values.password) {
		errors.password = "Required password"
	} else if (values.password.length < 5) {
		errors.password = "Слабый пароль "
	}
	return errors
}