import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';
import './Home.css'


const Home = () => {
  return (
    <>
   <div className='top_banner'>
    <div className='container'>
         <div className='detail'>
             <h2>The Best Makeup Artistry Ever 2023</h2>
          
                <Link to='/product' className='link'>Shop Now <BsArrowRight/></Link>
         </div>
         <div className='img_box'>
              <img src='./img/make.webp' alt='makeupbox'></img>
         </div>
    </div>
   </div>
   <div>
    
   </div>
    </>
  )
}

export default Home