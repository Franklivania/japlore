import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../sass/Properties.scss'
import Right from '../Images/right-arrow.png'
import APA from '../Images/apa.jpg'
import Hostel from '../Images/hostel.jpg'
import Hostel1 from '../Images/hostel1.jpg'
import Hostel2 from '../Images/hostel2.jpg'
import Hostel3 from '../Images/hostel3.jpg'

const Properties = () => {

    const [motels, setToggle] = useState(true);
    const [hotels, setHotels] = useState(false);
    const [apartments, setApartments] = useState(false);
    const [hostels, setHostels] = useState(false);
    const [sharedHomes, setSharedHomes] = useState(false);
    const [tents, setTents] = useState(false);
    const [cottages, setCottages] = useState(false);
    const [resorts, setResort] = useState(false);

    const [wish, setColor] = useState ("fa-heart");
    const changeStyle = () =>{
        console.log("Working?");

        setColor("color");
    };

  return (
    <div className='properties'>

        <div className="prop-top">
            
            <h1>Stay at one of these</h1>

            <div className="move">

                <div className="moves left">
                <Link to="/" className='at' id='left'> <i class="fa-solid fa-arrow-left fa-3x"></i> </Link>
                </div>

                <div className="moves right">
                <Link to="/" className='at' id='right'><i class="fa-solid fa-arrow-right fa-3x"></i></Link>
                </div>

            </div>

        </div>

        <div className="proper">

            <nav className="left-nav">
                <ul className="nav-left">
                    <li><Link to='' className="at" onClick={() => {
                        setToggle(!motels);
                        setHotels(false);
                        setApartments(false);
                        setHostels(false);
                        setSharedHomes(false);
                        setTents(false);
                        setCottages(false);
                        setResort(false);
                        }}>Motels</Link></li>
                    <li><Link to='' className="at" onClick={ () => {
                        setToggle(false);
                        setHotels(!hotels);
                        setApartments(false);
                        setHostels(false);
                        setSharedHomes(false);
                        setTents(false);
                        setCottages(false);
                        setResort(false);
                        }}>Hotels</Link></li>
                    <li><Link to='' className="at" onClick={ () => {
                        setToggle(false);
                        setHotels(false);
                        setApartments(!apartments);
                        setHostels(false);
                        setSharedHomes(false);
                        setTents(false);
                        setCottages(false);
                        setResort(false);
                        }}>Apartments</Link></li>
                    <li><Link to='' className="at" onClick={ () => {
                        setToggle(false);
                        setHotels(false);
                        setApartments(false);
                        setHostels(!hostels);
                        setSharedHomes(false);
                        setTents(false);
                        setCottages(false);
                        setResort(false);
                        }}>Hostels</Link></li>
                    <li><Link to='' className="at" onClick={ () => {
                        setToggle(false);
                        setHotels(false);
                        setApartments(false);
                        setHostels(false);
                        setSharedHomes(!sharedHomes);
                        setTents(false);
                        setCottages(false);
                        setResort(false);
                        }}>Shared Homes</Link></li>
                    <li><Link to='' className="at" onClick={ () => {
                        setToggle(false);
                        setHotels(false);
                        setApartments(false);
                        setHostels(false);
                        setSharedHomes(false);
                        setTents(!tents);
                        setCottages(false);
                        setResort(false);
                        }}>Tents</Link></li>
                    <li><Link to='' className="at" onClick={ () => {
                        setToggle(false);
                        setHotels(false);
                        setApartments(false);
                        setHostels(false);
                        setSharedHomes(false);
                        setTents(false);
                        setCottages(!cottages);
                        setResort(false);
                        }}>Cottages</Link></li>
                    <li><Link to='' className="at" onClick={ () => {
                        setToggle(false);
                        setHotels(false);
                        setApartments(false);
                        setHostels(false);
                        setSharedHomes(false);
                        setTents(false);
                        setCottages(false);
                        setResort(!resorts);
                        }}>Resorts</Link></li>
                </ul>

                <p>View all<Link to='' className="at"><img src={Right} alt="" /></Link></p>
            </nav>

            <div className="prop-places">

                {motels && (
                    <div className="motels" id="motels">

                        <div className="card">

                            <img src={APA} alt="" />

                            <div className="container"> 

                                <div className="wish">
                                    <i class="fa-solid fa-heart" onClick={changeStyle}></i>
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

                                <div className="wish">
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

                                <div className="wish">
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

                                <div className="wish">
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

                                <div className="wish">
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

                                <div className="wish">
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

                                <div className="wish">
                                    <i class="fa-solid fa-heart" onClick={changeStyle}></i>
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

                                <div className="wish">
                                    <i class="fa-solid fa-heart" onClick={changeStyle}></i>
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

                {hotels && (

                    <div className="hotels" id="hotels">

                        <div className="card">

                            <img src={APA} alt="" />

                            <div className="container"> 

                                <div className="wish">
                                    <i class="fa-solid fa-heart" onClick={changeStyle}></i>
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

                {apartments && (

                <div className="apartments" id="apartments">

                    <div className="card">

                        <img src={APA} alt="" />

                        <div className="container"> 

                            <div className="wish">
                                <i class="fa-solid fa-heart" onClick={changeStyle}></i>
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

                {hostels && (

                <div className="hostels" id="hostels">

                    <div className="card">

                        <img src={Hostel} alt="" />

                        <div className="container"> 

                            <div className="wish">
                                <i class="fa-solid fa-heart" onClick={changeStyle}></i>
                            </div>

                            <div className="prop-text">

                                <h3>Two monkeys travel group</h3>

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
                                <i class="fa-solid fa-heart" onClick={changeStyle}></i>
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
                                <i class="fa-solid fa-heart" onClick={changeStyle}></i>
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
                                <i class="fa-solid fa-heart" onClick={changeStyle}></i>
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

                {sharedHomes && (

                <div className="sharedHomes" id="sharedHomes">

                    <div className="card">

                        <img src={APA} alt="" />

                        <div className="container"> 

                            <div className="wish">
                                <i class="fa-solid fa-heart" onClick={changeStyle}></i>
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

                {tents && (

                <div className="tents" id="tents">

                    <div className="card">

                        <img src={APA} alt="" />

                        <div className="container"> 

                            <div className="wish">
                                <i class="fa-solid fa-heart" onClick={changeStyle}></i>
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

                {cottages && (

                <div className="cottages" id="cottages">

                    <div className="card">

                        <img src={APA} alt="" />

                        <div className="container"> 

                            <div className="wish">
                                <i class="fa-solid fa-heart" onClick={changeStyle}></i>
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

                {resorts && (

                <div className="resorts" id="resorts">

                    <div className="card">

                        <img src={APA} alt="" />

                        <div className="container"> 

                            <div className="wish">
                                <i class="fa-solid fa-heart" onClick={changeStyle}></i>
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

                

            </div>


        </div>
        
    </div>
  )
}

export default Properties