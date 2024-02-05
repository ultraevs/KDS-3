import React from 'react'
import styles from "./About.module.css"

import classNames from 'classnames'

const About = () => {
  return (
    <>
    <div className={styles.about}>
      <div className={ classNames("container", styles.aboutZone)}>
        <h1>
          КДС-3 - компания, занимающаяся строительством и модернизацией 
          инфраструктуры и объектов на транспорте
        </h1>
      </div>
    </div>
    </>
  )
}

export default About