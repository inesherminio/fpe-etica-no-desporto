import React from "react";
import "../App.css";
import CarouselElem from "../components/Carousel/Carousel";
import Main from "../components/Main/Main";
import fotoEsgrima1 from "../images/esgrima1.jpg";
import mainData from "../data/main.json";

function Homepage() {
  return (
    <div
      className="homepage-container"
      style={{
        background: `url(${fotoEsgrima1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "0",
      }}
    >
      <div className="main-info-container">
        <Main data={mainData[0]} />
      </div>
      <div className="carousel-container">
        <CarouselElem />
      </div>
    </div>
  );
}

export default Homepage;
