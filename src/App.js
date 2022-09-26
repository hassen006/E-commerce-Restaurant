import './App.css';
import Home from './components/home/Home';
import NavbarSite from './components/navbar/NavbarSite';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AboutUs from './components/aboutUS/AboutUs';

function App() {
  return (
    
    <Router>
      <NavbarSite/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<AboutUs/>} />
      </Routes>
    </Router>
  );
}

export default App;
