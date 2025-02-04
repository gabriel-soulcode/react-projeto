import "./PerfilUsuario.css";

export default function PerfilUsuario(props) {
  
  return (
    <div className="perfil-usuario">
      <h3>{props.nome}</h3>
      <p>
        {props.descricao}
      </p>
      <img src={props.foto} alt={props.nome} />
    </div>
  );
}