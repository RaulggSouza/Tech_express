import React from "react";
import "./CampoTexto.css";

const CampoTexto = (props) => {
    const aoDigitado = (evento) => {
        let valor = evento.target.value;
        
        props.aoAlterado(valor)
    }
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input type={props.type || "text"} onChange={aoDigitado} placeholder={props.placeholder} step="any" required/>
        </div>
    )
}

export default CampoTexto;