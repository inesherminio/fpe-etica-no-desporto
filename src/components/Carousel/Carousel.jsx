import React from "react";
import "./Carousel.css";
import Carousel from "react-bootstrap/Carousel";

function CarouselElem() {
  return (
    <div className="container">
      <Carousel variant="dark" style={{ width: "30vw" }}>
        <Carousel.Item>
          <div className="item-container"></div>
          <Carousel.Caption>
            <h6 className="carousel-info carousel-info-h6">
              A esgrima, como a aritmética, não aceita opiniões. É um fato
              governado por leis seguras, fixas e testadas, que, mesmo que
              tolerem alguma ligeira variação na sua forma externa, geralmente
              permanecem intactas em substância, porque conduzem sempre ao mesmo
              resultado idêntico.
            </h6>
            <p className="carousel-info carousel-info-p">Eugénio Pini (1904)</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="item-container"></div>
          <Carousel.Caption>
            <h6 className="carousel-info carousel-info-h6">
              A esgrima é um jogo de xadrez vivo, uma partida em que os reflexos
              só funcionam em combinação com a intenção, em que a mente e o
              corpo devem trabalhar juntos a cada momento.
            </h6>
            <p className="carousel-info carousel-info-p">VE Schwab (2017)</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="item-container"></div>
          <Carousel.Caption>
            <h6 className="carousel-info carousel-info-h6">
              Quando olhamos para os benefícios da esgrima chegamos à conclusão
              de que há muitos, abrangendo todas as virtudes do céu e da terra.
            </h6>
            <p className="carousel-info carousel-info-p">
              Yagyu Muneyoshi (séc. XVII)
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselElem;
