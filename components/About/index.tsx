"use client"

import macbook from "../../public/macbook.png"
import Image from "next/image";
import TechIcon from "./TechStack";
import Reveal from "../Reveal/reveal";

export default function About() {

    const techIcons = [
      { src: 'https://skillicons.dev/icons?i=html,css,js,ts', alt: 'stack-icon' },
      { src: 'https://skillicons.dev/icons?i=mongodb,express,react,nodejs', alt: 'stack-icon' },
      { src: 'https://skillicons.dev/icons?i=py,java,c,git', alt: 'stack-icon' },
      { src: 'https://skillicons.dev/icons?i=nextjs,tailwind,prisma,postgres', alt: 'stack-icon' },
    ]
    return (
      <div className="p-4 md:mt-10 lg:mt-0 flex flex-col lg:h-screen">
      
         
        
            <div className="flex flex-col justify-center  items-center lg:justify-start relative gap-10 min-h-screen lg:grid-cols-2 lg:inline-grid lg:min-h-[50%]">
            <div className=" text-center flex flex-col gap-4 lg:text-left  " >
                
                <h1 className="text-4xl font-bold text-blue-400">Overview</h1>
              
              
                <p className="text-lg md:text-lg md:text-wrap text-wrap lg:text-wrap">I am currently a computer science student at Toronto Metropolitan University (Ryerson University) who is a skilled full-stack developer. Through experienced in my internship and projects, I have gained experiences in languages such as JavaScript, PHP, Python. Experience in framework like React, MERN stack and developer tools like Git.</p>
                
              </div>
           
              <div className="md:relative bg-blue-400 md:overflow-hidden w-[300px] relative h-[200px] aspect-square rounded-lg lg:w-full lg:h-[60%] lg:overflow-hidden md:w-[10%] md:h-[20%]">
                <Image src={macbook} alt="macbook" fill className="object-cover"/>
              </div>
              
       
            </div>
          
          <div className="lg:min-h-[50%] md:h-[20vh] min-h-screen relative top-[20%] lg:top-0">
         
            <div className="text-center p-10 flex flex-col items-center justify-center">
             <Reveal>
             <h2 className="md:text-4xl font-bold text-blue-400 text-2xl ">WHAT SKILLS I HAVE</h2>
              
              <h1 className="text-2xl font-semibold">Tech Stack</h1>
             </Reveal>
          
             
           
         
            </div>
           
            <div className="flex flex-col items-center gap-5">
              {techIcons.map((icon) => (
                <Reveal>
                <TechIcon key={icon.src} src={icon.src} alt={icon.alt}/>
                </Reveal>  
              ))}
              </div>
          </div>
      </div>
        
    )

}