import React from "react"
import UserInfo from "./subComponent/UserInfo"


const Header = (props) => {

  return (
    <header className="header container">
      <UserInfo/>
    </header>
  )
}
export default Header