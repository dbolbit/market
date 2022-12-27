import React, { useRef, useState, useLayoutEffect } from "react"
import { SliderContext } from "../../state/context"
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md"

const Carusel = (props) => {

    const { children, ...ethProps } = props
	const amountPage = children.length
	const [contWidth, setContWidth] = useState(null)
	const sliderRef = useRef(null)
	const [slideOffset, setSlideOffset] = useState(0)
	const [count, setCount] = useState(1)
	useLayoutEffect(() => setContWidth(sliderRef.current.clientWidth))

	useLayoutEffect(() => {
		if (count > amountPage) {
			setCount(1)
		}
		if (count === 0) {
			setCount(amountPage)
		}
		setSlideOffset(-(count - 1) * contWidth)

	}, [count])

	const handlerClickNext = () => setCount(count + 1)
	const handlerClickPrew = () => setCount(count - 1)

	return (
		<SliderContext.Provider value={{ contWidth }}>

			<div ref={sliderRef} className="slider_container" {...ethProps}>
				<div style={{ transform: `translateX(${slideOffset}px)` }}>
					{children}
				</div>
				<span className="carusel-arrow arrow-prew" onClick={handlerClickPrew}><MdOutlineArrowBackIosNew/></span>
				<span className="carusel-arrow arrow-next" onClick={handlerClickNext}><MdOutlineArrowForwardIos/></span>
			</div>


		</SliderContext.Provider>
	)

}
export default Carusel

