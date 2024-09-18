import React, { useState } from 'react';
import './Modal.css';

function Modal({guardado, cancelado}){
    const [input, setInput] = useState("");

    const handleNuevoInput = (e)=>{
        setInput(e.target.value); //refiere al elemento HTML que origina e
    };

    const handleGuardar = () => {
        if(input.trim() !== ""){
            guardado(input);
            setInput("");
        }
    };

    return(
        <div className='modal'>
            <div className='contenido-modal'>
                <button id='cerrar-btn' onClick={cancelado}>X</button>
                <h1>Agregue su texto</h1>
                <input type= "text" value={input} onChange={handleNuevoInput} placeholder='Ingrese su texto aquí'/>
                <div className='botones-modal'>
                    <button id="guardar-btn" onClick={handleGuardar}>Guardar</button>
                    <button id="cancelar-btn" onClick={cancelado}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;