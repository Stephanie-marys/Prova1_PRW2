import { useState } from 'react';

const Formulario = ({ secoes, aoProdCadastrado }) => {

  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [imagem, setImagem] = useState('');
  const [secao, setSecao] = useState('');

  const aoSalvar = (e) => {
    e.preventDefault();

    aoProdCadastrado({
      nome,
      preco,
      imagem,
      secao
    });

    setNome('');
    setPreco('');
    setImagem('');
    setSecao('');
  };

  return (
    <form onSubmit={aoSalvar}>
      <input 
        value={nome}
        onChange={e => setNome(e.target.value)}
        placeholder="Nome"
      />

      <input 
        value={preco}
        onChange={e => setPreco(e.target.value)}
        placeholder="Preço"
      />

      <input 
        value={imagem}
        onChange={e => setImagem(e.target.value)}
        placeholder="Imagem"
      />

      <select 
        value={secao}
        onChange={e => setSecao(e.target.value)}
      >
        <option value="">Selecione uma seção</option>
        {secoes.map(s => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>

      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default Formulario;