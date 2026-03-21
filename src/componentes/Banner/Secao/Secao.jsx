import React from "react";
import './Secao.css';
const Secao = (props) => {

    return (
        <section className="Secao" style={{backgroundColor: props.corSecundaria}}>
            <h3 >{props.nome}</h3>

            {props.produtos.map( prof => <Produtos
                key={prof.nome}
                produto={prof.nome}
                preco={prof.preco}
                marca={prof.marca}
/> )}
        </section>
)
}
export default Secao;