import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

const Suscripcion = () => (
    <div className='Suscripcion'>
        <label>Suscríbete y obtén descuentos exclusivos</label>
        <br/>
        <input type="text" name="suscripcion" id="suscripcion" placeholder="Escribe tu email"/>
        <button type="button" className="btn btn-warning" id='btnSuscripcion' data-toggle="modal" data-target="#modalSuscripcion">
            <FontAwesomeIcon icon={faArrowRight} />
        </button>
    </div>
);
export default Suscripcion;