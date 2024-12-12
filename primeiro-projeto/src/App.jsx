import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";

import './assets/styles/app.css';

import dashboard from "./assets/images/dashboard.png";
import vibrante from "./assets/images/Vibrant Portraits of 2020.png";
import day36 from "./assets/images/36 Days of Malayalam type.png";

// Componente em classe é uma classe que hera a classe do Component do React, e retorna HTML dentro do método render

class App extends React.Component {

  //Metodo responsavel por renderizar o HTML do nosso componente
  render() {
    return (
      <>
      <Navbar />
      <section id="articles">
      <Article 
        title="Designing Dashboards" 
        provider="Nasa" 
        description ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus culpa consequuntur perferendis, voluptatum illum est quis vel a molestiae ducimus, maxime, ullam id voluptas assumenda dignissimos? Officiis est numquam dolor?"
        thubnail= {dashboard}
      />
      <Article 
        title="Vibrant Portraits of 2020"
        provider = "SpaceNews"
        description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus culpa consequuntur perferendis, voluptatum illum est quis vel a molestiae ducimus, maxime, ullam id voluptas assumenda dignissimos? Officiis est numquam dolor?"
        thubnail = {vibrante}
      /> 
      <Article 
        title="36 Days of Malayalam type"
        provider ="Spacefligth Now"
        description ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus culpa consequuntur perferendis, voluptatum illum est quis vel a molestiae ducimus, maxime, ullam id voluptas assumenda dignissimos? Officiis est numquam dolor?"
        thubnail = {day36}
      />
      <Article 
        title="Designing Dashboards"
        provider="Nasa"
        description ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus culpa consequuntur perferendis, voluptatum illum est quis vel a molestiae ducimus, maxime, ullam id voluptas assumenda dignissimos? Officiis est numquam dolor?"
        thubnail = {dashboard}
      />
      </section>
      </>
    )
  }
}

export default App;
