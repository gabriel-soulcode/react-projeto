import "./App.css";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import ListaProdutos from "./components/ListaProdutos/ListaProdutos";
import PerfilUsuario from "./components/PerfilUsuario/PerfilUsuario";

function App() {
  const carregando = false;
  const erro = false;

  if (erro) {
    return <p>Estamos com um problema. Tente mais tarde.</p>;
  }

  if (carregando) {
    return <p>Carregando...</p>;
  }

  const produtos = [
    { nome: "Biscoito", preco: 5.5, categoria: "Biscoitos" },
    { nome: "Leite", preco: 7.9, categoria: "Laticínios" },
    { nome: "Abacaxi", preco: 15.0, categoria: "Frutas" },
  ];

  return (
    <>
      <Header />
      <ul>
        {produtos.map((produto) => (
          <li key={produto.nome}>
            {produto.nome} R$ {produto.preco} <b>{produto.categoria}</b>
          </li>
        ))}
      </ul>

      <h2>Produtos</h2>
      <ListaProdutos />

      <h2>Usuários</h2>
      <PerfilUsuario
        nome="Neymar Santos"
        descricao="Jogador profissional de futebol."
        foto="https://conteudo.imguol.com.br/c/esporte/a8/2025/01/31/neymar-posa-com-camisa-do-santos-1738361669157_v2_450x450.jpg"
      />
      <PerfilUsuario
        nome="Elon Musk"
        descricao="Burocrata proprietário da Tesla e SpaceX"
        foto="https://files.sunoresearch.com.br/p/uploads/2018/09/Elon-Musk.jpg"
      />
      <PerfilUsuario
        nome="Anitta"
        descricao="Cantora e artista brasileira"
        foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqPy-jp6OjwB1ymFM_ipqsXgCljcGIU_oUTw&s"
      />

      <Button>Clique Aqui</Button>
    </>
  );
}

export default App;
