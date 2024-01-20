import macbook from "../../public/macbook.png"
import Image from "next/image";

export default function About() {
    return (
        <div className="flex-col items-center justify-center">
        <div className="grid gap-4 grid-cols-2 items-center justify-center">
          <div className="relative h-80 rounded-md overflow-hidden object-cover">
            <Image src={macbook} alt="macbook"  />
          </div>
          <div>
            <h3 className="font-bold text-blue-400">ABOUT ME</h3>
            <p className="break-words mt-4 font-light">I am currently a computer science student at Toronto Metropolitan University (Ryerson University) who is a skilled full-stack developer. Through experienced in my internship and projects, I have gained experiences in langauges such as JavaScript, PHP, Python. Experience in framework like React, MERN stack and developer tools like Git </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center mt-10 ">
          <h2 className="font-light text-lg">What Skills I have</h2>
          <h2 className="text-4xl font-bold">Tech Stack</h2>
          <div className="mt-8 flex flex-wrap gap-10 justify-center">
              <ul className="flex-col">
                <li> <Image src="https://skillicons.dev/icons?i=html,css,js,ts" width={300} height={80} alt="stack-icon"/></li>
                <li className="mt-10"> <Image src="https://skillicons.dev/icons?i=mongodb,express,react,nodejs" width={300} height={80} alt="stack-icon"/></li>
              
              </ul>
              <ul className="flex-col">
              <li> <Image src="https://skillicons.dev/icons?i=py,java,c,git" width={300} height={80} alt="stack-icon"/></li>
                <li className="mt-10"> <Image src="https://skillicons.dev/icons?i=nextjs,tailwind,prisma,postgres" width={300} height={80} alt="stack-icon"/></li>
              </ul>
           
        
         
         
          </div>
          
          
        </div>
      </div>
    )

}