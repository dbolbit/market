import React, { useState, useRef } from "react"
import { useAsyncValue } from "react-router-dom"
import CardBasketBtn from "../buttons/CardBasketBtn"
import FavoriteButton from "../buttons/FavoriteButton"
import { Rate } from "antd"

const SingleItem = (props) => {
	const item = useAsyncValue()
	const { title, description, brand, price, stock, thumbnail, images, rating } = item
	const [mainImg, setMainImg] = useState(thumbnail)

	return (
		<div className="single_item_page_wrapper">
			<aside>
				<div className="main_img_wrapper">
					<img src={mainImg}/>
				</div>
				<div className="img_list_wrapper">
					<div>
						{images?.map(img => <img src={img} onClick={() => setMainImg(img)} key={img}/>)}
					</div>
				</div>
			</aside>
			<main>
				<p>{brand}</p>
				<h1>{title}</h1>
				<p>В наличии: {stock} шт.</p>
				<div>
					<div style={{ display: "flex", gap: 10 }}>
						<h1>{price} $</h1>
						<CardBasketBtn data={item}/>
						<FavoriteButton/>
						<Rate allowHalf value={rating}/>
					</div>
				</div>
				<p style={{ marginTop: 20 }}>{description}</p>
			</main>
		</div>
	)
}

export default SingleItem