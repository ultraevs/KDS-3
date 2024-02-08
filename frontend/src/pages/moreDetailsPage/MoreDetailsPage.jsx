import React, { useState, useEffect } from 'react'
import styles from "./MoreDetailsPage.module.css"

import MoreDetails from '../../components/moreDetails/MoreDetails'
import HeaderForDetails from '../../components/headerForDetails/HeaderForDetails'

const MoreDetailsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div id='moreDetails'>
      <HeaderForDetails />
      <MoreDetails />
    </div>
  )
}

export default MoreDetailsPage