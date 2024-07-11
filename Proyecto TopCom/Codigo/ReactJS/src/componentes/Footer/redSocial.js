import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const RedSocial = ({url, icono}) => (
    <div className='RedSocial'>
        <a href={url} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={icono}/>
        </a>
    </div>
);

export default RedSocial;