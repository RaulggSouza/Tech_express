import React from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";

const Formulario = () => {
  const sessoes = ["Computadores", "Acessórios", "Impressoras", "Games", "Gadgets"];
  const marcas = ["HP", "Dell", "Positivo", "Asus", "Genérico"];
  return (
    <section className="formulario">
      <form>
        <h2>Dados do Produto</h2>
        <ListaSuspensa label="Seção" itens={sessoes} />
        <ListaSuspensa label="Marca" itens={marcas} />
        <CampoTexto label="Nome" placeholder="Digite o nome" />
        <CampoTexto label="Preco" placeholder="Digite o preço" />
      </form>
    </section>
  );
};
export default Formulario;
