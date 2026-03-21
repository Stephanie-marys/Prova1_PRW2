import Produtos from '../Produtos/Produtos';
import './Secao/Secao.css';

const Secao = ({ nome, corPrimaria, corSecundaria, produtos }) => {



  return (
    <section style={{ backgroundColor: corSecundaria }}>
      <h3 style={{ borderColor: corPrimaria }}>
        {nome}
      </h3>

      <div className="produtos">
        {produtos.map((produto) => (
          <Produtos key={produto.nome} {...produto} />
        ))}
      </div>
    </section>
  );
};

export default Secao;