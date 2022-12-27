import React from "react"
import BasketItemsList from "../components/basket/BasketItemsList"
import OrderLarge from "../components/basket/Order/OrderLarge"
import useScreen from "../hooks/useScreen"
import OrderSmall from "../components/basket/Order/OrderSmall"

const BasketPage = (props) => {
  const screenSize = useScreen()
  return (
    <section className="basket_container">
      <BasketItemsList/>
      {screenSize > 1150 ? <OrderLarge/> : <OrderSmall/>}
    </section>
  )
}

export default BasketPage
