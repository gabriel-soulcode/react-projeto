import React from "react";

export default function Header() {
  const logado = true;

  return (
    <header>
      <h1>Mercado Code</h1>

      {!logado && (
        <p>Faça login para acessar mais dados.</p>
      )}

      {logado ? (
        <button>Logout / Sair</button>
      ) : (
        <button>Login / Entrar</button>
      )}
    </header>
  );
}

// para gerar o componente use o snippet "rfc"
