import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const { handleSubmit, register } = useForm();

  async function carregarProdutos() {
    const resposta = await axios.get("http://localhost:3000/produtos");
    setProdutos(resposta.data);
  }

  async function salvarProduto(dados) {
    await axios.post("http://localhost:3000/produtos", dados);
    carregarProdutos();
  }

  async function excluirProduto(id) {
    const confirmacao = window.confirm("Tem certeza que deseja excluir este produto?");
    if (confirmacao) {
      await axios.delete(`http://localhost:3000/produtos/${id}`);
      carregarProdutos();
    }
  }

  async function editarProduto(produto) {
    const nome = window.prompt("Digite o nome do produto:", produto.nome);
    const preco = window.prompt("Digite o preco do produto:", produto.preco);
    const categoria = window.prompt("Digite a categoria do produto:", produto.categoria);
    
    const dados = { nome, preco, categoria };
    await axios.put(`http://localhost:3000/produtos/${produto.id}`, dados);
    carregarProdutos();
  }

  useEffect(() => {
    carregarProdutos();
  }, []);

  return (
    <Container>
      <h1>Produtos</h1>
      <Link to="/">Home</Link>

      <Form onSubmit={handleSubmit(salvarProduto)} className="my-5">
        <Form.Group className="mb-3" controlId="produto.nome">
          <Form.Label>Produto</Form.Label>
          <Form.Control {...register("nome")} type="text" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="produto.preco">
          <Form.Label>Preço (R$)</Form.Label>
          <Form.Control {...register("preco")} type="number" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="produto.categoria">
          <Form.Label>Categoria</Form.Label>
          <Form.Control {...register("categoria")} type="text" />
        </Form.Group>

        <Button type="submit">Cadastrar</Button>
      </Form>

      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço (R$)</th>
            <th>Categoria</th>
            <th>Excluir</th>
            <th>Editar</th>
          </tr>
        </thead>

        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.nome}</td>
              <td>{produto.preco}</td>
              <td>{produto.categoria}</td>
              <td>
                <Button onClick={() => excluirProduto(produto.id)} variant="danger">
                  Excluir
                </Button>
              </td>
              <td>
                <Button onClick={() => editarProduto(produto)}>
                  Editar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
