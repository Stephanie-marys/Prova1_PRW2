import { useState } from 'react';
import './App.css'
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Banner/Formulario/Formulario';


function App() {

      const[produto,setProduto]=useState([])

      const adicionaProd=(prod)=>{
        const listaNova=produto.slice();
        listaNova.push(prod)
        setProduto(listaNova)
        console.log(prod)
      }
  return (
    <div>

        <Banner/>
        <Formulario aoProdCadastrado={prod=>adicionaProd(prod)}/>

    
    </div>
    
  );
}

export default App
