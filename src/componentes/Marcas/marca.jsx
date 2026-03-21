import './marca.css';

const logosLocais = {
  HP:          '/imagens/hp.png',
  Dell:        '/imagens/dell.png',
  Positivo:    '/imagens/positivo.png',
  Asus:        '/imagens/asus.png',
  'Xing Ling': '/imagens/xing.png',
};

const ProdutoCard = ({ nome, preco, marca, condicao }) => {
  return (
    <div className="card">
      <img
        src={logosLocais[marca]}
        alt={marca}
        className="card-logo"
      />
      <h4 className="card-nome">{nome}</h4>
      <p className="card-preco">R$ {Number(preco).toFixed(2)}</p>
      <span className={`card-condicao ${condicao === 'Novo' ? 'novo' : 'usado'}`}>
        {condicao}
      </span>
    </div>
  );
};

export default ProdutoCard;