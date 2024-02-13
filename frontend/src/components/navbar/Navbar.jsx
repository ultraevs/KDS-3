import React from 'react'
import styles from "./Navbar.module.css"

import { Link } from "react-scroll"

const Navbar = ({ state, onClick }) => {
  return (
    
    <>
    <ul className={`${styles.navbar_items} ${state ? styles.active : ""}`}>
        <li className={styles.navbar_item}>
            <Link activeClass="active" to="about" onClick={ onClick }>
                О нас
            </Link>
        </li>
        <li className={styles.navbar_item}>
            <Link activeClass="active" to="projects" onClick={ onClick }>
                Проекты
            </Link>
        </li>
        <li className={styles.navbar_item}>
            <Link activeClass="active" to="contacts" onClick={ onClick }>
                Контакты
            </Link>
        </li>
    </ul>
    </>
  )
}

export default Navbar