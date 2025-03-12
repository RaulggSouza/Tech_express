import React from "react";
import "./Produto.css";

const Produto = (props) => {
    return (
        <div className="produto">
            <div className="cabecalho">
                <img src={props.marca} alt={props.nome}/>
            </div>
            <div className="rodape">
                <h4>{props.nome}</h4>
                <h5>R$ {Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL"}).format(props.preco)}</h5>
                <h6>{props.estado}</h6>
            </div>
        </div>
    )
}

export default Produto;