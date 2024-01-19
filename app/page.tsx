"use client"
import Image from "next/image";
import { useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFillMoonStarsFill} from "react-icons/bs";
import portrait from "../public/IMG_1450.png"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white ">
      <section className="min-h-screen">
        <nav className="flex justify-between gap-4 mb-12 py-10 shadow-md shadow-slate-400 ">
          <h1>Thang.dev</h1>
          <ul className="flex items-center gap-4">
          <li><BsFillMoonStarsFill/></li>   
            <li>
              <a href="#">Home</a>
            </li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Resume</li>

          </ul>
        </nav>
        <div className="sm:text-center md:text-center lg:text-start font-bold">
          <div className="mx-auto w-60 h-60 overflow-hidden relative mt-20 rounded-full">
            <Image alt="photo" src={portrait} layout="fill" objectFit="cover"></Image>
          </div>
          <h2 className="text-4xl mt-10">Full-Stack Developer</h2>
          <h3 className="mt-4">Hi, I&#39;m an enthusiastic</h3>
          <div className="flex justify-center gap-4 text-2xl py-5 ">
            <AiFillLinkedin/>
            <AiFillGithub/>
          </div>
        </div>
      </section>
      </main>
  
    </div>
  );
}
