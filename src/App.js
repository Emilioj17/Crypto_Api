import useMoneda from "./Hooks/useMoneda";
import styled from '@emotion/styled';
import Imagen from "./Img/cryptomonedas.png";

const Contenedor = styled.div`
  background-color: #111f2e;
  color: white;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1fr;
  grid-template-areas: "Derecha Izquierda";

  .Izquierda{
    grid-area: Izquierda;
  }

  .Derecha{
    grid-area: Derecha
  }
`;

function App() {
  return (
    <Contenedor>
      <div className="Izquierda">
        <img src={Imagen} alt="" />
      </div>
      <div className="Derecha">
        Hola
      </div>
    </Contenedor>
  );
}

export default App;
