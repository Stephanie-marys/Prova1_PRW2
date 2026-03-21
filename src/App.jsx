import { useState } from 'react';
import './App.css';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario.jsx'; 
import Secao from './componentes/Banner/Secao/Secao';
           

function App() {

  const secoes = [
    { nome: "Computadores", corPrimaria: '#57c278', corSegundaria: '#d9f7e9' },
    { nome: "Acessórios",   corPrimaria: '#82cffa', corSegundaria: '#e8f8ff' },
    { nome: "Impressoras",  corPrimaria: '#e06b69', corSegundaria: '#fde7e8' },
    { nome: "Games",        corPrimaria: '#eea569', corSegundaria: '#fdebd9' }, 
    { nome: "Gadgets",      corPrimaria: '#f08cda', corSegundaria: '#fce4f6' }, 
  ];

  const listaSecoes=secao.map(secao.nome)

  const [produto, setProduto] = useState([]);

  const adicionaProd = (prod) => {
    setProduto(listaAnterior => [...listaAnterior, prod]); 
    console.log(prod);
  };

  return (
    <div>
      <Banner />
      <Formulario secoes={listaSecoes} aoProdCadastrado={prod => adicionaProd(prod)} />
      {secoes.map((secao) => (
        <Secao
          key={secao.nome}
          nome={secao.nome}
          corPrimaria={secao.corPrimaria}       
          corSegundaria={secao.corSegundaria}
        />
      ))}
    </div>
  );
}

export default App;