import React, { useState } from 'react';
import "./Estoque.css";
import { Link } from 'react-router-dom';

export default function Estoque() {
  const [produtos, setProdutos] = useState([
    { nome: "Computador", categoria: "Eletrônicos", preco: 4999, quantidade: 300 },
    { nome: "Panela", categoria: "Cozinha", preco: 120, quantidade: 1000 },
    { nome: "Traveseiro", categoria: "Cama", preco: 50, quantidade: 1500 },
    { nome: "Bicicleta", categoria: "Esportes", preco: "4500", quantidade: 50 }
  ]);

  return (
    <div>
      <h1>Estoque</h1>

      <table className="tb-estoque">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Preço</th>
            <th>Quantidade</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map(produto => (
            <tr key={produto.nome}>
              <td>{produto.nome}</td>
              <td>{produto.categoria}</td>
              <td>R$ {produto.preco}</td>
              <td>{produto.quantidade}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/">Voltar para Home</Link>
    </div>
  );
}
