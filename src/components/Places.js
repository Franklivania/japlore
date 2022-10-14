import React from 'react'
import '../sass/Places.scss'
import Osaka from '../Images/Osaka.svg'
import Kyoto from '../Images/Kyoto.svg'
import Nagasaki from '../Images/Nagasaki.svg'
import Tokyo from '../Images/Tokyo.svg'
import Yokohama from '../Images/Yokohama.svg'
import Vertical from '../Images/vertical.png'


const Places = () => {
  return (
    <div className='places'>
        
        <div className="place-card">

            <h1>Places of Interest</h1>

            <p>View more Places <a href="/"><i class="fa-solid fa-arrow-right "></i></a> </p>

        </div>

        <div className="images">

            <div className="image">
            
                <img src={Tokyo} alt="Tokyo" className='imgs' />

                <div className="place-text">

                    <img src={Vertical} alt="vertical" />

                    <div className="outer">
                        <div className="inner"></div>
                    </div>

                    <p>Tokyo</p>

                </div>

            </div>

            <div className="image rev">

                <img src={Kyoto} alt="Kyoto" className='imgs' />

                <div className="place-text revs">

                <img src={Vertical} alt="vertical" />

                <div className="outer">
                    <div className="inner"></div>
                </div>

                <p>Kyoto</p>
                    
                </div>

            </div>

            <div className="image">

                <img src={Yokohama} alt="Yokohama" className='imgs' />

                <div className="place-text">

                <img src={Vertical} alt="vertical" />

                <div className="outer">
                    <div className="inner"></div>
                </div>

                <p>Yokohama</p>

                </div>

            </div>

            <div className="image rev">

                <img src={Nagasaki} alt="Nagasaki" className='imgs' />

                <div className="place-text revs">

                <img src={Vertical} alt="vertical" />

                <div className="outer">
                    <div className="inner"></div>
                </div>

                <p>Nagasaki</p>
                    
                </div>

            </div>

            <div className="image">

                <img src={Osaka} alt="Osaka" className='imgs' />

                <div className="place-text">

                <img src={Vertical} alt="vertical" />

                <div className="outer">
                    <div className="inner"></div>
                </div>

                <p>Osaka</p>
                    
                </div>

            </div>

        </div>

    </div>
  )
}

export default Places