import { useState } from 'react';
import './App.css';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Banner/Formulario/Formulario';
import Secao from './componentes/Secao/secao';

function App() {

  const secoes = [
    { nome: "Computadores", corPrimaria: '#57c278', corSecundaria: '#d9f7e9' },
    { nome: "Acessórios", corPrimaria: '#82cffa', corSecundaria: '#e8f8ff' },
    { nome: "Impressoras", corPrimaria: '#e06b69', corSecundaria: '#fde7e8' },
    { nome: "Games", corPrimaria: '#eea569', corSecundaria: '#fdebd9' },
    { nome: "Gadgets", corPrimaria: '#f08cda', corSecundaria: '#fce4f6' },
  ];

  const listaSecoes = secoes.map(secao => secao.nome);

  const [produtos, setProdutos] = useState([]);

  const adicionaProd = (prod) => {
    setProdutos(prev => [...prev, prod]);
  };

  return (
    <div>
      <Banner />
      
      <Formulario 
        secoes={listaSecoes} 
        aoProdCadastrado={adicionaProd} 
      />

      {secoes.map((secao) => (
        <Secao
          key={secao.nome}
          nome={secao.nome}
          corPrimaria={secao.corPrimaria}
          corSecundaria={secao.corSecundaria}
          produtos={produtos.filter(p => p.secao === secao.nome)}
        />
      ))}
    </div>
  );
}

export default App;