import React from "react"
import Search from "../subComponent/search/Search"
import Theme from "../subComponent/Theme"
import DeliveryBtn from "../subComponent/DeliveryBtn"
import {AiFillHeart} from "react-icons/ai"
import UserBlock from "../subComponent/catalog/UserBlock"
import Basket from "../subComponent/Basket"
import useScreen from "../../../hooks/useScreen"
import Catalog from "../subComponent/catalog/Catalog"

const HeaderNavigationLarge = (props) => {
  const screenSize = useScreen()
  return (
    <>
      <Catalog/>
      {screenSize > 960 && <Search/>}
      <Theme/>
      <DeliveryBtn/>
      <div className="user_favorite user_elem">
        <AiFillHeart size={20}/>
      </div>
      <UserBlock/>
      <Basket/>
    </>
  )
}

export default HeaderNavigationLarge