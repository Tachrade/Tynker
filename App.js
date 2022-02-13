// import logo from './logo.svg';
import Header from './Components/Header.js';
import Hero from './Components/Hero.js';
import Coding from './Components/Coding.js';
import Fixed from './Components/Fixed.js';
import Footer from './Components/Footer.js';
import Parent from './Components/Parents.js';
import Mobile from './Components/Mobile.js';
import Why from './Components/Why.js';
import Tes from './Components/Tes.js';
import Map from './Components/Map.js';
import './App.css';

function App() {
  return (
    <div>
        <div className='mainHeroPage'>
        <Header/>
        <Hero/>
        <Coding/>
        <Parent/>
        <Mobile/>
        <Why/>
        <Map/>
        <Footer/>
        </div>

       
        <Fixed/>
        



      
    </div>
  );
}

export default App;
