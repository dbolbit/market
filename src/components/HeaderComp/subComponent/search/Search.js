import React, { useState, useEffect } from "react"
import axios from "axios"
import { AiOutlineSearch } from "react-icons/ai"
import SearchList from "./SearchList"

const fetchSearch = async (str) => {
	const result = await axios.get(`https://dummyjson.com/products/search?q=${str}`)
	return result.data
}

const Search = (props) => {
	const [inputValue, setInputValue] = useState("")
	const [isShow, setIsShow] = useState(false)
	const [searchValue, setSearchValue] = useState([])
	const handlerFocus = e => setIsShow(true)
	const handlerBlur = e => setIsShow(false)
	const handlerChange = e => setInputValue(e.target.value)

	useEffect(() => {
		let tID
		if (inputValue) {
			tID = setTimeout(async () => {
				const result = await fetchSearch(inputValue.trim())
				setSearchValue(result.products)
			}, 400)
		} else {
			setSearchValue([])
		}
		return () => clearTimeout(tID)
	}, [inputValue])

	return (
		<div style={{ position: "relative" }}>
			<input
				placeholder="Начать поиск"
				className="input_search"
				value={inputValue}
				onChange={handlerChange}
				onFocus={handlerFocus}
				onBlur={handlerBlur}
			/>
			{isShow && (
				<div className="input_search_sublist">
					{searchValue.length ? <SearchList data={searchValue}/> : (
						<>
							<AiOutlineSearch/> Ничего не найдено
						</>
					)}
				</div>
			)}
		</div>
	)

}

export default Search