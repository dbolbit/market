import React, { useState, useEffect } from "react"
import { Switch } from "antd"
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs"

const Theme = (props) => {
	const style = { display: "flex", alignItems: "center", justifyContent: "center" }
	const lightStyle = { backgroundColor: "#FFA900" }
	const darkStyle = { backgroundColor: "darkblue" }
	const [check, setCheck] = useState(false)
	useEffect(() => {
		document.documentElement.className = check ? "dark" : "light"

	})

	return (
		<div style={style}>
			<Switch
				style={check ? darkStyle : lightStyle}
				checked={check}
				unCheckedChildren={<BsFillSunFill/>}
				checkedChildren={<BsFillMoonFill/>}
				// prefixCls="theme_light"
				onClick={() => setCheck(!check)}
			/>

		</div>
	)
}

export default Theme