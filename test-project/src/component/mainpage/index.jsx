import React from "react"
import CardsCarouselProduct from "../../pages/cards/cardsCarousel";
import CardsProduct from "../../pages/cards/cardsProduct";
import CarouselProduct from "../../pages/carousel/carouselProduct";
import NavBar from "../header";
import '../header/styles.css'

const MainPage = () => {
    return (
        <div>
            <NavBar />
            <CarouselProduct />
            <CardsCarouselProduct />
            <CardsProduct />
        </div>
    )
}

export default MainPage