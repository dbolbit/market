import {GoThreeBars, GoX} from "react-icons/go"
import React, {useEffect, useRef, useState} from "react"
import CatalogMenu from "./CatalogMenu"
import {RedButton} from "../../../buttons"
import {useLocation} from "react-router-dom"

const Catalog = (props) => {
    const location = useLocation()
    const [isOpen, setIsOpen] = useState(false)
    const changeCatalogShow = e => setIsOpen(!isOpen)
    const iconCatalog = isOpen ? <GoX size={20}/> : <GoThreeBars size={20}/>
    useEffect(() => {
        setIsOpen(false)
    }, [location])

    return (
        <div className="catalog_wrapper">
            <RedButton onClick={() => setIsOpen(!isOpen)}>{iconCatalog} Каталог</RedButton>
            {isOpen && <CatalogMenu setIsShow={changeCatalogShow}/>}
        </div>
    )

}

export default Catalog
