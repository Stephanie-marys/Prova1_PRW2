import { useState } from 'react';
import './Formulario.css';

const Formulario = ({ secoes, marcas, aoProdCadastrado }) => {

  const [nome,        setNome]        = useState('');
  const [preco,       setPreco]       = useState('');
  const [secao,       setSecao]       = useState('');
  const [marca,       setMarca]       = useState('');
  const [imagemMarca, setImagemMarca] = useState('');
  const [condicao,    setCondicao]    = useState('Novo');

  const aoSelecionarMarca = (valor) => {
    setMarca(valor);
    const marcaSelecionada = marcas.find(m => m.marca === valor);
    setImagemMarca(marcaSelecionada ? marcaSelecionada.imagem : '');
  };

  const aoSalvar = (e) => {
    e.preventDefault();
    if (!nome || !preco || !secao || !marca) return;

    aoProdCadastrado({ nome, preco, secao, marca, imagem: imagemMarca, condicao });

    setNome('');
    setPreco('');
    setSecao('');
    setMarca('');
    setImagemMarca('');
    setCondicao('Novo');
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Dados do Produto:</h2>

        <div className="campo">
          <label>Seção:</label>
          <select value={secao} onChange={e => setSecao(e.target.value)} required>
            <option value="">Selecione uma seção</option>
            {secoes.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div className="campo">
          <label>Marca:</label>
          <select value={marca} onChange={e => aoSelecionarMarca(e.target.value)} required>
            <option value="">Selecione uma marca</option>
            {marcas.map(m => (
              <option key={m.marca} value={m.marca}>{m.marca}</option>
            ))}
          </select>
        </div>

        <div className="campo">
          <label>Nome:</label>
          <input
            value={nome}
            onChange={e => setNome(e.target.value)}
            placeholder="Nome do produto"
            required
          />
        </div>

        <div className="campo">
          <label>Preço:</label>
          <input
            value={preco}
            onChange={e => setPreco(e.target.value)}
            placeholder="Preço"
            type="number"
            min="0"
            step="0.01"
            required
          />
        </div>

        <div className="campo campo-radio">
          <label>
            <input
              type="radio"
              value="Novo"
              checked={condicao === 'Novo'}
              onChange={() => setCondicao('Novo')}
            />
            Novo
          </label>
          <label>
            <input
              type="radio"
              value="Usado"
              checked={condicao === 'Usado'}
              onChange={() => setCondicao('Usado')}
            />
            Usado
          </label>
        </div>

        <button type="submit">Inserir Produto</button>
      </form>
    </section>
  );
};

export default Formulario;