import { useState, useEffect } from 'react';
import Boton from './Boton.js';

const Contador = () => {
    const [seconds, setSeconds] = useState(0);
    console.log('render')
    /*useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []); */
    //Pasar una función en el setSeconds

    //Funciones helper dentro del componente.

    const handleClick = () => {
        setSeconds(seconds + 1);
    }

    const handleClickReset = () => {
        setSeconds(0);
    }

    const isEven = seconds % 2 === 0;

    const mensajePar = isEven ? "Es par" : "Es impar";

    return (
        <div>
        <h1>{seconds}</h1>
        <p>{mensajePar}</p>
        <button onClick={handleClick}>Adicionar</button>
        <button onClick={handleClickReset}>Reiniciar</button>
        </div>
    )
}

export default Contador
