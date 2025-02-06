import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Cadastro() {
  const navigate = useNavigate();

  function cadastrar() {
    // salvar seu cadastro no banco de dados
    setTimeout(() => {
      // redirecionar a pagina home
      navigate("/");
    }, 3000);
  }

  return (
    <div>
      <h1>Cadastro</h1>
      <Link to="/">Home</Link>

      <br /><br />
      <input type="text" placeholder="Digite seu nome" />

      <button onClick={cadastrar}>
        Cadastrar
      </button>
    </div>
  );
}
