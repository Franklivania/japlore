import React from 'react'
import '../sass/Landing.scss'
import Blog from '../components/Blog'
import Homepage from '../components/Homepage'
import Places from '../components/Places'
import Properties from '../components/Properties'
import Search from '../components/Search'
// import { useState } from 'react'

const Landing = () => {

  // const [datas, setDatas] = useState ([
  //   { name: 'Daniel', age: 25,  id: 1},
  //   { name: 'John', age: 24, id: 2 },
  //   { name: 'Jen', age: 31, id: 3 }
  // ]);

  return (
    <div className='Landing'>

      {/* {datas.map((data) => (
        <ul key={data.id}>
          <li>{ data.name} { data.age }</li>
        </ul>
      ))} */}

        <Homepage/>

        <Places/>

        <Properties/>

        <Blog/>

        <Search/>

    </div>
  )
}

export default Landing