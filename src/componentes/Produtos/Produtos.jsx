import Produtos from "./Produtos";

import './Produtos.css';

const Prods = ({ nome, preco, imagem, secao }) => {
  return (
    <div className="produto-card">
      {imagem && <img src={imagem} alt={nome} />}
      <h4>{nome}</h4>
      <p>R$ {preco}</p>
      <span>{secao}</span>
    </div>
  );
};

export default Prods;