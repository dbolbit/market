import React from "react"
import DefaultButton from "../buttons/DefaultButton"
import {clearBasket} from "../../redux/slices/busketSlice"
import {useBasket} from "../../hooks/useBasket"
import {useDispatch} from "react-redux"
import BasketItem from "./BasketItem"

const BasketItemsList = () => {
  const basket = useBasket()
  const dispatch = useDispatch()
  return (
    <div className="basketContainer">
      <section>
        {/*<h1>Корзина</h1>*/}
        <DefaultButton style={{height: 30}} onClick={() => dispatch(clearBasket())}>Очистить
        </DefaultButton>
      </section>
      <main>
        {basket.length ? basket.map((elem, i) => <BasketItem key={i} item={elem}/>) :
          <h1>Корзина пуста</h1>}
      </main>
    </div>
  )
}

export default BasketItemsList
