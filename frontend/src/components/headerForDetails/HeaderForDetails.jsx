import React from 'react'
import styles from "./HeaderForDetails.module.css"
import { Link } from 'react-router-dom'

import superLogo from "../../img/SuperLogo.svg"

const HeaderForDetails = () => {
  return (
    <div className='container'>
        <div className={styles.header}>
            <div>
                <Link to="/"  className={styles.header_logo}><img src={superLogo} alt="logo" /></Link>
            </div>
            <div>
                <Link to="/" className={styles.navbar_item}>На Главную</Link>
                <Link to="/" className={styles.navbar_arrow}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg></Link>
            </div>
            
        </div>
    </div>
  )
}

export default HeaderForDetails