import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function Calendario() {
  const [dadosIBGE, setDadosIBGE] = useState([]);
  const { handleSubmit, register } = useForm();

  async function buscarDados() {
    const endpoint = "https://servicodados.ibge.gov.br/api/v3/calendario?qtd=20&de=2025-08-01&ate=2025-09-01";
    const resposta = await axios.get(endpoint);
    const json = resposta.data;
    setDadosIBGE(json.items);
  }

  async function buscarDadosPesquisa(dados) {
    const { id } = dados;
    const endpoint = "https://servicodados.ibge.gov.br/api/v3/calendario/" + id;
    const resposta = await axios.get(endpoint);
    const json = resposta.data;
    setDadosIBGE(json.items);
  }

  useEffect(() => {
    buscarDados();
  }, []);

  return (
    <Container>
      <h1>Calendário Governo</h1>
      <Link to="/">Home</Link>

      <Form onSubmit={handleSubmit(buscarDadosPesquisa)} className="my-5">
        <Form.Group className="mb-3" controlId="pesquisa">
          <Form.Label>Digite o ID da Pesquisa</Form.Label>
          <Form.Control {...register("id")} type="text" />
        </Form.Group>

        <Button type="submit">Procurar</Button>
      </Form>

      <table className="w-100">
        <thead>
          <tr>
            <th className="border-2 p-2">Pesquisa</th>
            <th className="border-2 p-2">Data de Divulgação</th>
            <th className="border-2 p-2">Descrição</th>
          </tr>
        </thead>
        <tbody>
          {dadosIBGE.map(dado => (
            <tr key={dado.id} id={dado.produto_id}>
              <td className="border-2 p-2">{dado.titulo}</td>
              <td className="border-2 p-2">{dado.data_divulgacao}</td>
              <td className="border-2 p-2">{dado.descricao_produto}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
