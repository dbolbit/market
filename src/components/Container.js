import React from "react"

const Container = (props) => {
	const { children, ...ethProps } = props
	return (
		<div className="container_wrapper" {...ethProps}>
			{children}
		</div>
	)
}

export default Container