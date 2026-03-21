import Produtos from "./Produtos";
import './Produtos.css';

const Secao = ({ nome, corPrimaria, corSecundaria, produtos }) => {


  return (
    <section style={{ backgroundColor: corSecundaria }}>

      <h3 style={{ borderColor: corPrimaria }}>
        {nome}
      </h3>

      <div className="produtos">
        {produtos.map((prod, index) => (
          <Produtos key={index} {...prod} />
        ))}
      </div>

    </section>
  );
};

export default Secao;