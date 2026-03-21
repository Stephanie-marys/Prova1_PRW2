import React from "react";
import './Formulario.css';
import CampoTexto from "../CampoTexto/CampoTexto";

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Dados do produto:</h2>
                <CampoTexto label ="Produto" placeholder="Informe o produto"/>
                <CampoTexto label="Preço" placeholder="Informe o preço" />
            </form>
        </section>
)
}
export default Formulario;