"use client"
import ProjectCard from "../ProjectCard";
import filler1 from "../../public/filler1.jpeg"
import portfolio1 from "../../public/portfolio1.png"
import portfolio2 from "../../public/portfolio2.png"
import portfolio3 from "../../public/portfolio3.png"
import portfolio4 from "../../public/portfolio4.png"

export default function Portfolio(){

    const projects = [
        { src: portfolio1, alt:"port1",title:"PostUrThought",description:"Description of project used", technologies:"Panda python madlip numpy",github:"https://github.com/Thangnguyenvn98/NextJS-PostUrThought"},
        {src: portfolio2, alt:"port2",title:"Booking App",description:"Description of project used", technologies:"Panda python madlip numpy",github:"https://github.com/Thangnguyenvn98/MERN_booking"},
        {src: portfolio3, alt:"port3",title:"My Movie",description:"Description of project used", technologies:"Panda python madlip numpy",github:"https://github.com/Thangnguyenvn98/Netflix-NextJS"},
        {src: portfolio4, alt:"port3",title:"Portfolio Website",description:"Description of project used", technologies:"Panda python madlip numpy",github:"https://github.com/Thangnguyenvn98/Portfolio-Website"}


    ]


    return(
        <div className="">
        <div className="py-10">
          <div className="mt-8">
          <h2 className="font-bold text-4xl text-blue-400">Projects</h2>
          <p className="break-words font-light text-lg mt-10">The following projects below showcase my skill and experience that can be applied in real worlds. Each project is briefly describe with its functionality and live demos to it. It served as proof for my ability to solve complex problems and manage each projects effectively.</p>
        
          </div>
          <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-8 ">
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project}/>
            ))}
          </div>
         
        
        </div>
      </div>
    )

}