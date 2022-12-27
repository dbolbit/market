import React from "react"
import { BiPhoneCall, BiNavigation } from "react-icons/bi"
import { FiInstagram } from "react-icons/fi"
import { MdOutlineLocalPostOffice } from "react-icons/md"

const Footer = (props) => {
	return (
		<footer>
			<div className="footer_wrapper">
				<ul>
					<li><b>MyShop онлайн</b></li>
					<li>Электроника</li>
					<li>Красота и здоровье</li>
					<li>Продукты</li>
					<li>Товары для дома</li>
					<li>Одежда обувь, аксессуары</li>
					<li>Другое</li>
				</ul>
				<ul>
					<li><b>MyShop клуб</b></li>
					<li>Акции</li>
					<li>Доставка и оплата</li>
					<li>Програма лояльности</li>
					<li>Политика конфиденциальности</li>
					<li>Вакансии</li>
				</ul>


				<ul> {/*style={{ width: "100%" }}*/}
					<li><h2>+38(099)-999-99-99</h2></li>
					<li><BiNavigation size={20}/>Адреса магазинов</li>
					<li><FiInstagram size={20}/> Instagram</li>
					<li><MdOutlineLocalPostOffice size={20}/>Обратная связь</li>
				</ul>
			</div>
			<div className="copyright">© 2022 MyShop online — Интернет супермаркет</div>
		</footer>
	)
}

export default Footer
