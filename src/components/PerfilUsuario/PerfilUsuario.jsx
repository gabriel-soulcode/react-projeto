// Criar um componente funcional chamado PerfilUsuario.
// O componente deve conter:
// 1. um nome (por exemplo, "João Silva"),
// 2. uma descrição curta (por exemplo, "Desenvolvedor Front-end apaixonado por tecnologia!") e 
// 3. uma imagem de perfil fixa (um link da internet).
// Estilizar o componente com CSS básico.
// Renderizar o PerfilUsuario no App.jsx.
// Lembrem-se de usar a sintaxe JSX corretamente.
import "./PerfilUsuario.css";

export default function PerfilUsuario() {
  return (
    <div className="perfil-usuario">
      <h3>Gabriel Braga</h3>
      <p>
        Professor de desenvolvimento full-stack na SoulCode Academy.
      </p>
      <img src="https://avatars.githubusercontent.com/u/118195805?v=4" alt="Gabriel Braga" />
    </div>
  );
}