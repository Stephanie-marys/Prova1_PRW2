import './marca.css';
import hp from './hp.png';
import dell from './dell.png';
import positivo from './positivo.png';
import asus from './asus.png';
import xing from './xing.png';

const logosLocais = {
  'HP':        hp,
  'Dell':      dell,
  'Positivo':  positivo,
  'Asus':      asus,
  'Xing Ling': xing,
};

const Produtos = ({ nome, preco, marca, condicao }) => {
  return (
    <div className="card">
      <div className="card-imagem">
        <img
          src={logosLocais[marca]}
          alt={marca}
          className="card-logo"
        />
      </div>
      <h4 className="card-nome">{nome}</h4>
      <p className="card-preco">R$ {Number(preco).toFixed(2)}</p>
      <span className={`card-condicao ${condicao === 'Novo' ? 'novo' : 'usado'}`}>
        {condicao}
      </span>
    </div>
  );
};

export default Produtos;