import React from 'react'

const Resultado = ({ listaResultado, configuracion }) => {
    if (listaResultado) {
        // let valor = listaResultado.DISPLAY[configuracion[1]];
    } else {
        let valor;
    }    
    // console.log(valor[configuracion[0]]);
    return (
        <div>
            Resultado para {configuracion[1]}
            <p>1 Ada cuesta, en {configuracion[0]}, la totalidad de:</p>
            {/* <h1>{valor[configuracion[0].PRICE]}</h1> */}
        </div>
    );
}
 
export default Resultado;