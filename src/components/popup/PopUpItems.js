import React, { useEffect, useRef, useState } from "react"
import CardBasketBtn from "../buttons/CardBasketBtn"
import FavoriteButton from "../buttons/FavoriteButton"
import DefaultButton from "../buttons/DefaultButton"
import { Rate } from "antd"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { modalHide } from "../../redux/slices/modalSlice"

const PopUpItems = ({ data }) => {
	const { description, price, stock, title, images, thumbnail, rating, id } = data
	const [mainImg, setMainImg] = useState(thumbnail)
	const scrollRef = useRef(null)
	const dispatch = useDispatch()
	const { category } = useParams()
	const navigator = useNavigate()
	const handlerNavigator = e => {
		dispatch(modalHide())
		navigator(`${category}/${id}`)
	}
	useEffect(() => {
		setMainImg(thumbnail)
	}, [data])
	const handlerScroll = e => {
		const elem = scrollRef.current
		elem.scrollTo({ left: elem.scrollLeft + e.deltaY * 3, behavior: "smooth" })
	}
	return (
		<div className="popUp-item-container">
			<div className="popUp-items-images">
				<section>
					<img src={mainImg}/>
				</section>
				<div className="popUp-img-block" ref={scrollRef} onWheel={handlerScroll}>
					{images?.map(image => <img onClick={() => setMainImg(image)} key={image} src={image}/>)}
				</div>
			</div>
			<div className="popUp-items-info">
				<h1>{title}</h1>
				<p>В наличии: {stock} шт.</p>
				<div>
					<h1>{price} $</h1>
					<div style={{ display: "flex", gap: 10 }}>
						<CardBasketBtn data={data}/>
						<FavoriteButton/>
					</div>
				</div>
				<section style={{ marginTop: 50 }}>
					{description}
				</section>
				<DefaultButton onClick={handlerNavigator}>
					Подробнее
				</DefaultButton>

			</div>
		</div>

	)
}

export default PopUpItems

