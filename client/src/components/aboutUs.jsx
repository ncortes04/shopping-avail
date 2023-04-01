import React from 'react'
import '../styles/aboutus.css'
import aboutusimg from '../assets/about.webp'
const AboutUs = () => {
  return (
    <div className='about-container'>
    <div className="aboutus-card">
        <div className="single-card-text">
            <h2 className='single-card-title'>All About The Owners</h2>
            <div className='single-view-description-div'>
                  <p className='single-view-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, itaque. Quo, iste id. Soluta recusandae assumenda quisquam vel provident adipisci quidem modi officia, deserunt voluptatum quas sapiente at reprehenderit incidunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolor voluptatibus reprehenderit amet hic soluta similique ad. Iure fugiat consectetur eveniet laboriosam similique. Mollitia blanditiis possimus vitae velit dolor aliquam?</p>
            </div>
           </div>
           <div className="aboutus-img-container">
            <img className='about-us-img'src={aboutusimg}/>
          </div>
        </div>
       
    </div>
  )
}

export default AboutUs