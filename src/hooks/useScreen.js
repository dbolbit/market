import React, { useState, useEffect } from "react"

const useScreen = () => {
	const [sizeScreen, setSizeScreen] = useState(window.innerWidth)
	const handlerResize = () => setSizeScreen(window.innerWidth)
	useEffect(() => {
		window.addEventListener("resize", handlerResize)
		return () => window.removeEventListener("resize", handlerResize)
	})
	return sizeScreen

}
export default useScreen