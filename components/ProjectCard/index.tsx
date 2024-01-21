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
        <div className="hover:scale-[1.1] flex-col bg-slate-500 p-8 rounded-lg items-center mt-10">
        <div className="relative rounded-lg overflow-hidden object-cover w-full h-[13rem]">
            <a href={github} target="_blank" className="absolute text-white p-2 z-30 right-2 top-2 rounded-full bg-black text-4xl"><FaGithub/></a>
        <Image src={src} alt={alt} fill/>
        </div>
          
        
        <h2 className="font-bold text-2xl text-white mt-4">{title}</h2>
        <p className="break-words mt-4 text-neutral-600">{description}</p>
        <p className="mt-4">{technologies}</p>
      </div>

    )
}