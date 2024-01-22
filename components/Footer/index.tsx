"use client"

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Footer(){
    const currentDate = new Date();
    return (
        <footer className="px-10 bg-neutral-400 dark:bg-gray-200 w-full py-10 mt-10">
        <div className="px-10 text-white font-bold mt-8 dark:text-black">
          <div className="flex-col md:flex md:flex-row md:justify-between gap-4 justify-center text-center md:items-center">
            <p>Copyright &#169; {currentDate.getFullYear()}. All rights are reserved. </p>
            <span className="flex gap-4 text-4xl justify-center p-4 md:justify-end">
            <a href="https://www.linkedin.com/in/thang-nguyen98/" target="_blank" className="hover:text-blue-500 dark:hover:text-lime-800"><AiFillLinkedin/></a>
            <a href="https://github.com/Thangnguyenvn98" target="_blank" className="hover:text-blue-500 dark:hover:text-lime-800"><AiFillGithub/></a>
            </span>
          </div>
         

        </div>
      </footer>
    )
}