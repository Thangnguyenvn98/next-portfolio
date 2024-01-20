"use client"

import { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";
import Image from "next/image";
import filler1 from "../public/filler1.jpeg"



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
        <div className="px-4 mt-10">
          <div className="flex-col">
            <div>
            <h2 className="font-bold text-4xl">Projects</h2>
            <p className="break-words font-light text-lg mt-10">The following projects below showcase my skill and experience that can be applied in real worlds. Each project is briefly describe with its functionality and live demos to it. It served as proof for my ability to solve complex problems and manage each projects effectively.</p>
          
            </div>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-8 ">
              <div className="flex-col bg-slate-500 p-4 rounded-lg items-center">
                <div className="relative rounded-lg overflow-hidden object-cover w-full h-40">
                <Image src={filler1} alt="filler1" layout="fill" />
                </div>
                  
                
                <h2 className="font-bold text-2xl text-white mt-4">Project 1</h2>
                <p className="break-words mt-4">Descriptuon of the project used ihkhasdasd</p>
                <p>Panda Python Numpy MatplotLib</p>
              </div>
              <div className="flex-col bg-slate-500 p-4 rounded-lg items-center">
                <div className="relative rounded-lg overflow-hidden object-cover w-full h-40">
                <Image src={filler1} alt="filler1" layout="fill" />
                </div>
                  
                
                <h2 className="font-bold text-2xl text-white mt-4">Project 1</h2>
                <p className="break-words mt-4">Descriptuon of the project used ihkhasdasd</p>
                <p>Panda Python Numpy MatplotLib</p>
              </div>
              <div className="flex-col bg-slate-500 p-4 rounded-lg items-center">
                <div className="relative rounded-lg overflow-hidden object-cover w-full h-40">
                <Image src={filler1} alt="filler1" layout="fill" />
                </div>
                  
                
                <h2 className="font-bold text-2xl text-white mt-4">Project 1</h2>
                <p className="break-words mt-4">Descriptuon of the project used ihkhasdasd</p>
                <p>Panda Python Numpy MatplotLib</p>
              </div>
            </div>
           
          
          </div>
        </div>
      </section>
      <Footer/>
      </main>
  
    </div>
  );
}
