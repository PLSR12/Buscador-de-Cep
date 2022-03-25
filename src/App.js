import React from "react";
import { FiSearch } from "react-icons/fi";
import "./styles.css"

function App() {
  return (
    <div className="container">
      <h1 className="title"> Buscador de CEP </h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite seu Cep" />
        <button className="buttonSearch">
          <FiSearch size={25} color="black" />
        </button>
      </div>
      <main className="main">
        <h2> CEP : 2456875</h2>
        <span> Rua Teste</span>
        <span> Complemento: Esquina da rua</span>
        <span> Rio de Janeiro -RJ</span>
      </main>
    </div>
  );
}

export default App;
