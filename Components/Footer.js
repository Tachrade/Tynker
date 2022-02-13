import React from 'react';
import img from '../Images/kid.png'
import '../App.css';


const Footer =() => 
{

return(
       <>
       <div className='footer'>
            <div className='col'>

                   <div className='about'>
                          <h2 className='ft'>ABOUT</h2>
                          <p>Tynker is the world’s leading K-12 creative coding
                          platform, enabling students of all ages to learn to code at home, 
                          school, and on the go. Tynker’s highly successful coding curriculum 
                          has been used by one in three U.S. K-8 schools, 100,000 schools globally, 
                           and over 60 million kids across 150 countries.</p>
                   </div>

                         <div className='res'> 
                          <h2 className='ft'>RESOURCES</h2>
                          <a>Blog</a>
                          <a>About us</a>
                          <a>Press</a>
                          <a>Jobs</a>
                          <a>Mobile Apps</a>
                          <a>Coding ebooks</a>
                          <a>Scholarship</a>
                          <a>Forum</a>
                          <a>Store</a>
                          <a> CS Author</a>
                          </div>

                         <div className='res'>
                           <h2 className='ft'>PARENTS</h2>
                           <a>Overview</a>
                           <a>Life Coding Classes</a>
                           <a>Give a Gift</a>
                           <a>Redeem</a>
                           <a>Why Coding</a>
                           <a>Featured Makers</a>
                           </div>

                           <div className='res'>
                           <h2 className='ft'>EDUCATORS</h2>
                           <a>Overview</a>
                           <a>Elementary</a>
                           <a>Middle School</a>
                           <a>High School</a>
                           <a>AP CS Courses</a>
                           <a>PD</a>
                           <a>Hour of Code</a>
                           <a>STEM Projects</a>
                           <a>Request a Quote</a>
                           </div>

                           <div className='res'>
                                  
                                  <h2 className='ft'>PARENTYS NEWS LETTER</h2>
                                  <div className='res2'>
                           <input placeholder='Enter Your Email' className='inp'/>
                           <button style={{backgroundColor:"#00BCD4",padding:"5px",
                        width:"40px",border:"none" }}> OK</button>
                                  </div>
                           
                           </div>
             </div>
                          

                    
                    <div className='Kidsafe'> 
                    <img src={img}/>
                    <a>  © 2022 Neuron Fuel  </a>
                    <a>   Terms & Conditions </a>
                    <a> Privacy Policy   </a>
                    <a>     Kids & Online Safety </a>
                    <a> About Us</a>
                    <a>Contact Us</a>

                    </div>



       </div>
       
       
       
       
       
       
            
       
       
       </>
)

}
export default Footer;