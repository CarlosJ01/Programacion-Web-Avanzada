import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

import {useVariablesContexto} from '../../contexto';

function Buscador() {
    const {historial} = useVariablesContexto();
    const [buscar, setBuscar] = useState('');

    const handleChange = (event) =>{
        setBuscar(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        historial.push('/buscar/'+buscar);
    }

    return(
        <div className="Buscador">
            <form onSubmit={handleSubmit}>
                <input type="text" name="buscar" id="buscar" maxLength='50' placeholder="Busca algun producto" onChange={handleChange} required/>
                <button type="submit" className="btn btn-primary" id='btnBuscar'>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
        </div>
    );
}

export default Buscador;