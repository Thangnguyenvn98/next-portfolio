"use client"

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
    
      <main className="bg-white dark:bg-black dark:text-white ">
  
      <Navbar dark={darkMode} setDark={setDarkMode}/>
      <section className="min-h-screen w-full flex flex-col relative mt-10 md:mt-20" id="home">
      
      <Header/>
      
       
      </section>
      <section id="about" className="px-10 relative">
       <About/>
      </section>

      <section className="px-10 relative" id="project">
        <Portfolio/>
      </section>

      <section id="contact" className="px-10 relative">
        <Contact/>
      </section>
      <Footer/>
      </main>
  
    </div>
  );
}
