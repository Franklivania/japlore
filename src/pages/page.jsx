
// for the slide 

const moveLeft = () =>{
    console.log('Left!');
}

const moveRight = () =>{
    console.log('Right!');
}

// for the properties
const clickMotel = () =>{
    console.log('Hello!');
}

const clickHotels = () =>{
    console.log('Hello!');
}

const clickApartments = () =>{
    console.log('Hello!');
}

const clickHostels = () =>{
    console.log('Hello!');
}

const clickSharedHomes = () =>{
    console.log('Hello!');
}

const clickTents = () =>{
    console.log('Hello!');
}

const clickCottages = () =>{
    console.log('Hello!');
}

const clickResorts = () =>{
    console.log('Hello!');
}


{tour && (
    <div className="tour" id="tour">
        <h1>Tour</h1>
    </div>
)}
{life && (
    <div className="life" id="life">
        <h1>Tour</h1>
    </div>
)}
{accom && (
    <div className="accom" id="accom">
        <h1>Tour</h1>
    </div>
)}
{trans && (
    <div className="trans" id="trans">
        <h1>Tour</h1>
    </div>
)}
{tours && (
    <div className="tours" id="tours">
        <h1>Tour</h1>
    </div>
)}


const [tour, setToggle] = useState(true);
    const [life, setLife] = useState(false);
    const [accom, setAccom] = useState(false);
    const [trans, setTrans] = useState(false);
    const [tours, setTours] = useState(false);


    <li><Link to='' className='link'onClick={() => {
        setToggle(!tour);
        setLife(false);
        setAccom(false);
        setTrans(false);
        setTours(false);
        }}>Tourism in Japan</Link></li>
<li><Link to='' className='link' onClick={() => {
        setToggle(false);
        setLife(!life);
        setAccom(false);
        setTrans(false);
        setTours(false);
        }}>Life in Japan</Link></li>
<li><Link to='' className='link' onClick={() => {
        setToggle(false);
        setLife(false);
        setAccom(!accom);
        setTrans(false);
        setTours(false);
        }}>Accomodation</Link></li>
<li><Link to='' className='link'onClick={() => {
        setToggle(false);
        setLife(false);
        setAccom(false);
        setTrans(!trans);
        setTours(false);
        }}>Transportation</Link></li>
<li><Link to='' className='link' onClick={() => {
        setToggle(false);
        setLife(false);
        setAccom(false);
        setTrans(false);
        setTours(!tours);
        }}>Tours & Activities</Link></li>