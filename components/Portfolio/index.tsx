import ProjectCard from "../ProjectCard";
import filler1 from "../../public/filler1.jpeg"

export default function Portfolio(){

    const projects = [
        { src: filler1, alt:"filter1",title:"Project1",description:"Description of project used", technologies:"Panda python madlip numpy"},
        {src: filler1, alt:"filter1",title:"Project1",description:"Description of project used", technologies:"Panda python madlip numpy"},
        {src: filler1, alt:"filter1",title:"Project1",description:"Description of project used", technologies:"Panda python madlip numpy"}

    ]


    return(
        <div className="">
        <div className="py-10 ">
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