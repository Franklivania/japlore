import React, {useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import '../sass/Properties.scss'
import Right from '../Images/right-arrow.png'
import APA from '../Images/apa.jpg'
import Hostel from '../Images/hostel.jpg'
import Hostel1 from '../Images/hostel1.jpg'
import Hostel2 from '../Images/hostel2.jpg'
import Hostel3 from '../Images/hostel3.jpg'
import Apartment from '../Images/apartment.jpg'
import Apartment1 from '../Images/apartment1.jpg'
import Apartment2 from '../Images/apartment2.jpg'
import Apartment3 from '../Images/apartment3.jfif'
import Apartment4 from '../Images/apartment4.jfif'
import Hotel1 from '../Images/hotel1.webp'
import Hotel2 from '../Images/hotel2.jpg'
import Hotel3 from '../Images/hotel3.jpg'
import Hotel4 from '../Images/hotel4.jpg'
import Home from '../Images/home.webp'
import Home1 from '../Images/home1.jpg'
import Home2 from '../Images/home2.jpg'
import Home3 from '../Images/home3.jpg'
import Home4 from '../Images/home4.jpg'
import Tent from '../Images/tent.jpg'
import Tent1 from '../Images/tent1.jpg'
import Tent2 from '../Images/tent2.jpg'
import Tent3 from '../Images/tent3.webp'
import Tent4 from '../Images/tent4.jpg'
import Cottage from '../Images/cottage.jpg'
import Cottage1 from '../Images/cottage1.jpg'
import Cottage2 from '../Images/cottage2.jpg'
import Cottage3 from '../Images/cottage3.jpg'
import Cottage4 from '../Images/cottage4.jpg'
import Resort from '../Images/resort.webp'
import Resort1 from '../Images/resort1.jpg'
import Resort2 from '../Images/resort2.webp'
import Resort3 from '../Images/resort3.jpg'
import Resort4 from '../Images/resort4.jpg'

const Properties = () => {

    const [tabIndex, setTabIndex] = useState(1);
    const [colorChange, setColorChange] = useState(false);

    const handleClick = () => {
        setColorChange(current => !current);
    }


    const btnRef = useRef(true);
    const onChangeColor = () => {
        btnRef.current.classList.add("#FFB800");
        console.log("this works");
    };

  return (
    <div className='properties'>

        <div className="prop-top">
            
            <h1>Stay at one of these</h1>

            <div className="move">

                <div className="moves left">
                <button type='button' className='at' id='left'> <i class="fa-solid fa-arrow-left fa-3x"></i> </button>
                </div>

                <div className="moves right">
                <button type='button' className='at' id='right'><i class="fa-solid fa-arrow-right fa-3x"></i></button>
                </div>

            </div>

        </div>

        <div className="proper">

            <nav className="left-nav">
                <ul className="nav-left">
                    <li><Link to='' className={'at ' + (tabIndex === 1 ? 'at-color':'')} onClick={() => {setTabIndex(1);}}>Motels</Link></li>
                    <li><Link to='' className={'at ' + (tabIndex === 2 ? 'at-color':'')} onClick={() => {setTabIndex(2);}}>Hotels</Link></li>
                    <li><Link to='' className={'at ' + (tabIndex === 3 ? 'at-color':'')} onClick={() => {setTabIndex(3);}}>Apartments</Link></li>
                    <li><Link to='' className={'at ' + (tabIndex === 4 ? 'at-color':'')} onClick={() => {setTabIndex(4);}}>Hostels</Link></li>
                    <li><Link to='' className={'at ' + (tabIndex === 5 ? 'at-color':'')} onClick={() => {setTabIndex(5);}}>Shared Homes</Link></li>
                    <li><Link to='' className={'at ' + (tabIndex === 6 ? 'at-color':'')} onClick={() => {setTabIndex(6);}}>Tents</Link></li>
                    <li><Link to='' className={'at ' + (tabIndex === 7 ? 'at-color':'')} onClick={() => {setTabIndex(7);}}>Cottages</Link></li>
                    <li><Link to='' className={'at ' + (tabIndex === 8 ? 'at-color':'')} onClick={() => {setTabIndex(8);}}>Resorts</Link></li>
                </ul>

                <p>View all<Link to='' className="at"><img src={Right} alt="" /></Link></p>
            </nav>

            <div className="prop-places">

                {tabIndex === 1 && (
                    <div className="motels" id="motels">

                        <div className="card">

                            <img src={APA} alt="" />

                            <div className="container"> 

                                <div className="wish" style={{backgroundColor: colorChange ? '' : '',color: colorChange ? '#FFB800' : '',}}onClick={handleClick}>
                                    <i class="fa-solid fa-heart"></i>
                                </div>

                                <div className="prop-text">

                                    <h3>APA hotels</h3>

                                    <div className="prop-text-foot">

                                        <p>$100/night</p>

                                        <div className="rate">
                                            <p>4.5</p>
                                            <div className="star">
                                                <div className="star-load">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">

                            <img src={APA} alt="" />

                            <div className="container"> 

                                <div className="wish" style={{backgroundColor: colorChange ? '' : '',color: colorChange ? '#FFB800' : '',}}onClick={handleClick}>
                                    <i class="fa-solid fa-heart"></i>
                                </div>

                                <div className="prop-text">

                                    <h3>APA hotels</h3>

                                    <div className="prop-text-foot">

                                        <p>$100/night</p>

                                        <div className="rate">
                                            <p>5</p>
                                            <div className="star">
                                                <div className="star-load five">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">

                            <img src={APA} alt="" />

                            <div className="container"> 

                                <div className="wish" style={{backgroundColor: colorChange ? '' : '',color: colorChange ? '#FFB800' : '',}}onClick={handleClick}>
                                    <i class="fa-solid fa-heart"></i>
                                </div>

                                <div className="prop-text">

                                    <h3>APA hotels</h3>

                                    <div className="prop-text-foot">

                                        <p>$100/night</p>

                                        <div className="rate">
                                            <p>4.5</p>
                                            <div className="star">
                                                <div className="star-load">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">

                            <img src={APA} alt="" />

                            <div className="container"> 

                                <div className="wish" style={{backgroundColor: colorChange ? '' : '',color: colorChange ? '#FFB800' : '',}}onClick={handleClick}>
                                    <i class="fa-solid fa-heart"></i>
                                </div>

                                <div className="prop-text">

                                    <h3>APA hotels</h3>

                                    <div className="prop-text-foot">

                                        <p>$100/night</p>

                                        <div className="rate">
                                            <p>5</p>
                                            <div className="star">
                                                <div className="star-load five">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">

                            <img src={APA} alt="" />

                            <div className="container"> 

                                <div className="wish" style={{backgroundColor: colorChange ? '' : '',color: colorChange ? '#FFB800' : '',}}onClick={handleClick}>
                                    <i class="fa-solid fa-heart"></i>
                                </div>

                                <div className="prop-text">

                                    <h3>APA hotels</h3>

                                    <div className="prop-text-foot">

                                        <p>$100/night</p>

                                        <div className="rate">
                                            <p>4.5</p>
                                            <div className="star">
                                                <div className="star-load">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">

                            <img src={APA} alt="" />

                            <div className="container"> 

                                <div className="wish" style={{backgroundColor: colorChange ? '' : '',color: colorChange ? '#FFB800' : '',}}onClick={handleClick}>
                                    <i class="fa-solid fa-heart"></i>
                                </div>

                                <div className="prop-text">

                                    <h3>APA hotels</h3>

                                    <div className="prop-text-foot">

                                        <p>$100/night</p>

                                        <div className="rate">
                                            <p>5</p>
                                            <div className="star">
                                                <div className="star-load five">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">

                            <img src={APA} alt="" />

                            <div className="container"> 

                                <div className="wish" style={{backgroundColor: colorChange ? '' : '',color: colorChange ? '#FFB800' : '',}}onClick={handleClick}>
                                    <i class="fa-solid fa-heart"></i>
                                </div>

                                <div className="prop-text">

                                    <h3>APA hotels</h3>

                                    <div className="prop-text-foot">

                                        <p>$100/night</p>

                                        <div className="rate">
                                            <p>4.5</p>
                                            <div className="star">
                                                <div className="star-load">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">

                            <img src={APA} alt="" />

                            <div className="container"> 

                                <div className="wish" style={{backgroundColor: colorChange ? '' : '',color: colorChange ? '#FFB800' : '',}}onClick={handleClick}>
                                    <i class="fa-solid fa-heart"></i>
                                </div>

                                <div className="prop-text">

                                    <h3>APA hotels</h3>

                                    <div className="prop-text-foot">

                                        <p>$100/night</p>

                                        <div className="rate">
                                            <p>5</p>
                                            <div className="star">
                                                <div className="star-load five">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                )}

                {tabIndex === 2 && (

                    <div className="hotels" id="hotels">

                        <div className="card">

                            <img src={APA} alt="" />

                            <div className="container"> 

                                <div className="wish" >
                                    <i class="fa-solid fa-heart"></i>
                                </div>

                                <div className="prop-text">

                                    <h3>APA hotels</h3>

                                    <div className="prop-text-foot">

                                        <p>$100/night</p>

                                        <div className="rate">
                                            <p>5</p>
                                           <div className="star">
                                                <div className="star-load five">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             </div>
                        </div>

                        <div className="card">

                            <img src={Hotel1} alt="" />

                            <div className="container"> 

                                <div className="wish" >
                                    <i class="fa-solid fa-heart"></i>
                                </div>

                                <div className="prop-text">

                                    <h3>ASCOTI</h3>

                                    <div className="prop-text-foot">

                                        <p>$250/night</p>

                                        <div className="rate">
                                            <p>5</p>
                                           <div className="star">
                                                <div className="star-load five">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             </div>
                        </div>

                        <div className="card">

                            <img src={Hotel2} alt="" />

                            <div className="container"> 

                                <div className="wish" >
                                    <i class="fa-solid fa-heart"></i>
                                </div>

                                <div className="prop-text">

                                    <h3>Hilton</h3>

                                    <div className="prop-text-foot">

                                        <p>$250/night</p>

                                        <div className="rate">
                                            <p>5</p>
                                           <div className="star">
                                                <div className="star-load five">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             </div>
                        </div>

                        <div className="card">

                            <img src={Hotel3} alt="" />

                            <div className="container"> 

                                <div className="wish" >
                                    <i class="fa-solid fa-heart"></i>
                                </div>

                                <div className="prop-text">

                                    <h3>Anniversarie</h3>

                                    <div className="prop-text-foot">

                                        <p>$250/night</p>

                                        <div className="rate">
                                            <p>5</p>
                                           <div className="star">
                                                <div className="star-load five">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             </div>
                        </div>

                        <div className="card">

                            <img src={Hotel4} alt="" />

                            <div className="container"> 

                                <div className="wish" >
                                    <i class="fa-solid fa-heart"></i>
                                </div>

                                <div className="prop-text">

                                    <h3>Grand Front Osaka</h3>

                                    <div className="prop-text-foot">

                                        <p>$200/night</p>

                                        <div className="rate">
                                            <p>4.5</p>
                                           <div className="star">
                                                <div className="star-load">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             </div>
                        </div>

                        
                    </div>

                )}

                {tabIndex === 3 && (

                <div className="apartments" id="apartments">

                    <div className="card">

                        <img src={Apartment} alt="" />

                        <div className="container"> 

                            <div className="wish">
                                <i class="fa-solid fa-heart"></i>
                            </div>

                            <div className="prop-text">

                                <h3>Anime style</h3>

                                <div className="prop-text-foot">

                                    <p>$250/week</p>

                                    <div className="rate">
                                        <p>5</p>
                                    <div className="star">
                                            <div className="star-load five">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">

                        <img src={Apartment1} alt="" />

                        <div className="container"> 

                            <div className="wish">
                                <i class="fa-solid fa-heart"></i>
                            </div>

                            <div className="prop-text">

                                <h3>Shinwa Edogawa</h3>

                                <div className="prop-text-foot">

                                    <p>$300/week</p>

                                    <div className="rate">
                                        <p>5</p>
                                    <div className="star">
                                            <div className="star-load five">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">

                        <img src={Apartment2} alt="" />

                        <div className="container"> 

                            <div className="wish">
                                <i class="fa-solid fa-heart"></i>
                            </div>

                            <div className="prop-text">

                                <h3>Court Kamata</h3>

                                <div className="prop-text-foot">

                                    <p>$200/week</p>

                                    <div className="rate">
                                        <p>4.5</p>
                                    <div className="star">
                                            <div className="star-load">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">

                        <img src={Apartment3} alt="" />

                        <div className="container"> 

                            <div className="wish">
                                <i class="fa-solid fa-heart"></i>
                            </div>

                            <div className="prop-text">

                                <h3>Takahanadaira</h3>

                                <div className="prop-text-foot">

                                    <p>$150/week</p>

                                    <div className="rate">
                                        <p>3.5</p>
                                    <div className="star">
                                            <div className="star-load three">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">

                        <img src={Apartment4} alt="" />

                        <div className="container"> 

                            <div className="wish">
                                <i class="fa-solid fa-heart"></i>
                            </div>

                            <div className="prop-text">

                                <h3>Musashimurayama-shi</h3>

                                <div className="prop-text-foot">

                                    <p>$150/week</p>

                                    <div className="rate">
                                        <p>3.5</p>
                                    <div className="star">
                                            <div className="star-load three">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>

                )}

                {tabIndex === 4 && (

                <div className="hostels" id="hostels">

                    <div className="card">

                        <img src={Hostel} alt="" />

                        <div className="container"> 

                            <div className="wish">
                                <i class="fa-solid fa-heart"></i>
                            </div>

                            <div className="prop-text">

                                <h3>Two monkeys group</h3>

                                <div className="prop-text-foot">

                                    <p>$30/night</p>

                                    <div className="rate">
                                        <p>3.5</p>
                                    <div className="star">
                                            <div className="star-load three">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">

                        <img src={Hostel1} alt="" />

                        <div className="container"> 

                            <div className="wish">
                                <i class="fa-solid fa-heart"></i>
                            </div>

                            <div className="prop-text">

                                <h3>Kyoto Capsule</h3>

                                <div className="prop-text-foot">

                                    <p>$40/night</p>

                                    <div className="rate">
                                        <p>4.5</p>
                                    <div className="star">
                                            <div className="star-load">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">

                        <img src={Hostel2} alt="" />

                        <div className="container"> 

                            <div className="wish">
                                <i class="fa-solid fa-heart"></i>
                            </div>

                            <div className="prop-text">

                                <h3>The Gate</h3>

                                <div className="prop-text-foot">

                                    <p>$70/night</p>

                                    <div className="rate">
                                        <p>5</p>
                                    <div className="star">
                                            <div className="star-load five">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">

                        <img src={Hostel3} alt="" />

                        <div className="container"> 

                            <div className="wish">
                                <i class="fa-solid fa-heart"></i>
                            </div>

                            <div className="prop-text">

                                <h3>Kogenai Hostels</h3>

                                <div className="prop-text-foot">

                                    <p>$20/night</p>

                                    <div className="rate">
                                        <p>2.5</p>
                                    <div className="star">
                                            <div className="star-load two">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>

                )}

                {tabIndex === 5 && (

                <div className="sharedHomes" id="sharedHomes">

                    <div className="card">

                        <img src={Home} alt="" />

                        <div className="container"> 

                            <div className="wish">
                                <i class="fa-solid fa-heart"></i>
                            </div>

                            <div className="prop-text">

                                <h3>Modern Home</h3>

                                <div className="prop-text-foot">

                                    <p>$100/night</p>

                                    <div className="rate">
                                        <p>4.5</p>
                                    <div className="star">
                                            <div className="star-load">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">

                        <img src={Home1} alt="" />

                        <div className="container"> 

                            <div className="wish">
                                <i class="fa-solid fa-heart"></i>
                            </div>

                            <div className="prop-text">

                                <h3>Garden Family Home</h3>

                                <div className="prop-text-foot">

                                    <p>$130/night</p>

                                    <div className="rate">
                                        <p>4.5</p>
                                    <div className="star">
                                            <div className="star-load">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">

                        <img src={Home2} alt="" />

                        <div className="container"> 

                            <div className="wish">
                                <i class="fa-solid fa-heart"></i>
                            </div>

                            <div className="prop-text">

                                <h3>Family Home creek</h3>

                                <div className="prop-text-foot">

                                    <p>$150/night</p>

                                    <div className="rate">
                                        <p>4.5</p>
                                    <div className="star">
                                            <div className="star-load">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">

                        <img src={Home3} alt="" />

                        <div className="container"> 

                            <div className="wish">
                                <i class="fa-solid fa-heart"></i>
                            </div>

                            <div className="prop-text">

                                <h3>Ancenstral Home</h3>

                                <div className="prop-text-foot">

                                    <p>$150/night</p>

                                    <div className="rate">
                                        <p>4.5</p>
                                    <div className="star">
                                            <div className="star-load">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">

                        <img src={Home4} alt="" />

                        <div className="container"> 

                            <div className="wish">
                                <i class="fa-solid fa-heart"></i>
                            </div>

                            <div className="prop-text">

                                <h3>Ancenstral Home</h3>

                                <div className="prop-text-foot">

                                    <p>$150/night</p>

                                    <div className="rate">
                                        <p>4.5</p>
                                    <div className="star">
                                            <div className="star-load">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>

                )}

                {tabIndex === 6 && (

                <div className="tents" id="tents">

                    <div className="card">

                        <img src={Tent} alt="" />

                        <div className="container"> 

                            <div className="wish">
                                <i class="fa-solid fa-heart"></i>
                            </div>

                            <div className="prop-text">

                                <h3>Iwatake Gondola Lift</h3>

                                <div className="prop-text-foot">

                                    <p>$100/day</p>

                                    <div className="rate">
                                        <p>5</p>
                                    <div className="star">
                                            <div className="star-load five">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">

                        <img src={Tent1} alt="" />

                        <div className="container"> 

                            <div className="wish">
                                <i class="fa-solid fa-heart"></i>
                            </div>

                            <div className="prop-text">

                                <h3>Stylish House Tent</h3>

                                <div className="prop-text-foot">

                                    <p>$170/day</p>

                                    <div className="rate">
                                        <p>4.5</p>
                                    <div className="star">
                                            <div className="star-load">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">

                        <img src={Tent2} alt="" />

                        <div className="container"> 

                            <div className="wish">
                                <i class="fa-solid fa-heart"></i>
                            </div>

                            <div className="prop-text">

                                <h3>Shinta Hamada Style</h3>

                                <div className="prop-text-foot">

                                    <p>$200/day</p>

                                    <div className="rate">
                                        <p>5</p>
                                    <div className="star">
                                            <div className="star-load five">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">

                        <img src={Tent3} alt="" />

                        <div className="container"> 

                            <div className="wish">
                                <i class="fa-solid fa-heart"></i>
                            </div>

                            <div className="prop-text">

                                <h3>Japanese tents</h3>

                                <div className="prop-text-foot">

                                    <p>$70/day</p>

                                    <div className="rate">
                                        <p>3.5</p>
                                    <div className="star">
                                            <div className="star-load three">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">

                        <img src={Tent4} alt="" />

                        <div className="container"> 

                            <div className="wish">
                                <i class="fa-solid fa-heart"></i>
                            </div>

                            <div className="prop-text">

                                <h3>Louis Vuitton</h3>

                                <div className="prop-text-foot">

                                    <p>$250/day</p>

                                    <div className="rate">
                                        <p>5</p>
                                    <div className="star">
                                            <div className="star-load five">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>

                )}

                {tabIndex === 7 && (

                <div className="cottages" id="cottages">

                    <div className="card">

                        <img src={Cottage} alt="" />

                        <div className="container"> 

                            <div className="wish">
                                <i class="fa-solid fa-heart"></i>
                            </div>

                            <div className="prop-text">

                                <h3>Cottage</h3>

                                <div className="prop-text-foot">

                                    <p>$600/week</p>

                                    <div className="rate">
                                        <p>4.5</p>
                                    <div className="star">
                                            <div className="star-load">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">

                        <img src={Cottage1} alt="" />

                        <div className="container"> 

                            <div className="wish">
                                <i class="fa-solid fa-heart"></i>
                            </div>

                            <div className="prop-text">

                                <h3>Cottage 1</h3>

                                <div className="prop-text-foot">

                                    <p>$500/night</p>

                                    <div className="rate">
                                        <p>4.5</p>
                                    <div className="star">
                                            <div className="star-load">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">

                        <img src={Cottage2} alt="" />

                        <div className="container"> 

                            <div className="wish">
                                <i class="fa-solid fa-heart"></i>
                            </div>

                            <div className="prop-text">

                                <h3>Cottage 2</h3>

                                <div className="prop-text-foot">

                                    <p>$450/week</p>

                                    <div className="rate">
                                        <p>4.5</p>
                                    <div className="star">
                                            <div className="star-load">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">

                        <img src={Cottage3} alt="" />

                        <div className="container"> 

                            <div className="wish">
                                <i class="fa-solid fa-heart"></i>
                            </div>

                            <div className="prop-text">

                                <h3>Cottage 3</h3>

                                <div className="prop-text-foot">

                                    <p>$700/night</p>

                                    <div className="rate">
                                        <p>5</p>
                                    <div className="star">
                                            <div className="star-load five">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">

                        <img src={Cottage4} alt="" />

                        <div className="container"> 

                            <div className="wish">
                                <i class="fa-solid fa-heart"></i>
                            </div>

                            <div className="prop-text">

                                <h3>Cottage 4</h3>

                                <div className="prop-text-foot">

                                    <p>$700/week</p>

                                    <div className="rate">
                                        <p>5</p>
                                    <div className="star">
                                            <div className="star-load five">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>

                )}

                {tabIndex === 8 && (

                <div className="resorts" id="resorts">

                    <div className="card">

                        <img src={Resort} alt="" />

                        <div className="container"> 

                            <div className="wish">
                                <i class="fa-solid fa-heart"></i>
                            </div>

                            <div className="prop-text">

                                <h3>Resort main</h3>

                                <div className="prop-text-foot">

                                    <p>$400/night</p>

                                    <div className="rate">
                                        <p>5</p>
                                    <div className="star">
                                            <div className="star-load five">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">

                        <img src={Resort1} alt="" />

                        <div className="container"> 

                            <div className="wish">
                                <i class="fa-solid fa-heart"></i>
                            </div>

                            <div className="prop-text">

                                <h3>Resort One</h3>

                                <div className="prop-text-foot">

                                    <p>$350/night</p>

                                    <div className="rate">
                                        <p>4.5</p>
                                    <div className="star">
                                            <div className="star-load">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">

                        <img src={Resort2} alt="" />

                        <div className="container"> 

                            <div className="wish">
                                <i class="fa-solid fa-heart"></i>
                            </div>

                            <div className="prop-text">

                                <h3>Resort two</h3>

                                <div className="prop-text-foot">

                                    <p>$450/night</p>

                                    <div className="rate">
                                        <p>4.5</p>
                                    <div className="star">
                                            <div className="star-load">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">

                        <img src={Resort3} alt="" />

                        <div className="container"> 

                            <div className="wish">
                                <i class="fa-solid fa-heart"></i>
                            </div>

                            <div className="prop-text">

                                <h3>Resort three</h3>

                                <div className="prop-text-foot">

                                    <p>$500/night</p>

                                    <div className="rate">
                                        <p>5</p>
                                    <div className="star">
                                            <div className="star-load five">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">

                        <img src={Resort4} alt="" />

                        <div className="container"> 

                            <div className="wish">
                                <i class="fa-solid fa-heart"></i>
                            </div>

                            <div className="prop-text">

                                <h3>Resort four</h3>

                                <div className="prop-text-foot">

                                    <p>$500/night</p>

                                    <div className="rate">
                                        <p>5</p>
                                    <div className="star">
                                            <div className="star-load five">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>

                )}

            </div>


        </div>
        
    </div>
  )
}

export default Properties