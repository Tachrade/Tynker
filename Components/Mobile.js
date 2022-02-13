import React from 'react';
import '../App.css';
import Img from '../Images/graphic-mobile.webp';
import Icon from '../Images/icon-junior.webp';
import Icon2 from '../Images/icon-app.webp';
import Icon3 from '../Images/icon-mod.webp';
import Img2 from '../Images/graphic-bbc.webp';
 


const Mobile =() => 
{

return(
       <>
       <div className='mobcen'>
            <h2>3 Highly-Rated Mobile Apps for Learning Code</h2>
            <p>Download Tynker apps and learn to code on the go.</p>
            <button className='bth'>LEARN MORE</button>
       </div>
        

        {/*  Start Tynker Content Div */}
       <div className='tycon'>


              {/* the img left Div */}
           <div className='left'>
                  <img src={Img} className='tyimg'/>
           </div> 
           {/* end */}

             {/* Tyker Junior div col */}
               <div className='tycol'>  
 
               {/* Row 1 */}
               <div className='tjrow'>

                 {/* The icon left */}
                  <div className='leftic'>
                         <img src={Icon}/>
                  </div>
                  {/* End of the icon left  */}

                        {/*  Start Tynker con right div  */}
                         <div className='tyjcon'>
                                <h3>Tynker Junior</h3>
                                <p>Tap-Tap picture coding with voice-overs. 
                                 Pre-readers solve story-based puzzles and build their first programs in coding sandboxes. Ages 5-7</p>
                                <div className='tylas'>
                                <div className='star'>
                                        <span>icon</span>
                                        <span>icon</span>
                                        <span>icon</span>
                                        <span>icon</span>
                                        <span>icon</span>
                                 </div>
                                 <div>4.5</div>
                                 <div>2,200+ reviews</div>
                                </div>
                                 
                            </div>
                    </div>
                    {/* End of Row1 */}

                 


                 {/* Row 2 */}
               <div className='tjrow'>

                     <div className='leftic'>
                     <img src={Icon2}/>
                     </div>
                  

                    <div className='tyjcon'>
                         <h3>Tynker</h3>
                      <p>Drag-and-drop block coding with a full-featured workshop.
                  Build games and apps, compose music and art, control smart devices, and much, much more. Ages 6-11</p>
                   <div className='tylas'>
                  <div className='star'>
                     <span>icon</span>
                     <span>icon</span>
                     <span>icon</span>
                     <span>icon</span>
                     <span>icon</span>
                 </div>
                 <div>4.7</div>
                  <div>10,400+ reviews</div>
                  </div>
                  </div>
              </div>
              {/* End Row 2 */}


               
                {/* Row 3 */}
               <div className='tjrow'>

                     <div className='leftic'>
                     <img src={Icon3}/>
                     </div>

               <div className='tyjcon'>
                      <h3>Mod Creator</h3>
                     <p>Drag-and-drop Minecraft modding.
               Design skins, blocks and items. Modify mob behaviors. Create mods and add ons. Explore worlds! Ages 6-11</p>
               <div className='tylas'>
                    <div className='star'>
                  <span>icon</span>
                         <span>icon</span>
                      <span>icon</span>
                    <span>icon</span>
                      <span>icon</span>
                   </div>
                   <div>4.0</div>
                  <div>3,300+ reviews</div>
                 </div>

                      </div>
                  </div>
                  {/* End Row 3 */}


              </div>
              {/* End Tynker col */}

       </div>
       {/* End of  Tynker Content Div */}



    {/* Mini Computer Div */}
                    <div className='computer'>
                           <h1>A Mini-Computer for the Internet of Things!</h1>
                           <div className='compmi'>
                                  <div className='compmini'>
                                         <p>The BBC Doctor Who HiFive Inventor is a visually stunning IoT-enabled hand-shaped mini-computer
                             designed to teach kids how to control robots or interface with IoT systems to investigate the world around them.</p>
                                         <p>Younger students will begin their learning journey with visual block 
                                                coding and advanced students with Micropython.</p>
                                         <p>The HiFive Inventor was developed by Tynker in collaboration with BBC Learning and SiFive,
                                    a fabless RISC-V semiconductor company.</p>
                                    <p>Learn More:</p>
                                    <a>www.HiFiveInventor.com</a>
                                  </div>
                                  <div className='hiv'><img src={Img2}/></div>
                           </div>
                           
                           
                           
                           
                     </div>

       </>
)

}
export default Mobile;