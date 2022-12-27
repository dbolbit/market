import React, {useState, useEffect} from "react"
import {CardButton, RedButton} from "../../buttons"
import {useBasket} from "../../../hooks/useBasket"
import {countBasket, sumBasket} from "../../HeaderComp/subComponent/Basket"
import {BsBasket2} from "react-icons/bs"

const OrderLarge = (props) => {
  const basket = useBasket()
  const [isEmpty, setIsEmpty] = useState(true)
  useEffect(() => basket.length ? setIsEmpty(false) : setIsEmpty(true))

  return (
    <div className="basket_order" style={{backgroundColor: isEmpty ? "lightgray" : "#FFECCA"}}>
      <>
        {isEmpty ? (
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
          }}>
            <BsBasket2/>
            <h1>Корзина пуста</h1>
          </div>
        ) : (
          <>
            <h3>Доставка сегодня, 18:30</h3>
            <div className="promocode_wrapper">
              <input type="text" placeholder="Есть промокод?"/>
              <CardButton>Применить</CardButton>
            </div>
            <ul style={{width: "100%", display: "flex", flexDirection: "column", gap: 10}}>
              <li>Товары <span>{countBasket(basket)}шт</span></li>
              <li>Скидки <span>-15$</span></li>
              <li>Бонусы <span>-20$</span></li>
              <li>Промокод <span>0$</span></li>
              <li>Доставка <span>Бесплатно</span></li>
            </ul>
            <div>К оплате <span
              style={{float: "right", fontWeight: 700}}>{sumBasket(basket)} $</span></div>
          </>
        )}
      </>
      <RedButton disabled={isEmpty}>Оформить заказ</RedButton>
    </div>
  )
}

export default OrderLarge