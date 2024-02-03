import React from 'react'
import styles from "./Header.module.css"

import logo from "../../img/KDS-LOGO.png"
import Navbar from '../navbar/Navbar'


const Header = () => {
  return (
    <>
    <div className={styles.header}>
        <div className={styles.header_logo}>
            <img src={logo} alt="logo" />
        </div>
        <div className={styles.header_right_part}>
            <div>
                <Navbar />
            </div>
            <div className={styles.header_contact}>
                <a href="tel:+79000009000">+7 (900) 000-90-00</a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header