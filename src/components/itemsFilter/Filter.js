import React, { useEffect, useState, useLayoutEffect } from "react"
import { useAsyncValue, useParams } from "react-router-dom"
import { ruCategory } from "../../state/context/data"
import { Slider, InputNumber, Button } from "antd"

const filterPrice = (items) => {
	const prices = items.map(elem => elem.price)
	const minMaxPrice = []
	minMaxPrice.push(Math.min.apply(null, prices))
	minMaxPrice.push(Math.max.apply(null, prices))
	return minMaxPrice

}
const Filter = (props) => {
	const { category } = useParams()
	const categoryName = ruCategory[category]
	const items = useAsyncValue()
	const [min, max] = filterPrice(items)
	const [minPrice, setMinPrice] = useState(min)
	const [maxPrice, setMaxPrice] = useState(max)
	const [rangePrice, setRangePrice] = useState([min, max])

	useEffect(() => {
		const [min, max] = filterPrice(items)
		setRangePrice([min, max])
		setMinPrice(min)
		setMaxPrice(max)

	}, [items])
	const handlerMinPrice = value => setMinPrice(value)
	const handlerMaxPrice = value => setMaxPrice(value)
	const handlerChange = value => {
		const [min, max] = value
		setRangePrice(value)
		setMinPrice(min)
		setMaxPrice(max)
	}
	const handlerClick = e => setRangePrice([minPrice, maxPrice])

	return (
		<aside>
			<h1>{categoryName}</h1>
			<section>
				<ul>
					<li><h4>Цена:</h4>
						<div className="filter-price">
							<div>
								<InputNumber value={minPrice} onChange={handlerMinPrice}/>
								<span style={{ fontSize: "2em" }}>-</span>
								<InputNumber value={maxPrice} onChange={handlerMaxPrice}/>
							</div>
							<Button type="primary" onClick={handlerClick}>OK</Button>
						</div>
						<Slider
							min={1}
							max={max}
							range
							value={rangePrice}
							onChange={handlerChange}
						/>
					</li>
				</ul>
			</section>
			<Button style={{ width: "90%" }} type="primary">Применить</Button>
		</aside>
	)
}

export default Filter

