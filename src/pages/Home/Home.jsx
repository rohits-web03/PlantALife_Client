import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from "../../components/Navbar"
import Hero from './Hero.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Footer from '../../components/Footer.jsx'

const Home = () => {
  return (
    <main className="relative h-screen">
        <Navbar />    
        <Link to="/profile">Profile</Link>
        <div>
      {/* Hero Section */}
      <Hero />

      {/* About Us Section */}
      <About />

      {/* Planting Process Section */}
      {/* <div className="bg-white py-12 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Planting Process</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We've simplified the process of earning PlantCoin. Here's how it works:
            </p>
            <div className="mt-8">
              {/* Insert your planting process steps here */}
            {/* </div>
          </div>
        </div>
      </div> */} 

      {/* Contact Us Section */}
      <Contact />
      <Footer />
    </div>
    </main>
  )
}

export default Home

// import React from 'react';

// const Home = () => {
//   return (

//   );
// };

// export default Home;
