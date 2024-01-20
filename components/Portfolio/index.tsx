import ProjectCard from "../ProjectCard";
import filler1 from "../../public/filler1.jpeg"

export default function Portfolio(){
    return(
        <div className="px-4 mt-10">
        <div className="flex-col">
          <div>
          <h2 className="font-bold text-4xl">Projects</h2>
          <p className="break-words font-light text-lg mt-10">The following projects below showcase my skill and experience that can be applied in real worlds. Each project is briefly describe with its functionality and live demos to it. It served as proof for my ability to solve complex problems and manage each projects effectively.</p>
        
          </div>
          <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-8 ">
            <ProjectCard
            src={filler1}
            alt="filler1"
            description="Descriptuion of hte porject used"
            title="Project 1"
            technologies="Panda pyhton madlif numpy"
            />
                 <ProjectCard
            src={filler1}
            alt="filler1"
            description="Descriptuion of hte porject used"
            title="Project 1"
            technologies="Panda pyhton madlif numpy"
            />
                 <ProjectCard
            src={filler1}
            alt="filler1"
            description="Descriptuion of hte porject used"
            title="Project 1"
            technologies="Panda pyhton madlif numpy"
            />
          </div>
         
        
        </div>
      </div>
    )

}