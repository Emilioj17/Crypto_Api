import React from 'react';
import useMoneda from "../hooks/useMoneda";

const Formulario = () => {
    const MONEDAS = [
        { nombre: "Peso Chileno", simbolo: "CLP" },
        { nombre: "Peso Argentino", simbolo: "ARG" }
      ];
    const [moneda, SelectMonedas] = useMoneda('Eligue tu moneda', '', MONEDAS);
    return (
        <form>
            <SelectMonedas />
            <input type="button" value="Calcular" />
        </form>
    );
}
 
export default Formulario;