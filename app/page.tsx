"use client"

import { useState } from "react";
import Navbar from "./navbar";
import Header from "./header";
import About from "./about";
import Footer from "./footer";
import Image from "next/image";



export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white ">
  

      <section className="min-h-screen w-full flex-col relative">
      <Navbar/>
      <Header/>
      
       
      </section>
      <section id="about" className="px-10">
       <About/>
      </section>

      <Footer/>
      </main>
  
    </div>
  );
}
