'use client'

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio"
import Contact from "@/components/Contact";
import Hero from "@/components/Hero/hero";



export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [isMounted,setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  },[])

  if (!isMounted) {
    return null
  }
  return (
    <div className={darkMode ? "dark dark:bg-black" : ""}>
    
      
  
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
