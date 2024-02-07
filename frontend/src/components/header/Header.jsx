import React, { useState } from 'react'
import styles from "./Header.module.css"

import superLogo from "../../img/SuperLogo.svg"
import Navbar from '../navbar/Navbar'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isBurger, setIsBurger] = useState(true);

    const onClick = () => {
        setIsOpen(!isOpen)
        setIsBurger(!isBurger);
    }
  return (
    <>
    <div className='container'>
        <div className={styles.header}>
            <div className={styles.header_logo}>
                <img src={superLogo} alt="logo" />
            </div>
            <div>
                <div>
                    <Navbar state={isOpen} setState={setIsOpen} burgerState={isBurger} setBurger={setIsBurger}/>
                </div>
                <button className={styles.header_button} onClick={ onClick }>
                    <span>{isBurger ? '☰' : '✕'}</span>
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header