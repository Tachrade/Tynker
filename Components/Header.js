import React from 'react';
import '../App.css';
import logo from '../Images/tynker.png';
import Image from '../Images/controller.png';


const Header =() => 
{

return(
       <>
       <div className='header'>
             <div className='logo'> <img src={logo} /></div> 
             <div className='navs'>
                    <a href="#"><img src={Image} className='Pad' />PLAY</a>
                    <a href="#">PARENTS</a>
                    <a href="#">EDUCATORS</a>
                    <a href="#">WHY CODE?</a>
             </div>
             <div className='btn'>
                    <button className='butt'>JOIN FOR FREE</button>
                    <button className='btn2'>LOG IN </button>
             </div>

       </div>
       
       
       
       
       
       
            
       
       
       </>
)

}
export default Header;