import React from "react"
import { Link } from "react-router-dom"
import Catalog from "./catalog/Catalog"
import useScreen from "../../../hooks/useScreen"

const HeaderProduct = (props) => {
	const screenSize = useScreen()
	return (
		<section className="header_products">
			<Catalog/>
		</section>
	)
}

export default HeaderProduct

