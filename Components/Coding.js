import React from 'react';
import Image4 from '../Images/swosh.svg';
import Image2 from '../Images/learning.webp';
import Image from '../Images/icon-1.webp';
import Img from '../Images/icon-tutor.svg';
import Icon from '../Images/byjus.jpeg';
import '../App.css';


const Coding =() => 
{

return(
       <>
       <div className='Waver'>
                      <img src={Image4} className='wave'/>
                </div>
         <div className='code'>
                      <div className='codecon'>
                             <h2>The #1 Coding Platform for Kids</h2>
                             <p className='para1'> Tynker powers the creativity of over <b>60 million kids</b> and serves thousands 
                                    of schools and educators worldwide.</p>
                             <p className='para1'>Our interactive story-based learning allows kids to learn the basics with easy block-based coding c
                     hallenges before seamlessly transitioning to real-world <a>text-based languages</a> like <b>JavaScript</b> and <b>Python</b>.</p>
                             <p className='para1'>With 65+ award-winning courses, there’s a learning path for every kid, no matter their age or level.
                      We have over 5,000 learning modules, backed by hundreds of built-in tutorials and hands-on projects.</p>

                      <button className='bth'>START CODING NOW</button>
                      </div>
                      <div>
                             <img src={Image2} className="imgp" alt="Learning Path"/>
                             </div>

       </div>
                     <div className='contentc'>
                     <h2>Tynker has been busy. Good Busy. Check out what’s NEW!</h2>
                     </div>
                     <div className='rowHold'>
                     <div className='row_ico'>
                           <div><img className='ico' src={Image} alt="Icon"/></div>
                           <div className='rowC'>
                                  <h3>AP Computer Science</h3>
                                  <p>2 New AP® CS courses endorsed by the College Board.</p>
                                  <a>Learn More</a>
                           </div>
                           <div></div>
                           <div></div>
                        </div>
                       
                        <div className='row_ico'>
                           <div><img className='ico' src={Img} alt="Icon"/></div>
                           <div className='rowC'>
                                  <h3>Live Classes</h3>
                                  <p>Live coding classes with a private teacher</p>
                                  <a>Learn More</a>
                           </div>
                           <div></div>
                           <div></div>
                        </div>
                        <div className='row_ico'>
                           <div><img className='ico' src={Icon} alt="Icon"/></div>
                           <div className='rowC'>
                                  <h3>Tynker + BYJU’S</h3>
                                  <p>Tynker has joined the BYJU’S family of brands.</p>
                                  <a>Learn More</a>
                           </div>
                        </div>
                     </div>
       
       
       
       
       
            
       
       
       </>
)

}
export default Coding;