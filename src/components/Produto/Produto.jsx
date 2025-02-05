import React from 'react'
import "./Produto.css";

export default function Produto(props) {
  return (
    <div className="produto">
      <h3>{props.nome}</h3>
      <img src={props.imagem} alt={props.nome} />
    </div>
  )
}
