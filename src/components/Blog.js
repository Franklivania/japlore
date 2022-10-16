import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../sass/Blog.scss'

const Blog = () => {

    const [tabIndex, setTabIndex] = useState(1);

  return (
    <div className='blog'>

        <div className="blog-top">
            <h1>Read our travel Blog</h1>

            <div className="move">

                <div className="moves left">
                <button type='button' className='at' id='left'> <i class="fa-solid fa-arrow-left fa-3x"></i> </button>
                </div>

                <div className="moves right">
                <button type='button' className='at' id='right'><i class="fa-solid fa-arrow-right fa-3x"></i></button>
                </div>

            </div>
        </div>

        <div className="blog-list">
            <ul className="top-nav">
                <li><Link to='' className='link' onClick={() => setTabIndex(1)}>Tourism in Japan</Link></li>
                <li><Link to='' className='link' onClick={() => setTabIndex(2)}>Life in Japan</Link></li>
                <li><Link to='' className='link' onClick={() => setTabIndex(3)}>Accomodation</Link></li>
                <li><Link to='' className='link' onClick={() => setTabIndex(4)}>Transportation</Link></li>
                <li><Link to='' className='link' onClick={() => setTabIndex(5)}>Tours & Activities</Link></li>
            </ul>
        </div>

        <div className="blogs">

            {
                tabIndex === 1 && (
                    <div className='tour' id='tour'>
                        <h3>Ist facility</h3>
                    </div>
                )
            }
            {
                tabIndex === 2 && (
                    <div className='life' id='life'>
                        <h3>2nd facility</h3>
                    </div>
                )
            }
            {
                tabIndex === 3 && (
                    <div className='accomodation' id='accomodation'>
                        <h3>3rd facility</h3>
                    </div>
                )
            }
            {
                tabIndex === 4 && (
                    <div className='transportation' id='transportation'>
                        <h3>4th facility</h3>
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

    </div>
  )
}

export default Blog