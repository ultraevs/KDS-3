import React, { useState } from "react";
import Modal from 'react-modal';

import './Footer.css'
import close from './../../assets/icon/icon-close.svg'

const Footer = () => {
    const url = 'https://kds-3.shmyaks.ru/callback';
    
    async function postData()  {

        let input_name = document.querySelector(".input_name").value;
        let input_phone = document.querySelector(".input_phone").value;
        let input_comment = document.querySelector(".input_comment").value;
    
    
        const data = new URLSearchParams();
        data.append("name", input_name);
        data.append("phone", input_phone);
        data.append("comment", input_comment);
    
    
        const response = await fetch(url, {
            method: "POST",
            body: data,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
        const json =  response.json();
        console.log(json)
        console.log("Успех:", JSON.stringify(json));
    }


    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const modalContent = (
        <div className="modal_window">
            <button onClick={closeModal}><img src={close} alt="" /></button>            
            <p>Ожидайте, мы скоро вам перезвоним!</p>
        </div>
    );

    Modal.setAppElement('#root');


    return (
        <div className="footerBackGround">
            <div className="container">
                <div className="footer" id="contacts">
                    <div className="callback">
                        <h3>
                            Оставьте заявку на обратную связь
                        </h3>
                        <div className='main_contacs'>
                            <div className='input input_main'>
                                <input type="text" placeholder='Ваше имя *' className='input_name' />
                            </div>
                            <div className='input input_main'>
                                <input type="text" placeholder='Телефон *' className='input_phone' />
                            </div>
                        </div>

                        <div className='input'>
                            <input type="text" placeholder='Комментарий' className='input_comment' />
                        </div>
                        <button onClick={() => {(document.querySelector(".input_name").value && /^[\d\+][\d\(\)\ -]{4,14}\d$/.test(document.querySelector(".input_phone").value)) ? (openModal(), postData()) : window.alert('Ошибка в имени или номере телефона')} }>
                            Заказать звонок
                        </button>

                        
                        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                            {modalContent}
                        </Modal>
                    </div>

                    <div className='contacs'>
                        <div className='phone'><a href='tel:+74955680558'>+7 (495) 568-05-58</a></div>
                        <a href="mailto:kds-z2020@yandex.ru">kds-z2020@yandex.ru</a>
                        <a href="https://yandex.ru/maps/?rtext=~55.726142%2C37.608185">г. Москва, Ленинский пр-кт дом 3</a>
                    </div>

                </div>
            </div>
        </div>
        
        

    );
}

export default Footer;