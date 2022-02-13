import React from 'react';
import Img from '../Images/bg-top.svg';
import Img2 from '../Images/for-parents.webp';
import Img3 from '../Images/for-teachers.webp';
import Img4 from '../Images/bg-bottom.svg';
import '../App.css';


const Parent =() => 
{

return(
       <>
       <div className='bgtop'>
              <img  className="bgt" src={Img} alt="Bg Top"/>
       </div>

       <div className='holder'>


       <div className='parent'>
           <div>
                  <img src={Img2} /> 
           </div>
           <div className='par'>
                  <h2>Parents</h2>
                  <p>Coding is quickly becoming an essential skill, one that will prepare your kids to 
                         succeed in an increasingly digital world.</p>
                  <p>Tynker offers a range of options to learn coding: Your children can learn to code with 
              our self-paced, immersive game-like courses, and then advance to learning real-world Python and JavaScript.</p>
                  <p>
                  Select the option that’s best for your child!
                  </p>
                  
                  <button className='bth'>LEARN MORE</button>
           </div>
       </div>

       <div className='parent2'>
           <div className='par2'>
                  <h2>Educators</h2>
                  <p>Join over 100,000 schools that use Tynker to engage students with coding and connect with 
                         other educators who love to code!</p>
                  <p>Teaching coding with Tynker is as easy as 1-2-3. In just minutes, you can create a 
                         free account, set up your virtual classroom, and assign ready-made lesson plans!</p>
                  <p>
                  Tynker empowers K-12 educators with free PD, standards-aligned curricula, cross-curricular
                   STEM coding, AP Computer Science courses, and many great coding resources.
                  </p>
                  
                  <button className='bth'>LEARN MORE</button>
           </div>
           <div>
                  <img src={Img3} /> 
           </div>
       </div>
      

       </div>
       <div className='bgtop'>
              <img  className="bgt" src={Img4} alt="Bg Top"/>
       </div>
       
       
       
       
       
            
       
       
       </>
)

}
export default Parent;