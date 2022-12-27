import React from "react"
import RootLayout from "./routes/RootLayout"
import "react-loading-skeleton/dist/skeleton.css"
import {store} from "./redux/store"
import {Provider} from "react-redux"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./routes/Home"
import ItemsPage, {itemLoader} from "./routes/ItemsPage"
import ErrorPage from "./components/ErrorPage"
import CategoryPage from "./routes/CategoryPage"
import LoginPage from "./routes/LoginPage"
import CabinetPage from "./routes/CabinetPage"
import CabinetUserInfo from "./components/cabinet/CabinetUserInfo"
import OrderHistory from "./components/cabinet/OrderHistory"
import Favorite from "./components/cabinet/Favorite"
import BasketPage from "./routes/BasketPage"
import SingleItemPage, {fetchItem} from "./routes/SingleItemPage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "categories/",
                element: <CategoryPage/>
            },
            {
                path: "categories/:category",
                element: <ItemsPage/>,
                loader: itemLoader,
                errorElement: <ErrorPage/>
            },
            {
                path: ":category/:item",
                element: <SingleItemPage/>,
                loader: fetchItem
            },
            {
                path: "/login",
                element: <LoginPage/>
            },
            {
                path: "/cabinet",
                element: <CabinetPage/>,
                children: [
                    {
                        index: true,
                        path: "/cabinet",
                        element: <CabinetUserInfo/>
                    },
                    {
                        path: "/cabinet/order-history",
                        element: <OrderHistory/>
                    },
                    {
                        path: "/cabinet/favorite",
                        element: <Favorite/>
                    }
                ]
            },
            {
                path: "/basket",
                element: <BasketPage/>
            }
        ]
    }
])

const App = () => {

    return (
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>

    )
}

export default App
