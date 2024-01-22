"use client"
import Image, { StaticImageData } from "next/image"
import { FaGithub } from "react-icons/fa";


interface ProjectCardProps {
    src: StaticImageData;
    alt:string;
    title:string;
    description:string;
    technologies:string;
    github:string;

}
export default function ProjectCard({src,alt,title,description,technologies,github}:ProjectCardProps){
    return (
        <div className="md:hover:scale-[1.1] flex flex-col shadow-md shadow-black dark:shadow-white bg-neutral-400 dark:bg-gray-200 md:p-8 p-12 rounded-lg items-center mt-10">
        <div className="relative rounded-lg overflow-hidden object-cover w-full h-[15rem] lg:h-[20rem]">
            <a href={github} target="_blank" className="absolute text-white p-2 z-30 right-2 top-2 rounded-full bg-black text-4xl"><FaGithub/></a>
        <Image src={src} alt={alt} fill/>
        </div>
          <div className="flex flex-col justify-between mb-10 gap-8">
            
            <h2 className="font-bold text-2xl text-white dark:text-black mt-4 ">{title}</h2>
        <p className="break-words mt-4 text-stone-900 dark:text-stone-500  ">{description}</p>
        <p className="text-blue-500 font-medium dark:text-green-500 ">{technologies}</p>

            </div>
            
         
               
   
        
      
   
      </div>

    )
}