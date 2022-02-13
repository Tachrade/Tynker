import React from 'react';
import '../App.css';
import img from '../Images/tutor.png';


const Fixed =() => 
{

return(
       <>
        <div className='fixedfooter'>
           <div>
                  <img src={img} alt="Tutor"/>
           </div>
           <div>
                  <p className='cw'>Live coding classes with a private teacher</p>
           </div>
           <div>
                  <button className='tbt'>SCHEDULE A FREE CLASS </button>
           </div>


        </div>
       
       
       
       
       
            
       
       
       </>
)

}
export default Fixed;