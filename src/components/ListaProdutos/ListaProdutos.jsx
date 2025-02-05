import React from 'react'
import Produto from '../Produto/Produto'

export default function ListaProdutos() {
  const produtos = [
    { nome: "Oculos de Grau", imagem: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { nome: "Raquete de Tênis", imagem: "https://images.unsplash.com/photo-1617883861744-13b534e3b928?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { nome: "Bateria", imagem: "https://images.unsplash.com/photo-1568153354382-6bcd1d46568b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ]


  return (
    <div>
      {(produtos.length == 0) && <p>Nenhum produto disponível no momento.</p>}

      {produtos.map((produto, index) => (
        <Produto key={index} nome={produto.nome} imagem={produto.imagem} />
      ))}
    </div>
  )
}
