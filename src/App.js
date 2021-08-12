import styled from '@emotion/styled';
import Imagen from "./Img/cryptomonedas.png";
import Formulario from "./components/Formulario";
import { useEffect, useState } from 'react';


const Contenedor = styled.div`
  background-color: #111f2e;
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "Izquierda Derecha";
  .Izquierda{
    grid-area: Izquierda;
    img{
      max-width: 50vw;
      max-height: 100vh;
      object-fit: fill;
    }
  }

  .Derecha{
    grid-area: Derecha;
  }
`;

function App() {
  const [listaMonedas, setListaMonedas] = useState([]);
  const [listaResultado, setListaResultado] = useState([]);

  useEffect(() => {
    const AlComienzo = async () => {
      const response = await fetch(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`);
      const data = await response.json();
      setListaMonedas(data.Data);
    }
    AlComienzo();
  }, [])


  return (
    <Contenedor>
      <div className="Izquierda">
        <img src={Imagen} alt="" />
      </div>
      <div className="Derecha">
        <h1>Cotizador de Monedas</h1>
        <Formulario
          listaMonedas={listaMonedas}
          listaResultado={listaResultado}
          setListaResultado={setListaResultado}
        />
      </div>
    </Contenedor>
  );
}

export default App;
