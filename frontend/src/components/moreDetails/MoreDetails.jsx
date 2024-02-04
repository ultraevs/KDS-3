import React from 'react'
import styles from "./MoreDetails.module.css"

import { Link } from 'react-router-dom'

import Map from "../../img/Map.png"

const MoreDetails = () => {
  return (
    <>
    <div id='moreDetails' className={styles.moreDetails}>
      <div className={styles.moreDetails_info}>
        <div className={styles.moreDetails_info_left}>

          <div className={styles.moreDetails_item}>
            <h2 className={styles.item_title}>География строительства</h2>
            <p>Мы строим в Москве, Мск области и Смоленской области, подробнее ознакомьтесь на карте</p>
          </div>

          <div className={styles.moreDetails_item}>
            <h2 className={styles.item_title}>Кадровые ресурсы</h2>
            <p>В нашей компании на постоянной основе трудится более 80 человек. В зависимости от количества параллельно-производимых работ численность сотрудников компании возрастает за счет трудоустройства рабочих и ИТР. Весь инженерно-технический персонал и руководство имеет высшее техническое образование по соответствующим строительным специальностям.</p>
          </div>

          <div className={styles.moreDetails_item}>
            <h2 className={styles.item_title}>Виды деятельности</h2>
            <ul className={styles.list}>
              <li>Железнодорожное строительство и ремонт</li>
              <li>Благоустройство территорий</li>
              <li>Озеленение дворов и улиц</li>
              <li>Ремонт зданий</li>
              <li>Асфальтировка</li>
              <li>Устройство инженерных сетей и коммуникаций</li>
              <li>Поставки строительных материалов</li>
              <li>Разработка и экспертиза проектно-сметной документации</li>
            </ul>
          </div>

          <div className={styles.moreDetails_item}>
            <h2 className={styles.item_title}>География строительства</h2>
            <p>Мы строим в Москве, Московской области и Смоленской области, подробнее ознакомьтесь на карте</p>
          </div>

          <div className={styles.moreDetails_item}>
            <div className="item-downland">
                <h2><span>Состоим в Реестре СРО</span> с 27.01.2021</h2>
                <div className="hey">
                  <button>(Скачать документ)</button>
                  <Link to="/">
                    <button className='button'>Вернуться</button>
                  </Link>
                </div>
            </div>


          </div>

        </div>

        <div>
          <img src={Map} alt="карта" />
        </div>
      </div>
    </div>
    </>
  )
}

export default MoreDetails