import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import ListaProdutos from "./components/ListaProdutos/ListaProdutos";
import PerfilUsuario from "./components/PerfilUsuario/PerfilUsuario";

function App() {
  // const carregando = false;
  // const erro = false;

  // if (erro) {
  //   return <p>Estamos com um problema. Tente mais tarde.</p>;
  // }

  // if (carregando) {
  //   return <p>Carregando...</p>;
  // }

  // const produtos = [
  //   { nome: "Biscoito", preco: 5.5, categoria: "Biscoitos" },
  //   { nome: "Leite", preco: 7.9, categoria: "Laticínios" },
  //   { nome: "Abacaxi", preco: 15.0, categoria: "Frutas" },
  // ];

  // return (
  //   <>
  //     <Header />
  //     <ul>
  //       {produtos.map((produto) => (
  //         <li key={produto.nome}>
  //           {produto.nome} R$ {produto.preco} <b>{produto.categoria}</b>
  //         </li>
  //       ))}
  //     </ul>

  //     <h2>Produtos</h2>
  //     <ListaProdutos />

  //     <h2>Usuários</h2>
  //     <PerfilUsuario
  //       nome="Neymar Santos"
  //       descricao="Jogador profissional de futebol."
  //       foto="https://conteudo.imguol.com.br/c/esporte/a8/2025/01/31/neymar-posa-com-camisa-do-santos-1738361669157_v2_450x450.jpg"
  //     />
  //     <PerfilUsuario
  //       nome="Elon Musk"
  //       descricao="Burocrata proprietário da Tesla e SpaceX"
  //       foto="https://files.sunoresearch.com.br/p/uploads/2018/09/Elon-Musk.jpg"
  //     />
  //     <PerfilUsuario
  //       nome="Anitta"
  //       descricao="Cantora e artista brasileira"
  //       foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqPy-jp6OjwB1ymFM_ipqsXgCljcGIU_oUTw&s"
  //     />

  //     <Button>Clique Aqui</Button>
  //   </>
  // );

  function calcularPercentual() {
    const numero = Number(window.prompt("Digite um número:"));
    const percentual = Number(window.prompt("Digite o percentual:"));
    const resultado = numero * (percentual / 100);
    window.alert(`O resultado é ${resultado}%`);
  }

  return (
    <div>
      <h1>Eventos</h1>

      <button onClick={calcularPercentual}>
        Calcular Percentual
      </button>

      <h2>Raiz Quadrada</h2>
      
      <input type="text" id="numero" placeholder="Digite um numero" onChange={event => {
        const numero = event.target.value;
        if (numero.length > 4) {
          window.alert("Numero maximo de 4 digitos");
        }
      }} />
      
      <button onClick={() => {
        const input = document.querySelector("#numero");
        const numero = Number(input.value);
        const raiz = Math.sqrt(numero);
        input.value = raiz;
      }}>
        Calcular
      </button>

      <h2>Contador</h2>
      <Contador />

      <h2>Formulário</h2>
      <Formulario />

    </div>
  );
}

function Formulario() {
  let [nome, setNome] = useState("");

  return (
    <div>
      <p>{nome}</p>
      <input type="text" onChange={event => {
        const texto = event.target.value;
        setNome(texto);
      }} />
    </div>
  );
}

function Contador() {
  let [n, setN] = useState(0);

  return (
    <div>
      <p>Numero: {n}</p>

      <button onClick={() => {
        setN(n+1)
      }}>+</button>

      <button onClick={() => {
        setN(n-1);
      }}>-</button>
    </div>
  )
}

export default App;