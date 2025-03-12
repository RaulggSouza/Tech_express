import React from "react";
import "./Produto.css";

const Produto = (props) => {
    return (
        <div className="produto">
            <div className="cabecalho">
                <img src="/imagens/rock.jpg" alt={props.nome}/>
            </div>
            <div className="rodape">
                <h4>{props.nome}</h4>
                <h5>{props.preco}</h5>
            </div>
        </div>
    )
}

export default Produto;