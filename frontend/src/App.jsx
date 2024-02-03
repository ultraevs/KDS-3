import React from 'react'

import { Route, Routes } from 'react-router-dom'

import MoreDetailsPage from './pages/moreDetailsPage/MoreDetailsPage'
import HomePage from './pages/homePage/HomePage'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={ <HomePage />} />
      <Route path="/moreDetails" element={ <MoreDetailsPage /> }/>
    </Routes>
    </>
  )
}

export default App