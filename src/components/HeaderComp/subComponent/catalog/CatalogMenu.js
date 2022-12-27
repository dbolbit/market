import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {subHide, subShow, update} from "../../../../redux/slices/subMenuSlice"
import CatalogSubMenu from "./CatalogSubMenu"
import {categories} from "../../../../state/context/CatalogContext"

const CatalogMenu = ({setIsShow}) => {
    const menuState = useSelector(state => state.catalog)
    const dispatch = useDispatch()
    const handlerMouseLeave = e => dispatch(subHide())
    const handlerMouseEnter = e => dispatch(subShow())


    return (
        <div className="catalog_menu"
             onMouseEnter={handlerMouseEnter}
             onMouseLeave={() => {
                 handlerMouseLeave()
                 setIsShow()
             }
             }

        >
            <section className="menu_first">
                <div className="submenu_wrapper">
                    <ul>
                        {categories.map(el => <li onMouseEnter={() => dispatch(update(el))}
                                                  key={el.title}>{el.title}</li>)}
                    </ul>
                </div>
            </section>
            {menuState.isShow && <CatalogSubMenu/>}
        </div>
    )
}

export default CatalogMenu
