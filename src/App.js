import './sass/App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Landing from'./pages/Landing.js'
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
          
          <Route path='/' element={<Landing/>}/>

          <Route path='/about' element={<About/>}/>

          <Route path='/contact' element={<Contact/>}/>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
