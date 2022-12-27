import React from "react"
import imgTest from "../img/electronics/braslet.jpg"
import { CardButtonIn } from "../buttons/CardButton"
import FavoriteButton from "../buttons/FavoriteButton"

const BasketItem = ({ item }) => {
	const { id, count, data } = item
	return (
		<div className="item_in_basket_list">
			<div className="basket_img_wrapper" style={{ backgroundImage: `url(${data.thumbnail})` }}>
			</div>
			<div className="item_in_basket_info_wrapper">
				<div className="item_in_basket_first_info">
					<h3>{data.description}</h3>
					<p>В наличии {data.stock} шт.</p>
				</div>
				<div className="item_in_basket_second_info">
					<h3>{data.price}$</h3>
					<CardButtonIn id={id} count={count}/>
					<FavoriteButton/>
					<h1>{count * data.price}$</h1>
				</div>
			</div>
		</div>
	)
}

export default BasketItem