import React from "react";
import "./Lista.css";

const Lista = (props) => {
    return (
        <div className="lista">
            <h2>Lista de Produtos</h2>
            {props.objetos.map((objeto, index) => (
                <div key={index}>
                    {/* <img src=""/> */}
                    <strong>{objeto.nome}</strong><br/>
                    <strong>{objeto.preco}</strong><br/>
                    <hr/>
                </div>
            ))}
        </div>
    )
}
export default Lista;