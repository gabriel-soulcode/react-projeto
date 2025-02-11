import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Cadastro() {
  const { handleSubmit, register, formState } = useForm();
  const { errors } = formState;
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  function cadastrar(dados) {
    console.log(dados);
  }

  return (
    <Container>
      <h1>Cadastro</h1>
      <Link to="/">Home</Link>

      <Form onSubmit={handleSubmit(cadastrar)} className="mt-4">
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>
            Nome
            <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            {...register("nome", {
              required: { value: true, message: "Preencha com seu nome." },
            })}
            type="text"
            placeholder="Digite seu nome"
          />
          <small className="text-danger">{errors.nome?.message}</small>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>
            Email
            <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            {...register("email", {
              required: { value: true, message: "Preencha com seu email" },
              pattern: { value: regexEmail, message: "E-mail inválido." },
            })}
            type="email"
            placeholder="Digite seu email"
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
              minLength: { value: 6, message: "Minimo de 6 caracteres." },
              maxLength: { value: 20, message: "Maximo de 20 caracters." },
            })}
            type="password"
            placeholder="Digite sua senha"
          />
          <small className="text-danger">{errors.senha?.message}</small>
        </Form.Group>

        <Button type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
}
