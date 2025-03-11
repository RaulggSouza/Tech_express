import React from "react";
import "./Secao.css";

const Secao = (props) => {
    return (
        <section className="secao">
            <h3>{props.texto}</h3>
        </section>
    )
}
export default Secao