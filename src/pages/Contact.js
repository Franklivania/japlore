import React from 'react'
import { Link } from 'react-router-dom'
import '../sass/Contact.scss'
import People from '../Images/Blog/people.webp'

const Contact = () => {
  return (
    <div className='Contact'>

            <Link to='/' className='link'>Back to home <i class="fa-solid fa-arrow-right fa-2x"></i></Link>

        <div className="content">

            <div className="card">
                <img src={People} alt="" />
                <div className="container">
                    <div className="socials">
                        <a href=""><i class="fa-brands fa-twitter fa-2x"></i></a>
                        <a href=""><i class="fa-brands fa-facebook fa-2x"></i></a>
                        <a href=""><i class="fa-brands fa-instagram fa-2x"></i></a>
                    </div>
                </div>
            </div>

            <form action="post">

                <label htmlFor="name">Your Full name</label>
                <input type="text" name='name' placeholder='Your name' required />

                <label htmlFor="email">Your email</label>
                <input type="email" name="email" id="email" placeholder='Your email' required />

                <label htmlFor="phone">Your phone number</label>
                <input type="tel" name="phone" id="phone" required />

                <label htmlFor="messgae">Type your message</label>
                <textarea name="message" id="message" cols="30" rows="10" required></textarea>

                <input type="submit" value="Leave a message!" id='submit' />

            </form>

        </div>
        
    </div>
  )
}

export default Contact