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
      <div className="p-4 h-full md:mt-10 lg:mt-0 flex flex-col justify-center">
          <div className="lg:h-1/2  flex items-center">
            <div className="flex p-10 space-x-10 justify-center items-center ">
              <div className="relative overflow-hidden aspect-square rounded-md lg:w-1/2 lg:h-[400px]">
                <Image src={macbook} alt="macbook" fill className="object-cover"/>
              </div>
              <div className="w-1/2 flex flex-col space-y-10" >
                <h1 className="text-4xl font-bold text-blue-400">Overview</h1>
                <p className="text-wrap text-lg">I am currently a computer science student at Toronto Metropolitan University (Ryerson University) who is a skilled full-stack developer. Through experienced in my internship and projects, I have gained experiences in languages such as JavaScript, PHP, Python. Experience in framework like React, MERN stack and developer tools like Git.</p>
              </div>
            </div>
          </div>
          <div className="h-1/2  ">
            <div className="text-center p-10">
              <h2 className="text-4xl font-bold text-blue-400">WHAT SKILLS I HAVE</h2>
              <h1 className="text-2xl font-semibold">Tech Stack</h1>
         
            </div>
            <div className="flex flex-col items-center gap-5">
              {techIcons.map((icon) => (
                <TechIcon src={icon.src} alt={icon.alt}/>
              ))}
              </div>
          </div>
      </div>
        
    )

}