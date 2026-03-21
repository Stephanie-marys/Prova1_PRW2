import './marca.css';

const Produtos = ({ nome, preco, marca, condicao }) => {

  const imagens = {
    HP: "https://logo.clearbit.com/hp.com",
    Dell: "https://logo.clearbit.com/dell.com",
    Asus: "https://logo.clearbit.com/asus.com",
    Positivo: "https://logo.clearbit.com/positivo.com.br",
    "Xing Ling": "https://via.placeholder.com/100"
  };

  return (
    <div className="card">

      <img src={imagens[marca]} alt={marca} />

      <h4>{nome}</h4>
      <p>R$ {preco}</p>
      <span>{condicao}</span>

    </div>
  );
};

export default Produtos;