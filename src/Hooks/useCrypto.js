import React, { useState } from 'react';

const useCrypto = (label, estadoInicial, monedas) => {
    const [estado, setEstado] = useState(estadoInicial);

    const HandlerChange = (e) => {
        setEstado(e.target.value);
        console.log(e.target.value);
    }

    const Seleccionar = () => (
        <div>
            <label htmlFor="">{label}</label>
            <select name="" id="" onChange={(e)=>HandlerChange(e)}>
                <option>Elige una Opcion</option>
                {monedas.map(moneda=>(<option key={moneda.CoinInfo.Name} value={moneda.CoinInfo.Name}>{moneda.CoinInfo.FullName}</option>))}
            </select>
        </div>
    )
    
    return [estado, Seleccionar, setEstado];
}
export default useCrypto;