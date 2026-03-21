import Produtos from '../Produtos/Produtos';
import '../Secao/Secao.css';

const Secao = ({ nome, corPrimaria, corSecundaria, produtos }) => {
  return (
    <section className="secao" style={{ backgroundColor: corSecundaria }}>
      <h3 className="secao-titulo" style={{ borderColor: corPrimaria, color: corPrimaria }}>
        {nome}
      </h3>

      <div className="produtos">
        {produtos.length === 0
          ? <p className="secao-vazia">Nenhum produto nesta seção.</p>
          : produtos.map((produto, i) => (
              <ProdutoCard key={i} {...produto} />
            ))
        }
      </div>
    </section>
  );
};

export default Secao;