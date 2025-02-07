import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/cadastro">Cadastro</Link>
      <br />
      <Link to="/estoque">Estoque</Link>
      <br />
      <Link to="/vendas">Vendas</Link>
      <br /><br />

      <Button variant="danger">Saiba mais</Button>
    </div>
  );
}
