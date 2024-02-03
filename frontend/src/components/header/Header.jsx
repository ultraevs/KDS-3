import React, { useState } from 'react'
import styles from "./Header.module.css"

import logo from "../../img/KDS-LOGO.png"
import Navbar from '../navbar/Navbar'
import BurgerMenu from "../../assets/icon/menu.png"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div className='container'>
        <div className={styles.header}>
            <div className={styles.header_logo}>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles.header_right_part}>
                <div>
                    <Navbar state={isOpen} setState={setIsOpen}/>
                </div>
                <div className={styles.header_contact}>
                    <a href="tel:+79000009000">+7 (900) 000-90-00</a>
                </div>
                <button className={styles.header_button} onClick={() => setIsOpen(!isOpen)}>
                    <img src={BurgerMenu} alt="Menu" />
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header