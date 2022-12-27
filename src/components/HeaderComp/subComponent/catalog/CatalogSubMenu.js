import React from "react"
import { useSelector } from "react-redux"
import SubPosition from "./SubPosition"

const CatalogSubMenu = (props) => {
	const menuState = useSelector(state => state.catalog)
	const { subCategory } = menuState.data
	// console.log(subCategory)
	return (
		<section className="menu_second">
			<div className="submenu_wrapper_second">
				<h2>{menuState.data.title}</h2>
				<ul className="submenu_list">
					<SubPosition/>
				</ul>
			</div>
		</section>
	)
}

export default CatalogSubMenu

