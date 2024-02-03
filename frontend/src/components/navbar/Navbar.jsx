import React from 'react'
import styles from "./Navbar.module.css"

import { Link } from "react-scroll"

const Navbar = () => {
  return (
    <>
    <ul className={styles.navbar_items}>
        <li className={styles.navbar_item}>
            <Link activeClass="active" smooth spy to="about">
                О нас
            </Link>
        </li>
        <li className={styles.navbar_item}>
            <Link activeClass="active" smooth spy to="projects">
                Проекты
            </Link>
        </li>
        <li className={styles.navbar_item}>
            <Link activeClass="active" smooth spy to="contacts">
                Контакты
            </Link>
        </li>
    </ul>
    </>
  )
}

export default Navbar