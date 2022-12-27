import React, {useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom"
import {subHide} from "../../../../redux/slices/subMenuSlice"

const SubPosition = (props) => {
    const menuState = useSelector(state => state.catalog)
    const {subCategory} = menuState.data
    
    return (
        <ul>
            {subCategory?.map(
                el => (!el.subCategory ?
                    <Link
                        to={`/categories/${el.path}`}
                        key={el.title}
                    >{el.title}</Link> : (
                        <span key={el.title}>
						<h4>{el.title}</h4>
						<ul>
							{el.subCategory.map(pos =>
                                <Link to={`/categories/${pos.path}`}
                                      key={pos.title}
                                >{pos.title}</Link>)}
						</ul>
					</span>
                    )))}
        </ul>
    )

}

export default SubPosition