import React from 'react';
import { Link } from 'react-router-dom'

export default function Cadastro() {
  
  function cadastrar() { }

  return (
    <div>
      <h1>Cadastro</h1>
      <Link to="/">Home</Link>

      <input type="text" placeholder="Digite seu nome" />
      <br />

      <input type="text" placeholder="Digite seu email" />
      <br />

      <button>Cadastrar</button>
    </div>
  );
}
