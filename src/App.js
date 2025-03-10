import React, {useState} from "react";
import Formulario from "./componentes/Formulario/Formulario";
import Banner from "./componentes/Banner/Banner";
import Lista from "./componentes/Lista/Lista";

function App() {
  const [produtos, setProdutos] = useState([]);

  const adicionaProd = (prod) => {
    const listaNova = produtos.slice();
    listaNova.push(prod);
    setProdutos(listaNova);
  }

  return (
    <div>
      <Banner/>
      <Formulario aoProdCadastrado={prod => adicionaProd(prod)}/>
      <Lista objetos={produtos}/>
    </div>
  );
}

export default App;
