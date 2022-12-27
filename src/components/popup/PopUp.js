import PopUpItems from "./PopUpItems"
import { useSelector, useDispatch } from "react-redux"
import { modalHide } from "../../redux/slices/modalSlice"
import { useEffect } from "react"
import { motion } from "framer-motion"

const PopUp = (props) => {
	const isShow = useSelector(state => state.modal.show)
	const data = useSelector(state => state.modal.data)
	const dispatch = useDispatch()
	useEffect(() => isShow ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll"))
	const modalVariant = {
		visible: { opacity: 1, y: 0, visibility: "visible" },
		hide: { opacity: 0, height: 0, scale: 0 }
	}
	const handlerClick = e => {
		dispatch(modalHide())
	}
	return (
		<motion.div
			initial={{ y: 500, visibility: "hidden" }}
			transition={{ duration: 0.3 }}
			animate={isShow ? "visible" : "hide"}
			variants={modalVariant}
			className="popUp">
			<div onClick={handlerClick} className="popUp-wrapper">
				<motion.div
					initial={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
					animate={isShow ? "visible" : "hide"}
					variants={modalVariant}
					className="popUp-container" onClick={(e) => e.stopPropagation()}>
					<PopUpItems data={data}/>
				</motion.div>
			</div>
		</motion.div>

	)
}
export default PopUp