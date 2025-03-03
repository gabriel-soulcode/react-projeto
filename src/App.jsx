import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Cadastro from "./pages/Cadastro/Cadastro";
import NotFound from "./pages/NotFound/NotFound";
import Estoque from "./pages/Estoque/Estoque";
import Vendas from "./pages/Vendas/Vendas";
import Login from "./pages/Login/Login";
import Calendario from "./pages/Calendario/Calendario";
import Produtos from "./pages/Produtos/Produtos";
import Clientes from "./pages/Clientes/Clientes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/estoque" element={<Estoque />} />
        <Route path="/vendas" element={<Vendas />} />
        <Route path="/login" element={<Login />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;