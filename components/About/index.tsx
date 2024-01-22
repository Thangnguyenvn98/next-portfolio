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
        <div className="flex-col items-center justify-center mt-40 md:mt-25">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 items-center ">
          <div className="relative h-80 md:h-60 lg:h-80 rounded-xl overflow-hidden object-cover">
            <Image src={macbook} alt="macbook" sizes="(max-height: 30rem)" fill />
          </div>
          <div>
            <h2 className="text-md">OVERVIEW</h2>
            <h3 className="font-bold dark:text-green-500 text-blue-400 text-4xl">About Me</h3>
            <p className="break-words mt-4 font-light text-sm">I am currently a computer science student at Toronto Metropolitan University (Ryerson University) who is a skilled full-stack developer. Through experienced in my internship and projects, I have gained experiences in langauges such as JavaScript, PHP, Python. Experience in framework like React, MERN stack and developer tools like Git </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center mt-10 ">
          <h2 className="font-light text-lg">What Skills I have</h2>
          <h2 className="text-4xl font-bold">Tech Stack</h2>
          <div className="mt-8 flex gap-10 justify-center py-8 flex-wrap">
          <ul >
                <li> 
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