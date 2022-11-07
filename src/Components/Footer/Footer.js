import * as React from 'react';
import './Footer.css';

export default function Footer(props){
    return(
        <div className='FooterContainer'>
            <div className={`IconFooter ${props.currentRoute}-Footer`}>
                <b>Este Es Tu Hogar</b>
            </div>
            <div className='Version'>
                Versión 1.0.0 2022 <b>Firania Home</b>
            </div>
        </div>
    );
}