import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function Login() {
  const { handleSubmit, register } = useForm();
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  function enviarLogin(dados) {
    console.log(dados);
  }

  return (
    <Container>
      <h1>Login</h1>

      <Form onSubmit={handleSubmit(enviarLogin)} className="mt-4">
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>
            Email
            <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control {...register("email", { required: true, pattern: regexEmail })} type="email" placeholder="name@example.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="senha">
          <Form.Label>
            Senha
            <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control {...register("senha", { required: true })} type="password" placeholder="Digite sua senha" />
        </Form.Group>

        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  );
}