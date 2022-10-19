import React from 'react'
import '../sass/Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='Footer'>
        <footer>
            <div className="news">
                <h2>Stay updated with our news letter</h2>
                <label htmlFor="email">
                    <input type="email" name="email" id="search" placeholder='Your email' />
                    <input type="submit" value="Subscribe" id='search-input' />
                </label>
            </div>

            <div className="navs">
                <ul className="foot-nav">
                    <li><Link to='/' className='links'>Home</Link></li>
                    <li><Link to='' className='links'>Blog</Link></li>
                    <li><Link to='/about' className='links' target='_blank' >About</Link></li>
                    <li><Link to='' className='links'>Contact</Link></li>
                    <li><Link to='' className='links'>Categories</Link></li>
                </ul>
            </div>

            <div className="navs">
                <ul className="shop-nav">
                    <li><Link to='' className='links'>Browse places</Link></li>
                    <li><Link to='' className='links'>Browse properties</Link></li>
                    <li><Link to='' className='links'>Cancellation policy</Link></li>
                    <li><Link to='' className='links'>How Japlore works</Link></li>
                    <li><Link to='' className='links'>Careers &nbsp; <small>we are hiring</small></Link></li>
                </ul>
            </div>

            <button type="submit">List your property</button>
        </footer>

        <div className="foot">
            <ul>
                <li><Link to='' className='foots'>Terms of Use</Link></li> <div className="circle"></div>
                <li><Link to='' className='foots'>Privacy Policy</Link></li> <div className="circle"></div>
                <li><Link to='' className='foots'>Disclaimer</Link></li> <div className="circle"></div>
                <li><Link to='' className='foots'>Cookie policy</Link></li>
            </ul>

            <select name="country" id="country">
                <option value="country">English</option>
                <option value="country">Japanese</option>
            </select>
        </div>
    </div>
  )
}

export default Footer