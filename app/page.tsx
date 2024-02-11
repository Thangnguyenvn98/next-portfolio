'use client'

import { useState } from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio"
import Contact from "@/components/Contact";
import Hero from "@/components/Hero/hero";



export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>
    
      
  
      <section id="home" className="dark:bg-black dark:text-white">
      <Navbar dark={darkMode} setDark={setDarkMode}/>
      <Hero/>
      {/* <Header/> */}
      
       
      </section>
     
      <section id="about" className="dark:bg-black dark:text-white">
        <About/>
      </section>
      

     
        <Portfolio />
     

      <section id="contact" className="dark:bg-black">
        <Contact/>
        <Footer/>

      </section>

     
     
  
    </div>
  );
}
