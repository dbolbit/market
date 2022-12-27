import React from "react"
import { TbTruckDelivery } from "react-icons/tb"

const DeliveryBtn = (props) => {

	return (
		<div className="delivery_btn">
			<span className="delivery_type user_elem"><TbTruckDelivery size={25}/></span>
		</div>
	)
}

export default DeliveryBtn