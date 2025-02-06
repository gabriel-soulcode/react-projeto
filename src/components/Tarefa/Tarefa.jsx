import React from 'react'
import "./Tarefa.css";

export default function Tarefa(props) {
  return (
    <div className="tarefa">
      <p>{props.descricao}</p>
      <p>{props.concluida ? "Concluido" : "Pendente"}</p>
    </div>
  )
}
