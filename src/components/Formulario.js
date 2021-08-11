import React from 'react';
import useCrypto from '../hooks/useCrypto';
import useMoneda from "../hooks/useMoneda";

const Formulario = ({ listaMonedas, setListaResultado, setConfiguracion }) => {
    const MONEDAS = [
        { nombre: "Peso Chileno", simbolo: "CLP" },
        { nombre: "Peso Argentino", simbolo: "ARG" },
        { nombre: "Dolar", simbolo: "USD" },
    ];
    
    const handlerOnClick = async () => {
        const response = await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${moneda}`);
        const data = await response.json();
        setListaResultado(data);
        setConfiguracion([moneda, crypto])
      }

    const [moneda, SelectMonedas] = useMoneda('Eligue tu moneda', '', MONEDAS);
    const [crypto, SelectCryptos] = useCrypto('Eligue la Crypto Moneda', '', listaMonedas);
    return (
        <form>
            <SelectMonedas />
            <SelectCryptos />
            <input type="button" value="Calcular" onClick={(e)=>handlerOnClick(e)}/>
        </form>
    );
}
 
export default Formulario;