import React, {useState} from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";
import Estado from "../Estado/Estado";

const Formulario = (props) => {
  const marcas = ["HP", "Dell", "Positivo", "Asus", "Shopee"];
  const logos = {
    "HP": "/imagens/HP.png",
    "Dell": "/imagens/Dell.png",
    "Positivo": "/imagens/Positivo.png",
    "Asus": "/imagens/Asus.png",
    "Shopee": "/imagens/Shopee.png"
}
  const estados = ["Novo", "Usado"];

  const [secao, setSecao] = useState("Computadores");
  const [marca, setMarca] = useState("HP");
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [estado, setEstado] = useState('');
  
  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoProdCadastrado(
      {
        "secao": secao,
        "marca": logos[marca],
        "nome": nome,
        "preco": preco,
        "estado": estado
      }
    )
  }
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Dados do Produto</h2>
        <ListaSuspensa label="Seção" itens={props.secoes} aoAlterado={valor => setSecao(valor)}/>
        <ListaSuspensa label="Marca" itens={marcas} aoAlterado={valor => setMarca(valor)}/>
        <CampoTexto type="text" label="Nome" placeholder="Digite o nome" aoAlterado={valor => setNome(valor)}/>
        <CampoTexto type="number" label="Preco" placeholder="Digite o preço" aoAlterado={valor => setPreco(valor)}/>
        {estados.map(opt => <Estado key={opt} valor={opt} aoAlterado={valor => setEstado(valor)}/>)}<br/>
        <Botao>Inserir Produto</Botao>
      </form>
    </section>
  );
};
export default Formulario;
