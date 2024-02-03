import React from 'react'
import styles from "./HomePage.module.css"

import Header from '../../components/header/Header'
import About from '../../components/about/About'
import MoreInfo from '../../components/moreInfo/MoreInfo'
import Projects from '../../components/projects/Projects'
import CarouselBox from '../../components/CarouselBox/CarouselBox'
import Partners from '../../components/partners/Partners'
import Footer from '../../components/footer/Footer'

const HomePage = () => {
  return (
    <>
        <Header />
        <About />
        <MoreInfo />
        <Projects />
        <CarouselBox />
        <Partners />
        <Footer />
    </>
  )
}

export default HomePage