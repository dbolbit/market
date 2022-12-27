import React, { useEffect } from "react"
import Container from "../components/Container"
import { Await, defer, useLoaderData } from "react-router-dom"
import { Suspense } from "react"
import { LoaderSpiner } from "./ItemsPage"
import SingleItem from "../components/Item/SingleItem"

const SingleItemPage = (props) => {
	const { itemData } = useLoaderData()

	return (
		<Container style={{ minHeight: "100vh", marginTop: 20 }}>
			<Suspense fallback={<LoaderSpiner/>}>
				<Await resolve={itemData}>
					<SingleItem/>
				</Await>
			</Suspense>
		</Container>
	)
}

export default SingleItemPage

const getItem = async (id) => {
	const res = await fetch(`https://dummyjson.com/products/${id}`)
	const result = await res.json()
	return result

}
export const fetchItem = async ({ params }) => {
	const { item } = params
	return defer({ itemData: getItem(item) })
}