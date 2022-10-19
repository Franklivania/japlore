import React from 'react'
import { Link } from 'react-router-dom'
import '../sass/App.scss'
import '../sass/Navbar.scss'

const Navbar = () => {
  return (
    <div>
        <header className='navs'>
            <h1>Jap <span>Lore</span> </h1>

            <nav className='center-nav'>
                <ul className="navbar">
                    <li><Link to='/' className='link'> Home </Link></li>
                    <li><Link to='/about' className='link' target='_blank' > About </Link></li>
                    <li><Link to='/' className='link'> Contact </Link></li>
                    <li><Link to='/' className='link'> List a property </Link></li>
                    <li><Link to='/' className='link'> Categories </Link></li>
                </ul>
            </nav>

            <nav className="end-nav">
                <ul className="navbar">
                    <li><Link to='/' className='link' id='login'> Login </Link></li>
                    <li><Link to='/' className='link' id='signup'> Sign Up </Link></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Navbar