import React, { useEffect, useState } from 'react'
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

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [inativo, setInativo] = useState(true);

  useEffect(() => {
    if (nome.length == 0 || email.length == 0) {
      setInativo(true);
    } else {
      setInativo(false);
    }
  }, [nome, email]);

  return (
    <div>
      <h1>Cadastro</h1>
      <Link to="/">Home</Link>

      <br /><br />
      <p>{nome} - {email}</p>

      <input type="text" placeholder="Digite seu nome" onChange={event => {
        const texto = event.target.value;
        setNome(texto);
      }} /> <br />

      <input type="text" placeholder="Digite seu email" onChange={event => {
        const texto = event.target.value;
        setEmail(texto);
      }} /> <br />

      <button onClick={cadastrar} disabled={inativo}>
        Cadastrar
      </button>
    </div>
  );
}
