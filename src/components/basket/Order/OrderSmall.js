import React, {useState} from 'react'
import {CardButton} from "../../buttons"
import {countBasket, sumBasket} from "../../HeaderComp/subComponent/Basket"
import {useBasket} from "../../../hooks/useBasket"
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import {motion} from "framer-motion"

const OrderSmall = (props) => {
  const basket = useBasket()
  const [isShow, setIsShow] = useState(false)
  return (
    <motion.div
      ininial={{x: 300}}
      animate={{x: isShow ? 0 : 300}}
      transition={{duration: 0.5}}
      className="basket_order_small">
      <div className="basket_order_small_wrapper">
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
      </div>
      <div className="close_open_basket" onClick={() => setIsShow(!isShow)}>{isShow ?
        <AiOutlineArrowRight/> : <AiOutlineArrowLeft/>}
      </div>
    </motion.div>
  )
}


export default OrderSmall