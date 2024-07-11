import { useState, useEffect } from 'react';
import servidor from '../backend';

function Consulta(url) {
    const [ datos, setDatos ] = useState([]);
    const [ cargando, setCargando ] = useState(true);
    const [ error, setError ] = useState(false);

    useEffect(() => {
        const coneccion = async () => {
            try {
                let respuesta = await fetch(servidor+url);
                let datos = await respuesta.json();
                setDatos(datos);
                setCargando(false);
            } catch (errorConsulta) {
                setCargando(false);
                setError(true);
            }
        }
        coneccion();
    }, [url]);

    return { datos, cargando, error }
}

export default Consulta;