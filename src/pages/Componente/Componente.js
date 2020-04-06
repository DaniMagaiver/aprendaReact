import React, { useState } from 'react';
import './Componente.css';
import { Link } from 'react-router-dom';

function Componente() {
  const codigo = `
  \n function Componente(){
  \n  return <p>Olá mundo</p>
  }
  `;
  return (
    <div style={{animation:'crescer ease-in-out 2s', animationFillMode: 'forwards'}} class="main-container">
      <h1>1. Componente</h1>
      <p>Um Componente é como uma função que renderiza um elemento visual. Assim, posso chamá-lo em diversos lugares do meu código.</p>
      <p>Crio um componente dentro de uma função e posso chamá-lo usando tags</p>
      <code>
        {codigo}
      </code>
      <Link style={{textAlign:"center",marginTop:'1em'}} to={'/'}>Voltar</Link>
    </div>
  )
}

export default Componente;