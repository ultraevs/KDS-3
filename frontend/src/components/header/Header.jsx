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
            <div>
                <div>
                    <Navbar state={isOpen} setState={setIsOpen}/>
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