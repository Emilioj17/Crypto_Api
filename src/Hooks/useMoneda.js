import React, { useState } from 'react';

const useMoneda = (label, estadoInicial, monedas) => {
    const [estado, setEstado] = useState(estadoInicial);

    const Seleccionar = () => (
        <div>
            <label htmlFor="">{label}</label>
            <select name="" id="">
                <option>Elige una Opcion</option>
                {monedas.map(moneda=>(<option key={moneda.simbolo} value={moneda.simbolo}>{moneda.nombre}</option>))}
            </select>
        </div>
    )
    
    return [estado, Seleccionar, setEstado];
}
export default useMoneda;