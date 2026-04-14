import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Headline from './components/Headline/Headline'
import Services from './components/Services/Services'
import Aboutme from './components/Aboutme/Aboutme'
import Projects from './components/Projects/Projects'
import Education from './components/Education/Education'
import Plans from './components/Plans/Plans'
import Testimonial from './components/Testimonial/Testimonial'
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
     <Navbar /> 

     <Hero />

     <Headline />

     <Services />

     <Aboutme />

     <Projects />

     <Headline />

     <Education />

     <Plans />

     <Headline />

     <Testimonial />

     <ContactMe />

     <Headline />

     <Footer />
    </div>
  )
}

export default App