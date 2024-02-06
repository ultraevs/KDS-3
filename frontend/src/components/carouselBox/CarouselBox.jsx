import React from 'react'

import Carousel from 'react-bootstrap/Carousel'
import Щербинка from './../../assets/gallery/Щербинка.png'
import Плющево from './../../assets/gallery/Плющево.svg'
import Вешняки from './../../assets/gallery/Вешняки.svg'
import Востряково from './../../assets/gallery/Востряково.png'
import Весенняя from './../../assets/gallery/Весенняя.jpg'
import Коломенский from './../../assets/gallery/Коломенский.png'
import Сколково from './../../assets/gallery/Сколково.jpg'
import Нахабино from './../../assets/gallery/Нахабино.svg'
import Подлипки from './../../assets/gallery/Подлипки-Дачные.png'


import './CarouselBox.css'


const CarouselBox = () => {
    return (
        <div className="container">
            <div className='gallery'>
                <h3 className='title'>Галерея</h3>
                <Carousel>
                    <Carousel.Item>
                        <img                     
                            src={Щербинка}
                            alt="ТПУ Щербинка"
                        />
                        <Carousel.Caption>
                            <h2>ТПУ Щербинка</h2>
                            {/* <p>Крутой объект</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img                   
                            src={Плющево}
                            alt="О.П. Плющево"

                        />
                        <Carousel.Caption>
                            <h2>О.П. Плющево</h2>
                            <p>Капитальный ремонт пассажирских платформ</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img                      
                            src={Вешняки}
                            alt="О.П. Вешняки"
                        />
                        <Carousel.Caption>
                            <h2>О.П. Вешняки</h2>
                            <p>Капитальный ремонт пассажирских платформ</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img                     
                            src={Востряково}
                            alt="О.П. Востряково"
                        />
                        <Carousel.Caption>
                            <h2>О.П. Востряково</h2>
                            <p>Капитальный ремонт пассажирских платформ</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            src={Весенняя}
                            alt="О.П. Весенняя"
                        />
                        <Carousel.Caption>
                            <h2>О.П. Весенняя</h2>
                            <p>Капитальный ремонт пассажирских платформ</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <img
                            src={Коломенский}
                            alt="АО «Коломенский завод»"
                        />
                        <Carousel.Caption>
                            <h2>АО «Коломенский завод»</h2>
                            <p>Благоустройство территории</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            src={Сколково}
                            alt="ИЦ «Сколково»"
                        />
                        <Carousel.Caption>
                            <h2>ИЦ «Сколково»</h2>
                            <p>Строительство подпорной стенки</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            src={Нахабино}
                            alt="Нахабино"
                        />
                        <Carousel.Caption>
                            <h2>Нахабино</h2>
                            <p>Реконструкция моторовагонного депо</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            src={Подлипки}
                            alt="Подлипки-Дачные"
                        />
                        <Carousel.Caption>
                            <h2>Станция Подлипки-Дачные</h2>
                            <p>Устройство навесов</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>
        </div>
        

    );
}

export default CarouselBox;