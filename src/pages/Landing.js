import React from 'react'
import '../sass/Landing.scss'
import Blog from '../components/Blog'
import Homepage from '../components/Homepage'
import Places from '../components/Places'
import Properties from '../components/Properties'
import Search from '../components/Search'
import Footer from '../components/Footer'
// import { useState } from 'react'

const Landing = () => {

  return (
    <div className='Landing'>
      
        <Homepage/>

        <Places/>

        <Properties/>

        <Blog/>

        <Search/>

        <Footer/>

    </div>
  )
}

export default Landing