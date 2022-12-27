import React, { useState, useLayoutEffect } from "react"
import { useDispatch } from "react-redux"
import { modalShow } from "../../redux/slices/modalSlice"
import CardBasketBtn from "../buttons/CardBasketBtn"
import Skeleton from "react-loading-skeleton"

const Card = ({ data }) => {
	const { thumbnail, price, stock, title } = data
	const dispatch = useDispatch()
	const [isSkeleton, setIsSkeleton] = useState(false)

	useLayoutEffect(() => {
		const tId = setTimeout(() => {
			setIsSkeleton(true)
		}, 2000)
		return () => {
			setIsSkeleton(false)
			clearTimeout(tId)
		}
	}, [])

	return (
		<div className="item-card">
			<div className="item-img" onClick={() => dispatch(modalShow(data))}>
				{isSkeleton ? (
					<>
						<img src={thumbnail}/>
						<div className="img-bg"></div>
					</>
				) : <Skeleton count={1} width={275} height={200} borderRadius={10}/>
				}
			</div>
			{isSkeleton ?
				<p>В наличии {stock} шт. <span>{price} $</span></p> :
				<Skeleton count={1} height={23} width={275}/>}


			{isSkeleton ?
				<h3 onClick={() => dispatch(modalShow(data))}>{title}</h3> :
				<Skeleton count={1} height={23} width={275}/>}

			<section className="price-card">
				{isSkeleton ? (
					<>
						<h1>{price} $</h1>
						<CardBasketBtn data={data}/>
					</>
				) : <Skeleton count={1} width={275} height={50}/>}
			</section>
		</div>
	)
}

export default Card