import React from 'react';
import useCrypto from '../hooks/useCrypto';
import useMoneda from "../hooks/useMoneda";

const Formulario = ({ listaMonedas, listaResultado, setListaResultado }) => {
    const MONEDAS = [
        { nombre: "Peso Chileno", simbolo: "CLP" },
        { nombre: "Peso Argentino", simbolo: "ARG" },
        { nombre: "Dolar", simbolo: "USD" },
    ];
    
    const handlerOnClick = async () => {
        const response = await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${moneda}`);
        const data = await response.json();
        setListaResultado(data.DISPLAY[crypto][moneda].PRICE);
      }

    const [moneda, SelectMonedas] = useMoneda('Eligue tu moneda', '', MONEDAS);
    const [crypto, SelectCryptos] = useCrypto('Eligue la Crypto Moneda', '', listaMonedas);
    return (
        <form>
            <SelectMonedas />
            <SelectCryptos />
            <input type="button" value="Calcular" onClick={(e) => handlerOnClick(e)} />
            <div>
                Resultado para {crypto}
                <p>1 {moneda} cuesta, en {crypto}, la totalidad de:</p>
                <h1>{listaResultado}</h1>
            </div>
        </form>
    );
}
 
export default Formulario;