import React, {useState} from "react"
import useScreen from "../../../hooks/useScreen"
import {HeaderNavigationLarge, HeaderNavigationSmall} from "../headerNavigation"
import {Link} from "react-router-dom"

const UserInfo = (props) => {
    const screenSize = useScreen()

    return (
        <div className="user_info">
            <Link to="/"><span className="logo">MyShop<span>online</span></span></Link>
            {screenSize > 720 ? <HeaderNavigationLarge/> : <HeaderNavigationSmall/>}
        </div>
    )

}

export default UserInfo