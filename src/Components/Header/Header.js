import './Header.css';
import Items from '../HeaderItems/Items';
import React, { useState } from 'react';
import PopUp from "../ContactPopup/PopUp";

export default function Header(props){

    const [seen, setSeen] = useState(false);

    const tooglePop = () =>{
        setSeen(!seen);
    };

    return (
        <div className="HeaderContainer">

            <div className={`IconHeader ${props.currentRoute}-Header`} onClick={() => {Redirect("/Home")}}/>

            <div className="Modules">
                <Items currentRoute={props.currentRoute}/>
            </div>

            <div className={`Contact ${props.currentRoute}-Header`}>
                <div className='IconContact' onClick={tooglePop}/>
            </div>

            {seen ? <PopUp toggle={tooglePop} currentRoute={props.currentRoute}></PopUp> : null}

        </div>
    );
}

function Redirect(path) {
    window.location.href = path;
}
