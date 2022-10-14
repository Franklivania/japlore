import React from 'react'
import '../sass/App.scss'
import '../sass/Navbar.scss'

const Navbar = () => {
  return (
    <div>
        <header className='navs'>
            <h1>Jap <span>Lore</span> </h1>

            <nav className='center-nav'>
                <ul className="navbar">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">List a property</a></li>
                    <li><a href="/">Categories</a></li>
                </ul>
            </nav>

            <nav className="end-nav">
                <ul className="navbar">
                    <li><a href="/" id='login'>Login</a></li>
                    <li><a href="/" id='signup'>Sign Up</a></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Navbar