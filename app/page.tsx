"use client"

import { useState } from "react";
import Navbar from "./navbar";
import Header from "./header";
import macbook from "../public/macbook.png"
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
      <section className="px-10">
        <div className="flex-col items-center justify-center">
          <div className="grid gap-4 grid-cols-2 items-center justify-center">
            <div className="relative h-80 rounded-md overflow-hidden object-cover">
              <Image src={macbook} alt="macbook"  />
            </div>
            <div>
              <h3 className="font-bold text-blue-400">ABOUT ME</h3>
              <p className="break-words mt-4 font-light">I am currently a computer science student at Toronto Metropolitan University (Ryerson University) who is a skilled full-stack developer. Through experienced in my internship and projects, I have gained experiences in langauges such as JavaScript, PHP, Python. Experience in framework like React, MERN stack and developer tools like Git </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center mt-10 ">
            <h2 className="font-light text-lg">What Skills I have</h2>
            <h2 className="text-4xl font-bold">Tech Stack</h2>
          </div>
        </div>
      </section>
      </main>
  
    </div>
  );
}
