import React from 'react';
import Image3 from '../Images/winter.webp';
import '../App.css';


const Hero =() => 
{

return(
       <>
     
          <div className='mainHeroContent'>
                  <div className='heroContent'>

                        
                        <h1>Coding Made Easy</h1>
                      <p className='para1'>The fun to learn programming and develop <br/>
                       problem-solving and critical thinking
                      skills! Ages 5-18</p>

                      <button className='bth'>GET STARTED FOR FREE</button>
                      <p className='para2'>At-home plans from <u> $9 per month</u></p></div> 
                  

                  <div className='Snowdiv'> 
                  <img src={Image3} className='Snow'/>
               </div>
          </div>

                


       
       
       
       
       
       
            
       
       
       </>
)

}
export default Hero;