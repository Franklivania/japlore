import './sass/App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Landing from'./pages/Landing.js'
import About from './pages/About';
import Contact from './pages/Contact';

function App() {

  return (
    <div className="App">

    <div className="alert">
      <div className="message">
        You must be using a Tablet or a phone, hence this message <i class="fa-solid fa-face-smile-beam"></i> <br />
        Please Use a Laptop or a desktop to have the full experience
      </div>
    </div>

    <div className="main">
      <Router>
        <Routes>
            
          <Route path='/' element={<Landing/>}/>

          <Route path='/about' element={<About/>}/>

          <Route path='/contact' element={<Contact/>}/>

        </Routes>
      </Router>
    </div>

    </div>
  );
}

export default App;
