"use client"

import { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";
import Image from "next/image";
import Portfolio from "../components/Portfolio"



export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white ">
  

      <section className="min-h-screen w-full flex-col relative">
      <Navbar/>
      <Header dark={darkMode}/>
      
       
      </section>
      <section id="about" className="px-10">
       <About/>
      </section>

      <section id="project" className="px-10">
        <Portfolio/>
      </section>
      <Footer/>
      </main>
  
    </div>
  );
}
