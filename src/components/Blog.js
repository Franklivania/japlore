import React, {useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import '../sass/Blog.scss'
import Right from '../Images/right-arrow.png'
import Tokyo from '../Images/Blog/tokyo.jpg'
import Kanzawa from '../Images/Blog/kanzawa.jpg'
import Kyoto from '../Images/Blog/kyoto.jpg'
import Nagano from '../Images/Blog/nagano.jpg'
import Naha from '../Images/Blog/naha.jpg'
import Nara from '../Images/Blog/nara.jpg'
import Osaka from '../Images/Blog/osaka.jpg'
import Night from '../Images/Blog/night.jpg'
import Culture from '../Images/Blog/culture.jpg'
import Festivals from '../Images/Blog/festivals.jpg'
import Food from '../Images/Blog/food.jpg'
import People from '../Images/Blog/people.webp'
import Religion from '../Images/Blog/religion.jpeg'
import Hotel from '../Images/Blog/apa.jpg'
import Apartments from '../Images/Blog/apartment.jpg'
import Cottage from '../Images/Blog/cottage.jpg'
import Home from '../Images/Blog/home.webp'
import Hostel from '../Images/Blog/hostel.jpg'
import Resort from '../Images/Blog/resort.webp'
import Tent from '../Images/Blog/tent.jpg'
import Bullet from '../Images/Blog/bullet.jpg'
import Plane from '../Images/Blog/plane.jpg'
import Train from '../Images/Blog/train.jpg'
import Highbus from '../Images/Blog/highbuss.jpg'
import Subway from '../Images/Blog/subway.jpg'
import Citybus from '../Images/Blog/citybus.jpg'
import Cabs from '../Images/Blog/cabs.jpg'
import Ferry from '../Images/Blog/ferry.jpg'
import Bicycle from '../Images/Blog/bicycle.jpg'

const Blog = () => {

    const [tabIndex, setTabIndex] = useState(1);
    const [colorChange, setColorChange] = useState(true);


    const elementRef = useRef(null);
    const [arrowDisable, setArrowDisable] = useState(true);

    const handleHorizontalScroll = (element, speed, distance, step) => {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
        element.scrollLeft += step;
        scrollAmount += Math.abs(step);
        if (scrollAmount >= distance) {
            clearInterval(slideTimer);
        }
        if (element.scrollLeft === 0) {
            setArrowDisable(true);
        } else {
            setArrowDisable(false);
        }
        }, speed);
    };

  return (
    
    <div className='blog'>

        <div className="blog-top">
            <h1>Read our travel Blog</h1>

            <div className="move">

                <div className="moves left">
                    <button className='at'
                        onClick={() => {
                            handleHorizontalScroll(elementRef.current, 25, 100, -10);
                        }}
                        disabled={arrowDisable}
                        >
                        <i class="fa-solid fa-arrow-left fa-3x"></i>
                    </button>
                </div>

                <div className="moves right">
                    <button className='at'
                        onClick={() => {
                            handleHorizontalScroll(elementRef.current, 25, 100, 10);
                        }}
                        >
                        <i class="fa-solid fa-arrow-right fa-3x"></i>
                    </button>
                </div>

            </div>
        </div>

        <div className="blog-list">
            <ul className="top-nav">
                <li><Link to='' className={'link ' + (tabIndex === 1 ? 'link-change':'')} onClick={() => {setTabIndex(1);}}>Tourism in Japan</Link></li>
                <li><Link to='' className={'link ' + (tabIndex === 2 ? 'link-change':'')} onClick={() => {setTabIndex(2);}}>Life in Japan</Link></li>
                <li><Link to='' className={'link ' + (tabIndex === 3 ? 'link-change':'')} onClick={() => {setTabIndex(3);}}>Accomodation</Link></li>
                <li><Link to='' className={'link ' + (tabIndex === 4 ? 'link-change':'')} onClick={() => {setTabIndex(4);}}>Transportation</Link></li>
                <li><Link to='' className={'link ' + (tabIndex === 5 ? 'link-change':'')} onClick={() => {setTabIndex(5);}}>Tours & Activities</Link></li>
            </ul>
        </div>

        <div className="blogs">

            {
                tabIndex === 1 && (
                    <div className='tour' id='tour' ref={elementRef}>

                        <div className="card">
                            <img src={Tokyo} alt="" />
                            <div className="container">
                                <div className="text">
                                    <h2>Tokyo</h2>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src={Kyoto} alt="" />
                            <div className="container">
                                <div className="text">
                                    <h2>Kyoto</h2>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src={Nara} alt="" />
                            <div className="container">
                                <div className="text">
                                    <h2>Nara</h2>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src={Nagano} alt="" />
                            <div className="container">
                                <div className="text">
                                    <h2>Nagano</h2>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src={Osaka} alt="" />
                            <div className="container">
                                <div className="text">
                                    <h2>Osaka</h2>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src={Kanzawa} alt="" />
                            <div className="container">
                                <div className="text">
                                    <h2>Kanzawa</h2>    
                                </div>        
                            </div>
                        </div>

                        <div className="card">
                            <img src={Naha} alt="" />
                            <div className="container">
                                <div className="text">
                                    <h2>Naha</h2>
                                </div>
                            </div>
                        </div>

                    </div>
                )
            }
            {
                tabIndex === 2 && (
                    <div className='life' id='life' ref={elementRef}>
                        <div className="card">
                            <img src={Night} alt="" />
                            <div className="container">
                                <div className="text">
                                    <h2>The Nightlife</h2>
                                </div>
                            </div>
                        </div>
                        
                        <div className="card">
                            <img src={Culture} alt="" />
                            <div className="container">
                                <div className="text">
                                    <h2>The rich Culture</h2>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src={Festivals} alt="" />
                            <div className="container">
                                <div className="text">
                                    <h2>The meaningful Festivals</h2>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src={Food} alt="" />
                            <div className="container">
                                <div className="text">
                                    <h2>The rich Food</h2>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src={People} alt="" />
                            <div className="container">
                                <div className="text">
                                    <h2>The People</h2>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src={Religion} alt="" />
                            <div className="container">
                                <div className="text">
                                    <h2>Religion</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                tabIndex === 3 && (
                    <div className='accomodation' id='accomodation' ref={elementRef}>
                        <div className="card">
                            <img src={Hotel} alt="" />
                            <div className="container">
                                <div className="text">
                                    <h2>Hotels</h2>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={Apartments} alt="" />
                            <div className="container">
                                <div className="text">
                                    <h2>Apartments</h2>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={Cottage} alt="" />
                            <div className="container">
                                <div className="text">
                                    <h2>Cottages</h2>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={Home} alt="" />
                            <div className="container">
                                <div className="text">
                                    <h2>Homes</h2>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={Hostel} alt="" />
                            <div className="container">
                                <div className="text">
                                    <h2>Hostels</h2>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={Resort} alt="" />
                            <div className="container">
                                <div className="text">
                                    <h2>Resorts</h2>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={Tent} alt="" />
                            <div className="container">
                                <div className="text">
                                    <h2>Tents</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                tabIndex === 4 && (
                    <div className='transportation' id='transportation' ref={elementRef}>
                        <div className="card">
                            <img src={Bullet} alt="" />
                            <div className="container">
                                <div className="text">
                                    <h2>Shinkansen <br /> (Bullet Trains) </h2>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src={Plane} alt="" />
                            <div className="container">
                                <div className="text">
                                    <h2>Airplanes</h2>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src={Train} alt="" />
                            <div className="container">
                                <div className="text">
                                    <h2>Trains </h2>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src={Highbus} alt="" />
                            <div className="container">
                                <div className="text">
                                    <h2>High Buses</h2>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src={Subway} alt="" />
                            <div className="container">
                                <div className="text">
                                    <h2>Subways</h2>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src={Citybus} alt="" />
                            <div className="container">
                                <div className="text">
                                    <h2>City Buses</h2>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src={Cabs} alt="" />
                            <div className="container">
                                <div className="text">
                                    <h2>Cabs</h2>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src={Ferry} alt="" />
                            <div className="container">
                                <div className="text">
                                    <h2>Ferries</h2>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src={Bicycle} alt="" />
                            <div className="container">
                                <div className="text">
                                    <h2>Bicycles</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                tabIndex === 5 && (
                    <div className='tours' id='tours'>
                        <h3>5th facility</h3>
                    </div>
                )
            }

        </div>

        <h3><a href="/">Read full blog <img src={Right} alt="" /></a></h3>

    </div>
  )
}

export default Blog