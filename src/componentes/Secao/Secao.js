import React from "react";
import "./Secao.css";
import Produto from "../Produto/Produto";

const Secao = (props) => {
    return (
        (props.produtos.length > 0) ? <section className="secao">
            <h3>{props.texto}</h3>
            <div className="produtos">
                {props.produtos.map(prod => <Produto key={prod.nome} nome={prod.nome} preco={prod.preco} marca={prod.marca}/>)}
            </div>
        </section>
        : ''
    )
}
export default Secao