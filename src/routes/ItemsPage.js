import React, {Suspense} from "react"
import {useLoaderData, defer, Await} from "react-router-dom"
import DefaultButton from "../components/buttons/DefaultButton"
import Items from "../components/Items"
import {TbArrowBigLeft} from "react-icons/tb"
import {useNavigate} from "react-router-dom"
import {Spin} from "antd"
import {getUrl} from "../func/getUrl"
import Filter from "../components/itemsFilter/Filter"
import {useDispatch} from "react-redux"
import {filter} from "../redux/slices/itemsSlice"
import useScreen from "../hooks/useScreen"

const ItemsPage = props => {
    const navigate = useNavigate()
    const {items} = useLoaderData()
    const dispatch = useDispatch()
    const screenSize = useScreen()
    const handlerPopularClick = () => {
        dispatch(filter({type: "rating"}))
    }

    return (
        <div className="main-container">
            <div className={"back-btn"}>
                <DefaultButton
                    onClick={() => navigate(-1)}
                    style={{display: "flex", alignItems: "center", gap: 5}}
                >
                    <TbArrowBigLeft/>
                    Назад
                </DefaultButton>
            </div>
            {screenSize > 1024 && (
                <>
                    <Suspense>
                        <Await resolve={items}>
                            <Filter/>
                        </Await>
                    </Suspense>
                </>
            )}
            <main>
                <section>
					<span className="filter-rate" onClick={handlerPopularClick}>
						<DefaultButton>По популярности</DefaultButton>
					</span>
                </section>
                <div className=" item-container">
                    <Suspense fallback={<LoaderSpiner/>}>
                        <Await resolve={items}>
                            <Items/>
                        </Await>
                    </Suspense>
                </div>
            </main>
        </div>
    )
}
export const getItems = async url => {
    const res = await fetch(`https://dummyjson.com/products/category/${url}`)
    const {products} = await res.json()
    return products
}
export const itemLoader = async ({request, params}) => {
    const url = getUrl(request.url)
    return defer({items: getItems(url)})
}

export default ItemsPage

export const LoaderSpiner = () => {
    return (
        <section className="spin-wrapper">
            <Spin size="large"/>
        </section>
    )
}


