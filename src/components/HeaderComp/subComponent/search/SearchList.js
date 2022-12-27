import React from "react"

const SearchList = ({ data }) => {
	console.log(data)
	return (
		<ul style={{ width: "100%" }}>
			{data.map(elem => (
				<li
					key={elem.id}
					style={{
						margin: "5px 0",
						height: 50,
						display: "flex",
						alignItems: "center",
						borderBottom: "1px solid lightgrey"
					}}>
					<img height={50} width={50} src={elem.thumbnail}/>
					<h3 style={{ marginLeft: 5 }}>{elem.title}</h3>
				</li>
			))}
		</ul>
	)
}

export default SearchList