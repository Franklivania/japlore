import React from 'react'
import '../sass/App.scss'
import '../sass/Homepage.scss'
import Navbar from './Navbar'

const Homepage = () => {
  return (
    <div className='homepage'>
        <Navbar/>

        <h1>Take a <br /> Trip to Japan</h1>

        <div className="right">
            <div className="circle"></div>
        </div>
        <p id='shi'>Shinjuku <br /> Temple</p>

        <div className="top">
        <div className="circle"></div>
        </div>

        <div className="bottom">
        <div className="circle"></div>
        </div>

        <div className="left">
        <div className="circle"></div>
        </div>

        <div className="card">

            <div className="container">

                <label htmlFor="property">Property:</label>
                <select name="property" id="property">
                    <option value="select">Select Property</option>
                    <option value="select">Land</option>
                    <option value="select">Restaurants</option>
                </select>

            </div>

            <div className="container">

                <label htmlFor="city">City:</label>
                <select name="city" id="city">
                    <option value="select">Select City</option>
                    <option value="select">Tokyo</option>
                    <option value="select">Nagasaki</option>
                    <option value="select">Kyoto</option>
                    <option value="select">Yokahama</option>
                    <option value="select">Osaka</option>
                </select>

            </div>
           
           <div className="container">

            <label htmlFor="guests">Guests:</label>
                <select name="guests" id="guests">
                    <option value="select">No. of Guests</option>
                    <option value="select">1</option>
                    <option value="select">2</option>
                    <option value="select">specify</option>
                </select>

           </div>

            <input type="submit" value="SEARCH" id='search' />
        </div>

        <i class="fa-solid fa-arrow-down fa-3x"></i>
    </div>
  )
}

export default Homepage