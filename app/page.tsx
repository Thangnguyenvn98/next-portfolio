"use client"

import { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";
import Image from "next/image";
import Portfolio from "../components/Portfolio"
import Contact from "@/components/Contact";



export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>
    
      <main className="bg-white dark:bg-gray-900 ">
  
      <Navbar dark={darkMode} setDark={setDarkMode}/>
      <section className="min-h-screen w-full flex-col relative" id="home">
      
      <Header/>
      
       
      </section>
      <section id="about" className="px-10">
       <About/>
      </section>

      <section id="project" className="px-10">
        <Portfolio/>
      </section>

      <section id="contact" className="px-10">
        <Contact/>
      </section>
      <Footer/>
      </main>
  
    </div>
  );
}
