import React, {useState} from "react";
import Formulario from "./componentes/Formulario/Formulario";
import Banner from "./componentes/Banner/Banner";
import Secao from "./componentes/Secao/Secao";

function App() {
  const [produtos, setProdutos] = useState([]);
  const secoes = ["Computadores", "Acessórios", "Impressoras", "Games", "Gadgets"];

  const adicionaProd = (prod) => {
    const listaNova = produtos.slice();
    listaNova.push(prod);
    setProdutos(listaNova);
  }

  return (
    <div>
      <Banner/>
      <Formulario secoes={secoes} aoProdCadastrado={prod => adicionaProd(prod)}/>
      {secoes.map(secao => <Secao key={secao} texto={secao} produtos={produtos.filter(prod => prod.secao === secao)}/>)}
    </div>
  );
}

export default App;
