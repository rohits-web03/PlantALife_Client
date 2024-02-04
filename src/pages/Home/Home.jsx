import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar from "../../components/Navbar"
import Hero from './Hero.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Footer from '../../components/Footer.jsx'
import { navLinks } from '../../constants/index.js'

const Home = () => {
  const user=localStorage.getItem('user');
  const [dropdown,setDropdown]=useState(false);
  const toggleDropdown=()=>{
    console.log("Toggling!!")
    setDropdown(!dropdown);
  }
  return (
    <main className="relative h-screen">
        <Navbar toggle={toggleDropdown}/>  
        {dropdown && 
        <div className="z-10 fixed bg-white rounded-lg bg-opacity-60 w-[50%] h-[40%] top-20 right-10 text-black">
          <ul className="w-full h-full text-xl flex flex-col gap-2 justify-center items-center">
            {navLinks.map((item) => (
              <li key={item.label} className='hover:border-gray-800 border-2 w-full text-center'>
                <a
                  href={item.href}
                  className="fonts-montserrat text-black leading-normal text-lg"
                >
                  {item.label}
                </a>
              </li>
            ))}
            {!user?
            <li>
              <Link to="/signup"
                className="text-lg bg-green-600 rounded-lg px-4 py-2 text-white"
              >
                Sign up
              </Link>
            </li>:
            <div className="flex justify-center items-center gap-16">
              <li>
                  <Link to="/profile"
                  >
                  <FaUserAlt className="text-2xl" />
                </Link>
              </li>
              <li>
                <button 
                  onClick={handleLogout}
                  className="text-lg bg-green-600 rounded-lg px-4 py-2 text-white"
                >
                  Logout
              </button>
              </li>
              </div>}
            </ul>
        </div>}
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
