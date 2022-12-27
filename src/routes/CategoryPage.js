import React from "react"
import { categories } from "../state/context/CatalogContext"

const CategoryPage = (props) => {

	return (
		<div className={"category_page"}>
			<h1>Выберите категорию</h1>
			<div className={"category_page_container"}>
				{categories.map((elem) => (
					<div key={elem.title} className={"items_category"}>
						<h2>{elem.title}</h2>
					</div>
				))}
			</div>
		</div>
	)
}

export default CategoryPage
