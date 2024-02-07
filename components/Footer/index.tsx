"use client"

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Reveal from "../Reveal/reveal";

export default function Footer(){
    const currentDate = new Date();
    return (
       
        <footer className="px-10 bg-neutral-400 dark:bg-gray-200 w-full py-10 mt-10 lg:h-full md:h-[20vh]">
        <div className="px-10 text-white font-bold mt-8 dark:text-black">
          <div className="flex-col text-xl md:flex md:flex-row md:justify-between gap-4 justify-center text-center md:items-center">
          <Reveal> 
            <p>Copyright &#169; {currentDate.getFullYear()}. All rights are reserved. </p>
            </Reveal>
            <span className="flex gap-4 text-4xl justify-center p-4 md:justify-end">
              <Reveal>
            <a href="https://www.linkedin.com/in/thang-nguyen98/" target="_blank" className="hover:text-blue-500 dark:hover:text-lime-800"><AiFillLinkedin/></a>
            </Reveal>
            <Reveal>
            <a href="https://github.com/Thangnguyenvn98" target="_blank" className="hover:text-blue-500 dark:hover:text-lime-800"><AiFillGithub/></a>
            </Reveal>
            </span>
          </div>
         

        </div>
      </footer>
    
    )
}