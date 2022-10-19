import React from 'react'
import Footer from '../components/Footer'
import '../sass/About.scss'

const About = () => {
  return (
    <div className='About'>
        <header>
            <div className="card">
                <h1>This is JapLore!</h1>
                <div className="container"></div>
            </div>
        </header>

        <section>
            <p>
                Japlore exists as a way to make easier a place to go, to know what you would encounter when you come to Japan.
                It is as a result of times spent, understanding the culture and putting material together that would make you to 
                fit in easily, find you way around and integrate seamlessly with the culture you find yourself in. <br />
                In this era of social integration, it is paramount we respect each person's views and their background, so we can be able
                to enjoy the activities of the country better. 
                <br />
                <br />

                Japlore exists to bridge the gap between the outside world and Japan, as it offers a wide availability of resouces that would
                make your transition to Japan easier. <br />

                We offer a lot of guidance, and are in touch with popular scenic places that would be where you would want to visit.

                <br />

                Be it vacation, work migration, studies, or change of living atmosphere, we got you covered, as you can find anything you want from the click of a button. <br />

                Cheers, and welcome to Japan! 
            </p>
        </section>

        <Footer/>
    </div>
  )
}

export default About