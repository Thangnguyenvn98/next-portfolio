"use client"

import macbook from "../../public/macbook.png"
import Image from "next/image";
import TechIcon from "./TechStack";

export default function About() {

    const techIcons = [
      { src: 'https://skillicons.dev/icons?i=html,css,js,ts', alt: 'stack-icon' },
      { src: 'https://skillicons.dev/icons?i=mongodb,express,react,nodejs', alt: 'stack-icon' },
      { src: 'https://skillicons.dev/icons?i=py,java,c,git', alt: 'stack-icon' },
      { src: 'https://skillicons.dev/icons?i=nextjs,tailwind,prisma,postgres', alt: 'stack-icon' },
    ]
    return (
        <div className="flex-col items-center justify-center z-30">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 items-center p-10  ">
          <div className="relative h-full rounded-xl overflow-hidden">
            <Image src={macbook} alt="macbook" sizes="(max-height: 300px)" objectFit="cover" fill />
          </div>
          <div className="flex flex-col gap-4 p-4">
            <h2 className="text-2xl md:text-md font-semibold">OVERVIEW</h2>
            <h3 className="font-bold dark:text-green-500 text-blue-400 text-6xl md:text-2xl">About Me</h3>
            <p className="break-words mt-4 font-light text-2xl md:text-md">I am currently a computer science student at Toronto Metropolitan University (Ryerson University) who is a skilled full-stack developer. Through experienced in my internship and projects, I have gained experiences in langauges such as JavaScript, PHP, Python. Experience in framework like React, MERN stack and developer tools like Git </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center mt-20 ">
          <h2 className="text-2xl font-semibold text-blue-400">WHAT SKILLS I HAVE</h2>
          <h2 className="text-6xl font-bold">Tech Stack</h2>
          <div className="mt-8 md:flex-row flex gap-10 justify-center py-8">
          <ul >
                <li className=""> 
                  <TechIcon src={techIcons[0].src} alt={techIcons[0].alt}/>
                  </li>
                <li className="mt-10">
                <TechIcon src={techIcons[1].src} alt={techIcons[1].alt}/>
                   </li>
          </ul>
              <ul >
                <li>
                <TechIcon src={techIcons[2].src} alt={techIcons[3].alt}/>
                   </li>
                <li className="mt-10">
                <TechIcon src={techIcons[3].src} alt={techIcons[3].alt}/>
                   </li>
              </ul>     
          </div>
          
          
        </div>
      </div>
    )

}