import React from 'react';
import Mappics from '../Images/map-blue.png';
import Dot from '../Images/dots.svg';
import Maker from '../Images/maker.png';
import Quote from '../Images/quote.svg';
import Charlotte from '../Images/charlotte.png';
import Valerie from '../Images/valerie.png';
import Common from '../Images/common.webp';
import Aasl from '../Images/award-aasl.png';
import Academic from '../Images/award-smart-media.png';
import Parents from '../Images/award-parents-choice.png';
import Award from '../Images/award-twilly.png';
import National from '../Images/award-national-parenting-products.png';
import Moms from '../Images/award-moms-choice.png';
import Digital from '../Images/digital.webp';
import Picks from '../Images/parents-picks.webp';
import '../App.css';


function Map(){
    return(
        <>
          <div className ="mapContain">
           
            <div className='mobcen2' >
                      <h2>Join Tynker's Global Community</h2>
                      <button className='bth3'>Sign up free</button>
                 </div> 

                <img  src={Mappics} className="map"></img>
                
                <div className='students-con'>
                       <div className='map-label'>
                                 <span className='control-content'> <b>60 Million</b>students</span>
                       </div>
                       </div>

                     
                       <div className='codes-con'>
                       <div className='map-label'>
                       <span className='control-content'> <b>Over 7 Billion</b>lines of codes</span>
                       </div>
                       </div>
                       <div className='school-con' >
                       <div className='map-label'>
                       <span className='control-content'> <b>Over 100 thousand </b>school</span>
                       </div>
                       </div>


            
            <div className="threeCards">
                <div className="cardOne">
                    <div className="quoteContain">
                        <img className="quote1"src={Quote}/>
                        <blockquote>
                            <p>I thought a game was going to be extremely
                            hard to make, but
                            Tynker made it really
                            easy.
                            </p>
                        </blockquote>
                    </div>
                    <div className="cardImage">
                        <p style={{color:"black"}}>Tynker Featured <br></br>Maker</p>
                        <img className="maker" src={Maker}/>
                    </div>
                    
                </div>
                <div className="cardTwo">
                <div className="quoteContain">
                        <img className="quote2"src={Quote}/>
                        <blockquote>
                            <p>There's so much opportunity once they understand how coding works. It's amazing to see them create incredible things themselves.
                            </p>
                        </blockquote>
                    </div>
                    <div className="cardImage">
                        <p> <p style={{color:"black"}}>Charlotte R.</p>
                        <br></br><span className="breakp">Parent | Melbourne, <br></br>Australia</span></p>
                        <img className="maker" src={Charlotte}/>
                    </div>
                </div>
                <div className="cardThree">
                <div className="quoteContain">
                        <img className="quote1"src={Quote}/>
                        <blockquote>
                            <p>Tynker has made programming fun, exciting, and simple and will help lead kids into their future.
                            </p>
                        </blockquote>
                    </div>
                    <div className="cardImage">
                        <p> <p style={{color:"black"}}>Valerie S.</p>
                        <br></br><span className="breakp">5th Grade Teacher | <br></br>California, US</span></p>
                        <img className="maker" src={Valerie}/>
                    </div>
                </div>
            </div>
            <div className="mapIconsContain">
                <img className="iconsImage" src={Common}/>
                <img className="iconsImage" src={Aasl}/>
                <img className="iconsImage" src={Academic}/>
                <img className="iconsImage" src={Parents}/>
                <img className="iconsImage" src={Award}/>
                <img className="iconsImage" src={National}/>
                <img className="iconsImage" src={Moms}/>
                <img className="iconsImage" src={Digital}/>
                <img className="iconsImage" src={Picks}/>
            </div>
          </div>
          
          
           </>
    )
}

export default Map