"use client"

import Image from "next/image"
import portrait from "../../public/IMG_1450.png"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { MdDownloadForOffline, MdOutlineWork } from "react-icons/md";
import { scrollToSection } from "../Navbar";

export default function Header(){

    return (
          <div className="px-2 lg:px-8 relative">       {/* Container */}
          <div className="flex relative md:h-[90rem] h-[70rem] justify-center gap-4 items-center"> {/* Content */}
            <div className="flex flex-col-reverse lg:flex-row justify-center relative items-center gap-10"> {/* Hero main */}
            <div className="font-bold flex-col text-center lg:text-start">{/* Hero text */}
           <h2 className="text-6xl mt-5 md:mt-3">Full-Stack Developer 👋</h2>
           <p className="mt-10 font-light text-2xl">Hi, I&#39;m Thang Nguyen. A hard-working and passionate software developer based in </p>
           <button onClick={()=> scrollToSection("map")} className="text-2xl">Toronto, Canada 📍</button>
          <span className="text-4xl py-5 flex mt-10 gap-4 justify-center lg:justify-start cursor-pointer ">
            <a href="https://www.linkedin.com/in/thang-nguyen98/" className="hover:text-blue-500 dark:hover:text-lime-800" target="_blank"><AiFillLinkedin/></a>
            <a href="https://github.com/Thangnguyenvn98" className="hover:text-blue-500 dark:hover:text-lime-800" target="_blank"><AiFillGithub/></a>
          </span>
          <div className="flex gap-10 text-2xl justify-center lg:justify-start items-center mt-4 lg:mt-20">
         
            
            <div className="flex hover:text-blue-500 dark:hover:text-lime-800 items-center gap-2 bg-slate-300 dark:bg-yellow-600 rounded-md p-4">
             
              <a href="Thang_Resume_2024.pdf" download="thangnguyen-resume">Resume</a>

            
              <MdDownloadForOffline/>
            </div>

            <div className="flex items-center gap-2 hover:text-blue-500 dark:hover:text-lime-800">
            <button onClick={()=> scrollToSection("project")}>Projects</button>
            <MdOutlineWork/>
            </div>
          </div>
  
           </div>
          <div>
          <div className="mx-auto lg:w-[600px] lg:h-[600px] md:w-[600px] md:h-[600px] w-[300px] h-[300px] overflow-hidden relative rounded-full"> {/* Hero Image */}
              <Image alt="photo" src={portrait} priority={true} sizes="(max-width:400px)" fill objectFit="cover" className="w-full"></Image>
            </div>
          </div>
          
            </div>
          </div>
          </div>
          
    )
}