import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function Login() {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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
          <Form.Control
            {...register("email", {
              required: { value: true, message: "Preencha com seu email." },
              pattern: { value: regexEmail, message: "Email inválido." },
            })}
            type="email"
            placeholder="name@example.com"
          />
          <small className="text-danger">{errors.email?.message}</small>
        </Form.Group>

        <Form.Group className="mb-3" controlId="senha">
          <Form.Label>
            Senha
            <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            {...register("senha", {
              required: { value: true, message: "Preencha com sua senha." },
              maxLength: { value: 20, message: "Máximo de 20 caracteres." },
              minLength: { value: 6, message: "Minimo de 6 caracteres." }
            })}
            type="password"
            placeholder="Digite sua senha"
          />
          <small className="text-danger">{errors.senha?.message}</small>
        </Form.Group>

        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  );
}
