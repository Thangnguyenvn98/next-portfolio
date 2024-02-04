"use client"

import Image from "next/image"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { MdDownloadForOffline, MdOutlineWork } from "react-icons/md";
import portrait from "../../public/IMG_1450.png"


export default function Header(){

    return (
          <div className="px-2 lg:px-8 relative mt-20">       {/* Container */}
          <div className="flex relative justify-center gap-4 items-center"> {/* Content */}
            <div className="flex h-screen flex-col-reverse lg:flex-row justify-center relative items-center gap-10"> {/* Hero main */}
            <div className="font-bold flex-col text-center lg:text-start">{/* Hero text */}
           <h2 className="lg:text-6xl text-4xl mt-5 md:mt-3">Full-Stack Developer 👋</h2>
           <p className="mt-10 font-light text-lg lg:text-2xl">Hi, I&#39;m Thang Nguyen. A hard-working and passionate software developer based in </p>
           <a href="#map" className="lg:text-2xl text-lg">Toronto, Canada 📍</a>
          <span className="text-4xl py-5  flex mt-10 gap-4 justify-center lg:justify-start cursor-pointer ">
            <a href="https://www.linkedin.com/in/thang-nguyen98/" className="hover:text-blue-500 dark:hover:text-lime-800 border bg-sky-200 p-2 rounded-full dark:bg-green-300" target="_blank"><AiFillLinkedin/></a>
            <a href="https://github.com/Thangnguyenvn98" className="hover:text-blue-500 dark:hover:text-lime-800 border bg-sky-200 p-2 rounded-full dark:bg-green-300" target="_blank"><AiFillGithub/></a>
          </span>
          <div className="flex gap-10 text-lg lg:text-2xl justify-center lg:justify-start items-center mt-4 lg:mt-20">
         
            
            <div className="flex hover:text-blue-500 dark:hover:text-lime-800 items-center gap-2 bg-slate-300 dark:bg-yellow-600 rounded-md p-4">
             
              <a href="Thang_Resume_2024.pdf" download="thangnguyen-resume">Resume</a>

            
              <MdDownloadForOffline/>
            </div>

            <div className="flex text-lg lg:text-2xl items-center gap-2 hover:text-blue-500 dark:hover:text-lime-800">
            <button onClick={()=> {}}>Projects</button>
            <MdOutlineWork/>
            </div>
          </div>
  
           </div>
          <div>
          <div className="mx-auto lg:w-[600px] lg:h-[600px] md:w-[450px] md:h-[450px] w-[300px] h-[300px] overflow-hidden relative rounded-full"> {/* Hero Image */}
              <Image alt="photo" src={portrait} priority={true} sizes="(max-width:400px)" fill objectFit="cover" className="w-full"></Image>
            </div>
          </div>
          
            </div>
          </div>
          </div>
          
    )
}