"use client"

import macbook from "../../public/macbook.png"
import Image from "next/image";
import TechIcon from "./TechStack";
import Reveal from "../Reveal/reveal";
import { useEffect, useState } from "react";

export default function About() {
    const [isMounted,setIsMounted] = useState(false)
    
    const techIcons = [
      { src: 'https://skillicons.dev/icons?i=html,css,js,ts', alt: 'stack-icon' },
      { src: 'https://skillicons.dev/icons?i=mongodb,express,react,nodejs', alt: 'stack-icon' },
      { src: 'https://skillicons.dev/icons?i=py,java,c,git', alt: 'stack-icon' },
      { src: 'https://skillicons.dev/icons?i=nextjs,tailwind,prisma,postgres', alt: 'stack-icon' },
    ]

    useEffect(()=>{
      setIsMounted(true)
    },[])

    if (!isMounted) {
      return null
    }


    return (
      <div className="p-4 lg:mt-0 flex flex-col md:min-h-screen lg:p-4">
      
            <div className="flex flex-col justify-center items-center relative gap-10 min-h-screen md:grid md:grid-cols-2 md:h-full md:min-w-[800px] md:p-12 lg:items-center lg:top-10 lg:justify-center lg:h-auto lg:min-w-[900px] lg:p-10">
            <div className="text-center flex flex-col gap-4 md:text-left items-center relative top-10 md:h-auto" >
                <Reveal>
                <h1 className="text-4xl font-bold text-blue-400 lg:text-6xl ">Overview</h1>
                </Reveal>
            
              
               <Reveal>
               <p className="text-lg text-wrap lg:text-2xl ">I am currently a computer science student at Toronto Metropolitan University (Ryerson University) who is a skilled full-stack developer. Through experienced in my internship and projects, I have gained experiences in languages such as JavaScript, PHP, Python. Experience in framework like React, MERN stack and developer tools like Git.</p>

               </Reveal>
                
              </div>
           
              <div className=" bg-blue-400 md:overflow-hidden w-[300px] relative h-[200px] top-10 md:top-0 aspect-square rounded-lg lg:w-full lg:h-full md:w-full md:h-[75%]">
                <Image src={macbook} alt="macbook" fill className="object-cover object-center"/>
              </div>
              
       
            </div>
          
          <div className="lg:h-screen min-h-screen md:min-h-[50vh] relative top-[20%] md:top-0 lg:top-20">
         
            <div className="text-center p-10 flex flex-col items-center justify-center">
             <Reveal>
             <h2 className="md:text-4xl font-bold text-blue-400 text-2xl  ">WHAT SKILLS I HAVE</h2>
              
              <h1 className="text-2xl font-semibold ">Tech Stack</h1>
             </Reveal>
          
             
           
         
            </div>
           
            <div className="flex flex-col items-center gap-5 relative top-10">
              {techIcons.map((icon) => (
                <Reveal key={icon.src}>
                <TechIcon key={icon.src} src={icon.src} alt={icon.alt}/>
                </Reveal>  
              ))}
              </div>
          </div>
      </div>
        
    )

}