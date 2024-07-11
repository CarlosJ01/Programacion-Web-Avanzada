import React, { useState, useMemo } from 'react';

const variablesContexto = React.createContext();

export function VariablesProvaider(props) {
    const [idPaguina, setIdPaguina] = useState(1);
    const [idCategoria, setidCategoria] = useState(0);
    const [usuario, setUsuario] = useState({});
    const [historial, setHistorial] = useState({});

    const valores = useMemo(()=>{
        return ({
            idPaguina,
            setIdPaguina,
            idCategoria, 
            setidCategoria,
            usuario, 
            setUsuario,
            historial,
            setHistorial
        });
    }, [idPaguina, idCategoria, usuario, historial]);

    return <variablesContexto.Provider value={valores} {...props}/>
}

export function useVariablesContexto() {
    const contexto = React.useContext(variablesContexto);
    if (!contexto) {
        throw new Error('Falta el contexto');
    }
    return contexto;
}