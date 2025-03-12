import React from "react";
import "./Estado.css";

const Estado = (props) => {
    const aoSelecionado = (evento) => {
        props.aoAlterado(evento.target.value);
    }
    return (
        <div className="estado">
            <input type="radio" onChange={aoSelecionado} name="tipo" id={props.valor} value={props.valor} required/>
            <label htmlFor={props.valor}>{props.valor}</label>
        </div>
    )
}

export default Estado;