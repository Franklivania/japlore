import React from 'react'
import '../sass/Landing.scss'
import Blog from '../components/Blog'
import Homepage from '../components/Homepage'
import Places from '../components/Places'
import Properties from '../components/Properties'

const Landing = () => {
  return (
    <div>

        <Homepage/>

        <Places/>

        <Properties/>

        <Blog/>

    </div>
  )
}

export default Landing