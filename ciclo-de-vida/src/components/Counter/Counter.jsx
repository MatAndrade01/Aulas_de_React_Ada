import React from "react";

export class Counter extends React.Component {

  constructor() {
    super()
    this.state = {contador: 0}

    console.log("Montando a Classe Counter")
  }

  // Não usar!!!!
  UNSAFE_componentWillMount() {
    console.log("O nosso componente Contador sera montado")
  }

  componentDidMount() {
    console.log("O componente foi montado 🆗")

    document.addEventListener("scroll", () => {
      console.log("Rolando a pagina")
    })
  }

  // Metodo chamado sempre que um estado ou uma prop atualize
  shouldComponentUpdate() {
    return true;
  }

  // Não usar!!!
  UNSAFE_componentWillUpdate() {
    console.log("O componente será atualizado!")
  }

  componentDidUpdate() {
    console.log("O componente Counter foi atulizado!!")
  }

  componentWillUnmount() {
    console.log("O componente sera desmontado!")
    
    document.removeEventListener("scroll", this.consoleScroll)
  }

  consoleScroll() {
    console.log("Rolando a pagina")
  }

  render() {
    console.log("Renderizando o nosso componente Counter...")
    return(
      <div>
        <h1>{this.state.contador}</h1>

        <button 
          onClick={
            () => this.setState({contador: this.state.contador - 1})
          }
        >Diminuir</button>
        <button 
          onClick={
            () => this.setState({contador: this.state.contador + 1})
          }
        >Aumentar</button>
      </div>
    )
  }
}