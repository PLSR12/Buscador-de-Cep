import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./styles.css";
import api from "./services/api";

function App() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});

  async function searchHandler() {
    if (input === "") {
      alert("Preencha o campo");
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      console.log(response.data);
      setInput("");
    } catch (error) {
      alert("Erro ao buscar o Cep");
      setInput("");
    }
  }

  return (
    <div className="container">
      <h1 className="title"> Buscador de CEP </h1>
      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu Cep"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="buttonSearch" onClick={searchHandler}>
          <FiSearch size={25} color="black" />
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2> CEP : {cep.cep}</h2>
          <span> {cep.logradouro} </span>
          <span>
            {" "}
            {cep.localidade} - {cep.uf}
          </span>
        </main>
      )}
    </div>
  );
}

export default App;
