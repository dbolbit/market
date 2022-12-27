import React, {useState} from "react"
import {GoThreeBars, GoX} from "react-icons/go"
import Basket from "../subComponent/Basket"

const HeaderNavigationSmall = (props) => {
  const [isShow, setIsShow] = useState(false)
  const handlerClick = e => {
    setIsShow(true)
  }
  return (
    <>
      <Basket/>
      <div className="cntr navbar_open" onClick={handlerClick}><GoThreeBars size={30}/></div>
      <section className={`small_navbar ${isShow ? "" : "close"}`}>
        <div className="cntr navbar_close" onClick={() => setIsShow(false)}>
          <GoX size={30}/>
        </div>
      </section>
    </>
  )
}

export default HeaderNavigationSmall