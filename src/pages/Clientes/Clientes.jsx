import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Clientes() {
  const [clientes, setClientes] = useState([]);
  const { handleSubmit, register } = useForm();

  async function carregarClientes() {
    const resposta = await axios.get("http://localhost:3000/clientes");
    setClientes(resposta.data);
  }

  async function salvarCliente(dados) {
    await axios.post("http://localhost:3000/clientes", dados);
    carregarClientes();
  }

  async function excluirCliente(id) {
    const confirmacao = window.confirm("Tem certeza que deseja excluir o cliente?");
    if (confirmacao) {
      await axios.delete(`http://localhost:3000/clientes/${id}`);
      carregarClientes();
    }
  }

  async function editarCliente(cliente) {
    const nome = window.prompt("Digite o nome do cliente:", cliente.nome);
    const email = window.prompt("Digite o email do cliente:", cliente.email);
    const dataNascimento = window.prompt("Digite a data de nascimento do cliente:", cliente.dataNascimento);
    const cpf = window.prompt("Digite o CPF do cliente: ", cliente.cpf);

    const dados = { nome, email, dataNascimento, cpf };
    await axios.put(`http://localhost:3000/clientes/${cliente.id}`, dados);
    carregarClientes();
  }

  useEffect(() => {
    carregarClientes();
  }, []);

  return (
    <Container>
      <h1>Clientes</h1>
      <Link to="/">Home</Link>

      <Form onSubmit={handleSubmit(salvarCliente)} className="my-5">
        <Form.Group className="mb-3" controlId="cliente.nome">
          <Form.Label>Cliente</Form.Label>
          <Form.Control {...register("nome")} type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="cliente.email">
          <Form.Label>Email</Form.Label>
          <Form.Control {...register("email")} type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="cliente.dataNascimento">
          <Form.Label>Data de Nascimento</Form.Label>
          <Form.Control {...register("dataNascimento")} type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="cliente.cpf">
          <Form.Label>CPF</Form.Label>
          <Form.Control {...register("cpf")} type="text" />
        </Form.Group>
        <Button type="submit">Cadastrar</Button>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Data de Nascimento</th>
            <th>CPF</th>
            <th>Excluir</th>
            <th>Editar</th>
          </tr>
        </thead>

        <tbody>
          {clientes.map(cliente => (
            <tr key={cliente.id}>
              <td>{cliente.nome}</td>
              <td>{cliente.email}</td>
              <td>{cliente.dataNascimento}</td>
              <td>{cliente.cpf}</td>
              <td>
                <Button onClick={() => excluirCliente(cliente.id)}>
                  Excluir
                </Button>
              </td>
              <td>
                <Button onClick={() => editarCliente(cliente)}>
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
