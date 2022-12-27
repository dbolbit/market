import React from "react"

export const CustomButton = (props) => {
	const { children, ...eth } = props
	return <button className="custom_btn" {...eth}>{children}</button>
}
