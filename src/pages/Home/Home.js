import React from 'react';
import './Home.css';
import { Link} from 'react-router-dom';

function Home() {
  return (
    <div class="main-container">
      <h1>Aula de React Básico</h1>
      <h2>Índice</h2>
      <Link to={"/Componente"}>1. Componente</Link>
      <a>2. Props</a>
      <a>3. State</a>
      <a>4. State com Hoocks</a>
      <a>5. Eventos</a>
      <a>7. Estilizando nossa aplicação</a>
    </div>
  )
}

export default Home;