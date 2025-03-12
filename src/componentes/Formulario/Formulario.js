import React, {useState} from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";

const Formulario = (props) => {
  const marcas = ["HP", "Dell", "Positivo", "Asus", "Genérico"];
  
  const [secao, setSecao] = useState("Computadores");
  const [marca, setMarca] = useState("HP");
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');

  const aoSalvar = (evento) => {
    evento.preventDefault();
    // console.log("Submetido com sucesso => ", nome, preco, secao, marca);
    props.aoProdCadastrado(
      {
        "secao": secao,
        "marca": marca,
        "nome": nome,
        "preco": preco
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
        <Botao>Inserir Produto</Botao>
      </form>
    </section>
  );
};
export default Formulario;
