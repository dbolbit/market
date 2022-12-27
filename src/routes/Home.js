import React, {useState, useLayoutEffect} from "react"
import Carusel from "../components/carusel/Carusel"
import Container from "../components/Container"
import useScreen from "../hooks/useScreen"
import {SlideOne, SlideTwo, SlideThree} from "../components/carusel/Slide"

const Home = (props) => {
  const screenSize = useScreen()
  const [isLarge, setIsLarge] = useState(true)
  useLayoutEffect(() => screenSize >= 1024 ? setIsLarge(true) : setIsLarge(false))
  return (
    <Container style={{minHeight: '90vh'}}>
      <div className="carusel_wrapper" style={{flexDirection: isLarge ? "row" : "column"}}>
        <Carusel>
          <SlideOne/>
          <SlideTwo/>
          <SlideThree/>
        </Carusel>
        <section style={{flexDirection: isLarge ? "column" : "row"}}>
          <div className={isLarge ? "slider_section_one large" : "slider_section_one small"}></div>
          <div className={isLarge ? "slider_section_two large" : "slider_section_two small"}></div>
        </section>
      </div>
    </Container>
  )

}

export default Home