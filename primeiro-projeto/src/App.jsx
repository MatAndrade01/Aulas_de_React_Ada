import React from "react";
import './assets/styles/app.css';
import Navbar from "./components/Navbar/Navbar";


// Componente em classe é uma classe que hera a classe do Component do React, e retorna HTML dentro do método render

class App extends React.Component {

  //Metodo responsavel por renderizar o HTML do nosso componente
  render() {
    return (
      <Navbar />
    )
  }
}

export default App;
