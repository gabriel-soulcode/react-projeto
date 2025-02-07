import React, { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Vendas() {
  const [produto, setProduto] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [desabilitado, setDesabilitado] = useState(true);

  function handleProduto(event) {
    const texto = event.target.value;
    setProduto(texto);
  }

  function handleQuantidade(event) {
    const texto = event.target.value;
    setQuantidade(Number(texto));
  }

  useEffect(() => {
    if (produto.length > 3 && quantidade > 0) {
      setDesabilitado(false);
    } else {
      setDesabilitado(true);
    }
  }, [produto, quantidade]);

  return (
    <Container>
      <h1>Vendas</h1>

      <Form.Label htmlFor="produto">Produto</Form.Label>
      <Form.Control type="text" id="produto" className="mb-3" onChange={handleProduto} />

      <Form.Label htmlFor="quantidade">Quantidade</Form.Label>
      <Form.Control type="number" id="quantidade" className="mb-3" onChange={handleQuantidade} />

      <Button variant="success" disabled={desabilitado}>Realizar Venda</Button>
      <br />

      <Link to="/">Voltar para Home</Link>
    </Container>
  );
}
