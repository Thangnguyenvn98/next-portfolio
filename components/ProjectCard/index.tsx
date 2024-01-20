import Image, { StaticImageData } from "next/image"

interface ProjectCardProps {
    src: StaticImageData;
    alt:string;
    title:string;
    description:string;
    technologies:string;

}
export default function ProjectCard({src,alt,title,description,technologies}:ProjectCardProps){
    return (
        <div className="flex-col bg-slate-500 p-4 rounded-lg items-center">
        <div className="relative rounded-lg overflow-hidden object-cover w-full h-40">
        <Image src={src} alt={alt} layout="fill" />
        </div>
          
        
        <h2 className="font-bold text-2xl text-white mt-4">{title}</h2>
        <p className="break-words mt-4">{description}</p>
        <p>{technologies}</p>
      </div>

    )
}