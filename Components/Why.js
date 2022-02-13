import React from 'react';
import Img from '../Images/bg-top.svg';
import apple from '../Images/logo-apple.png';
import barbie from '../Images/logo-barbie.png';
import bbc from '../Images/logo-bbc-learning.png';
import facebook from '../Images/logo-facebook.png';
import google from '../Images/logo-googleedu.png';
import hotwheels from '../Images/logo-hotwheels.png';
import lego from '../Images/logo-lego.png';
import mattel from '../Images/logo-mattel.png';
import mc from '../Images/logo-mc.png';
import microsoft from '../Images/logo-microsoft.png';
import pbs from '../Images/logo-pbs.png';





import '../App.css';


const Why =() => 
{

return(
       <>
        <div className='bgtop'>
              <img  className="bgt" src={Img} alt="Bg Top"/>
       </div>
       <div className='holder'>
              <div className='holdcon'>
                  <h1>Why Should Kids Learn to Code with Tynker?</h1>
                  <p>
                  Because <b>technology is so integrated</b> into virtually every aspect of our lives, learning about it is <b>more important than ever</b>.
                   For kids, our coding platform makes it convenient and fun to gain knowledge that will serve them well throughout their lives.
                   You can count on our <b>trusted methods</b> to help them develop and grow their capabilities with computers.
                  </p>
                  <p>
                  Tynker isn’t just for schools and coding camps, though. Parents who value <b>STEM education</b> and want their children to know how 
                  to learn to code should know that our kids programming platform can be used at home, too. There are individual and family home plans, and our online 
                  coding classes for kids are a great way for them to gain the supplemental STEM skills needed for the world of the future.
                  </p>
              </div>
             
       <div className='cardhold'> 
           <div className='card'>
           <h3 className='tit'>CODING BENEFITS</h3>
           <ul className='uls'>
                  <li>Top 10 Reasons to Code</li>
                  <li>Kids Coding Basics</li>
                  <li>Develop 21st Century Skills</li>
                  <li>Download eBooks on Coding</li>
           </ul>
           </div>
           <div className='card'>
           <h3 className='tit'>CODING GUIDES</h3>
           <ul className='uls'>
                  <li>What is Coding for Kids</li>
                  <li>Coding with Minecraft</li>
                  <li>Develop 21st Century Skills</li>
                  <li>Download eBooks on Coding</li>
                  <li>More Coding Resources</li>
           </ul>
           </div>
           <div className='card'>
           <h3 className='tit'>TYNKER HIGHLIGHTS</h3>
           <ul className='uls'>
                  <li>What’s New in Tynker?</li>
                  <li>COVID-19 Impact report</li>
                  <li>Meet our Featured Makers</li>
                  <li>Seasonal Coding Projects</li>
                  <li>Celebrating Women in STEM</li>
           </ul>
           </div>
           <div className='card'>
           <h3 className='tit'>CODING IN SCHOOLS</h3>
           <ul className='uls'>
                  <li>K-12 School Plans</li>
                  <li>AP Computer Science Principles</li>
                  <li>AP Computer Science A</li>
                  <li>Remote Learning</li>
                  <li>K-12 Success Stories</li>
           </ul>
           </div>
       </div>

 {/* Trusted */}
                     <div className='mobcen'>
                            <h2>Trusted by Leading Brands</h2>
                            
                                   < p style={{width: "55%"}}>Our methods for learning to code all are 
                                          provided within a safe, moderated community that is built around encouraging students to 
                                          gain confidence in their abilities and do so without fear of failure.
                                 </p>
                           
                            <div className='brands'>
                                      <div className='colcen'>
                                             <img src={apple} className="brandimg"/>
                                             <img src={google} className="brandimg"/>
                                             <img src={microsoft} className="brandimg"/>
                                             <img src={pbs} className="brandimg"/>
                                             <img src={bbc} className="brandimg"/>
                                             <img src={facebook} className="brandimg"/>
                                             <img src={lego} className="brandimg"/>
                                             <img src={mc} className="brandimg"/>
                                             <img src={mattel} className="brandimg"/>
                                             <img src={hotwheels} className="brandimg"/>
                                             <img src={barbie} className="brandimg"/>
                                      </div>
                            </div>
                     </div>
       </div>
       
       </>
)

}
export default Why;