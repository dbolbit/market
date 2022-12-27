import React from "react"

const DefaultButton = (props) => {
	const { children, style, ...ethProps } = props
	return <button style={style} className="default-btn" {...ethProps}>{children}</button>
}

export default DefaultButton