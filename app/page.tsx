'use client'

import { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio"
import Contact from "@/components/Contact";



export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>
    
      
  
      <section id="home">
      <Navbar dark={darkMode} setDark={setDarkMode}/>

      {/* <Header/> */}
      
       
      </section>
      <section id="about" className="px-10 relative">
       {/* <About/> */}
      </section>

      <section className="px-10 relative" id="project">
        {/* <Portfolio/> */}
      </section>

      <section id="contact" className="px-10 relative">
        {/* <Contact/> */}
      </section>
      {/* <Footer/> */}
     
  
    </div>
  );
}
