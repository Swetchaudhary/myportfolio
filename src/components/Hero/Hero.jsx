import React from 'react'
import heroImage from '../../assets/hero-image.png'
import './Hero.css'
import CV from '../../assets/Resume.pdf'

const Hero = () => {
  return (
    <section>
        <div className='flex hero-section wrapper gap-4'>
          <div className="hero-content ">
              <span className='sub-text'>Hello there!</span>
              <h1>
                <span className='green-text'>I'm Swet Chaudhary,</span>
                MERN Stack Developer. 
              </h1>

              <p className='para'>I am a motivated web designer with hands-on project experience in creating responsive and user-friendly
                 websites, looking forward to working with companies and startups to grow and contribute.</p>

                 <div className='flex gap-2'>
                  <a href="#" className='btn'>View My works</a>
                  <a href={CV} download="My CV" className='btn border-btn'>Download CV</a>
                 </div>
          </div>

          <div className="hero-image">
            <img src={heroImage} />
          </div>
        </div>
    </section>
  )
}

export default Hero