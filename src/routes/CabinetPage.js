import React from "react"
import { Link, Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"

const CabinetPage = (props) => {
	const isActiveClass = { backgroundColor: "white", color: "black", borderBottom: "2px solid red" }

	return (
		<div className={"cabinet_container"}>
			<h1>ЛИЧНЫЙ КАБИНЕТ</h1>
			<section>
				<nav>
					<ul>
						<li><NavLink to="/cabinet" end>Личные данные</NavLink></li>
						<li><NavLink to="/cabinet/order-history">История заказов</NavLink></li>
						<li><NavLink to="/cabinet/favorite">Избранное</NavLink></li>
					</ul>
				</nav>
				<main>
					<Outlet/>
				</main>
			</section>
		</div>
	)

}

export default CabinetPage