import styled from '@emotion/styled';
import Imagen from "./Img/cryptomonedas.png";
import Formulario from "./components/Formulario";
import { useEffect, useState } from 'react';
import Resultado from './components/Resultado';

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
  const [configuracion, setConfiguracion] = useState([]);
  useEffect(() => {
    const AlComienzo = async () => {
      const response = await fetch(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`);
      const data = await response.json();
      setListaMonedas(data.Data);
      // console.log(data.Data);
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
          setListaResultado={setListaResultado}
          setConfiguracion={setConfiguracion}
        />
        <Resultado
          listaResultado={listaResultado}
          configuracion={configuracion}
        />
      </div>
    </Contenedor>
  );
}

export default App;
