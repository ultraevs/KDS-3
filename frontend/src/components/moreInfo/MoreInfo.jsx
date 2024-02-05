import React from 'react'
import styles from "./MoreInfo.module.css"

import classNames from 'classnames'

import { Link } from "react-router-dom"

import architecture from "../../img/Architecture.png"


const MoreInfo = () => {
  return (
    <>
    <div className='container' id='about'>
      <div className={styles.moreInfo} id='moreInfo'>
          <div className={ classNames(styles.moreInfo_item, styles.needCorrectWidth) }>
              <p>Наша компания специализируется на проектировании, строительстве и модернизации инфраструктуры. Мы создаем инновационные и устойчивые решения для транспортных, систем, а также промышленных объектов. Наша команда опытных специалистов обеспечивает высокое качество работ, соблюдение сроков и индивидуальный подход к каждому проекту.</p>
              <Link to="/moreDetails"><button className={ classNames(styles.button, "button")}>Подробнее</button></Link>
          </div>
          <div className={styles.moreInfo_item}>
              <img src={architecture} alt="architecture" />
          </div>
      </div>
    </div>
    </>
  )
}

export default MoreInfo