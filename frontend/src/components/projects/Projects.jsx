import React from 'react'
import styles from "./Projects.module.css"

import project1 from "../../img/Project1.png"
import project2 from "../../img/Project2.png"
import project3 from "../../img/Project3.png"
import project4 from "../../img/Project4.png"


const Projects = () => {
  return (
    <>
    <div className={styles.projects_container} id='projects'>

        <h2 className={styles.block_title}>Знаковые объекты</h2>

        <div className={styles.projects}>

            <div className={styles.projects_top}>
                <div className={styles.projects_item}>
                    <img src={project1} alt="project" />
                    <p className={styles.projects_item_subtitle}>ТПУ Щербинка</p>
                    <p className={styles.projects_item_year}>2023</p>
                </div>
                <div className={styles.projects_item}>
                    <img src={project2} alt="project" />
                    <p className={styles.projects_item_subtitle}>Вешняки</p>
                    <p className={styles.projects_item_year}>2023</p>
                </div>
            </div>

            <div className={styles.projects_bottom}>
                <div className={styles.projects_item}>
                    <img src={project3} alt="project" />
                    <p className={styles.projects_item_subtitle}>Плющево</p>
                    <p className={styles.projects_item_year}>2023</p>
                </div>
                <div className={styles.projects_item}>
                    <img src={project4} alt="project" />
                    <p className={styles.projects_item_subtitle}>Депо Нахабино</p>
                    <p className={styles.projects_item_year}>2023</p>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Projects