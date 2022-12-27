import React, { useState, useEffect } from "react"
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md"

const Slider = ({ children }) => {
	const SLIDE_WIDTH = 1000,
		amountPage = children.length

	const [slideOffset, setSlideOffset] = useState(0),
		[count, setCount] = useState(1)
	useEffect(() => {
		if (count > amountPage) {
			setCount(1)
		}
		if (count === 0) {
			setCount(amountPage)
		}
		setSlideOffset(-(count - 1) * SLIDE_WIDTH)
		const sliderTimer = setInterval(() => {setCount(count + 1)}, 5000)
		return () => clearInterval(sliderTimer)
	}, [count])

	const handlerClickPrew = e => setCount(count - 1)
	const handlerClickNext = e => setCount(count + 1)

	return (
		<div className="main-carusel">
			<div className="carusel-line">
				<div style={{ transform: `translateX(${slideOffset}px)` }} className="carusel-container">
					{children}
				</div>
			</div>
			<span className="carusel-arrow arrow-prew" onClick={handlerClickPrew}><MdOutlineArrowBackIosNew/></span>
			<span className="carusel-arrow arrow-next" onClick={handlerClickNext}><MdOutlineArrowForwardIos/></span>
			<ul className="slider-dots-container">
				{children.map(
					(elem, i) => <li key={i} className={count === i + 1 ? "slider-dot active_dot" : "slider-dot "}></li>)}

			</ul>
		</div>

	)
}

export default Slider
