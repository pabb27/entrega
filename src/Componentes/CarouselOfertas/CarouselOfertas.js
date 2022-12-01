import React from "react";
import "./CarouselOfertas.css";

import Carousel from 'react-bootstrap/Carousel';

import Oferta1 from "./Imagenes/OfertaSemana1.jpeg"
import Oferta2 from "./Imagenes/OfertaSemana2.jpeg"
import Oferta3 from "./Imagenes/OfertaSemana3.jpeg"

import o1 from "./Imagenes/o1.png"
import o2 from "./Imagenes/o2.png"
import o3 from "./Imagenes/o3.png"
import o4 from "./Imagenes/o4.png"

/*const CarouselOfertas = () => {
    return(
        <div> Soy un CarruselOfertas 
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Oferta1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Oferta2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Oferta3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    );}

export default CarouselOfertas;*/


function CarouselFadeExample() {
  return (
    
    <div className="contenedorCarousel">
      <div className="titulo-oferta"> <h1> OFERTAS DE ESTA SEMANA </h1> </div>
    <Carousel fade className="tamanoCarousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={o1} 
          alt="Desodorante de pisos Lavanda"
        />
        <Carousel.Caption>
          <h3>Desodorante pisos x 5L</h3>
          <p>Aroma: Lavanda <b> $200 </b> </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={o2} 
          alt="Kothrina"
        />
        <Carousel.Caption>
          <h3>K-othrina x 5L</h3>
          <p>Cucarachicida  <b>$350 </b> </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={o3} 
          alt="Lavandina en gel"
        />
        <Carousel.Caption>
          <h3>Lavandina gel x 5L</h3>
          <p> No mancha ni salpica! <b> $400 </b> </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={o4} 
          alt="Shampoo para mascotas"
        />
        <Carousel.Caption>
          <h3>Shampoo mascotas x 5L</h3>
          <p> Pulguicida <b>$500 </b> </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselFadeExample;
