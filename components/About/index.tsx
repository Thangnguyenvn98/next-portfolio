"use client"

import macbook from "../../public/macbook.png"
import Image from "next/image";

export default function About() {
    return (
        <div className="flex-col items-center justify-center mt-40 md:mt-25">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 items-center ">
          <div className="relative h-80 md:h-60 lg:h-80 rounded-xl overflow-hidden object-cover">
            <Image src={macbook} alt="macbook" sizes="(max-height: 30rem)" fill />
          </div>
          <div>
            <h3 className="font-bold text-blue-400 text-4xl">About Me</h3>
            <p className="break-words mt-4 font-light text-sm">I am currently a computer science student at Toronto Metropolitan University (Ryerson University) who is a skilled full-stack developer. Through experienced in my internship and projects, I have gained experiences in langauges such as JavaScript, PHP, Python. Experience in framework like React, MERN stack and developer tools like Git </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center mt-10 ">
          <h2 className="font-light text-lg">What Skills I have</h2>
          <h2 className="text-4xl font-bold">Tech Stack</h2>
          <div className="mt-8 flex flex-wrap gap-10 justify-center py-8">
              <ul >
                <li> <Image src="https://skillicons.dev/icons?i=html,css,js,ts" width={300} height={80}  style={{width:"300px",height:"auto"}} alt="stack-icon"/></li>
                <li className="mt-10"> <Image src="https://skillicons.dev/icons?i=mongodb,express,react,nodejs"  style={{width:"300px",height:"auto"}} width={300} height={80} alt="stack-icon"/></li>
              
              </ul>
              <ul >
              <li> <Image src="https://skillicons.dev/icons?i=py,java,c,git" width={300} height={80} style={{width:"300px",height:"auto"}} alt="stack-icon"/></li>
                <li className="mt-10"> <Image src="https://skillicons.dev/icons?i=nextjs,tailwind,prisma,postgres"  style={{width:"300px",height:"auto"}} width={300} height={80} alt="stack-icon"/></li>
              </ul>
           
        
         
         
          </div>
          
          
        </div>
      </div>
    )

}