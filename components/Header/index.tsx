"use client"

import Image from "next/image"
import portrait from "../../public/IMG_1450.png"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { FaRegHandPointDown } from "react-icons/fa";
import { MdDownloadForOffline, MdOutlineWork } from "react-icons/md";
import { scrollToSection } from "../Navbar";



export default function Header(){

    return (
          <div className="px-4">       {/* Container */}
          <div className="flex gap-4 justify-center"> {/* Content */}
            <div className="flex flex-col-reverse lg:flex-row mt-20 md:mt-40 lg:mt-80 items-center gap-10"> {/* Hero main */}
            <div className="font-bold flex-col text-center lg:text-start">{/* Hero text */}
           <h2 className="text-6xl mt-5 md:mt-3">Full-Stack Developer 👋</h2>
           <p className="mt-10 font-light">Hi, I&#39;m Thang Nguyen. A hard-working and passionate software developer based in Toronto, Canada.</p>
          <span className="text-2xl py-5 flex mt-10 gap-4 justify-center lg:justify-start cursor-pointer">
            <a href="https://www.linkedin.com/in/thang-nguyen98/" target="_blank"><AiFillLinkedin/></a>
            <a href="https://github.com/Thangnguyenvn98" target="_blank"><AiFillGithub/></a>
          </span>
          <div className="flex gap-10 justify-center lg:justify-start items-center mt-4 lg:mt-20">
         
            
            <div className="flex items-center gap-2 bg-slate-300 rounded-md p-4">
             
              <a href="Thang_Resume_2024.pdf" download="thangnguyen-resume">Resume</a>

            
              <MdDownloadForOffline/>
            </div>

            <div className="flex items-center gap-2">
            <button onClick={()=> scrollToSection("project")}>Projects</button>
            <MdOutlineWork/>
            </div>
          </div>
  
           </div>
  
           <div className="mx-auto lg:w-[400px] lg:h-[400px] h-80 w-80 overflow-hidden relative rounded-full object-cover "> {/* Hero Image */}
              <Image alt="photo" src={portrait} priority={true} sizes="(max-width:20rem)" fill></Image>
            </div>
            </div>
          </div>
          </div>
          
    )
}