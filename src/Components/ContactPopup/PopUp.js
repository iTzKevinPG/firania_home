import * as React from 'react';
import './PopUp.css';

export default function PopUp(props) {

    const handleClick = () =>{
        props.toggle();
    }

    function Redirect(path) {
        window.open(path , '_blank').focus();
    }

    return (
        <div className="Modal">
            <div className="ModalContent">
            <span className={`Close ${props.currentRoute}-Footer`} onClick={handleClick}>
                <b>&times;</b>
            </span>
            <div className='SectionInfo'>
                <div className='Contacts'>
                    <div className='ContactTitle'>
                        Contactanos
                        <hr/>
                    </div>
                    <div className='ContactInfo'>
                        Email: Firani.Home@Firania.co
                        Telefono: 326698
                    </div>
                </div>
                <div className='Follow'>
                    <div className='ContactTitle'>
                        Síguenos
                        <hr/>
                    </div>
                    <div className='IconsFollow'>
                        <div className='IconFace' onClick={() => {Redirect("https://www.facebook.com/")}}></div>
                        <div className='IconInsta' onClick={() => {Redirect("https://www.instagram.com/")}}></div>
                        <div className='IconYoutu' onClick={() => {Redirect("https://www.youtube.com/watch?v=D9G1VOjN_84")}}></div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}