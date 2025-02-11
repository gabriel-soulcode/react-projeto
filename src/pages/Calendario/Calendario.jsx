import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Calendario() {
  const [dadosIBGE, setDadosIBGE] = useState([]);

  async function buscarDados() {
    const endpoint = "https://servicodados.ibge.gov.br/api/v3/calendario";
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
            <tr key={dado.id}>
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
