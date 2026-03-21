import React, { useState } from "react";
import './Formulario.css';
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import CampoTexto from "../CampoTexto/CampoTexto";
import Botao from "../Botao/botao";

const Formulario = (props) => {

    const secoes=[
        'Computadores',
        'Acessórios',
        'Impressoras',
        'Games',
        'Gadgets'
    ]

    const marcas=[
        'Dell',
        'Asus',
        'Positivo',
        'Hp',
        'Xing-ling'
    ]

    const [produto, setProduto] = useState('')
    const [preco, setPreco] = useState('')
    const [secao, setSecao] = useState('')
    const [marca, setMarca] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoProdCadastrado({
            "Produto": produto,
            "Preço": preco,
            "Seção": secao,
            "Marca": marca
        })
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Dados do produto:</h2>
                <CampoTexto 
                    label="Produto" 
                    placeholder="Informe o produto"
                    valor={produto}
                    aoAlterado={valor => setProduto(valor)}/>
                <CampoTexto 
                    label="Preço" 
                    placeholder="Informe o preço"
                    valor={preco}
                    aoAlterado={valor => setPreco(valor)}/>
                <ListaSuspensa 
                    label="Seções" 
                    itens={secoes}
                    valor={secao}
                    aoAlterado={valor => setSecao(valor)}/>
                <ListaSuspensa 
                    label="Marca"
                    itens={marcas}
                    valor={marca}
                    aoAlterado={valor => setMarca(valor)}/>
                <Botao>Salvar Produto</Botao>
            </form>
        </section>
    )
}

export default Formulario;