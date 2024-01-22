"use client"
import ProjectCard from "../ProjectCard";
import portfolio1 from "../../public/portfolio1.png"
import portfolio2 from "../../public/portfolio2.png"
import portfolio3 from "../../public/portfolio3.png"

export default function Portfolio(){

    const projects = [
        { src: portfolio1, alt:"port1",title:"PostUrThought",description:"A NextJS 13 full-stack applications for user to write what on their mind, edit as well as comment on other posts. Utilized Toast library for interactive responses and authentication with Google.", technologies:"Next.js Tanstack Tailwind PostgreSQL Prisma",github:"https://github.com/Thangnguyenvn98/NextJS-PostUrThought"},
        {src: portfolio2, alt:"port2",title:"Booking App",description:"A MERN stack that allow user to reserve a places and list their own places by uploading photo. It has built in sign in system that utilized Express and JWT as well as cookie to store user sessions.", technologies:"MongoDB Express React.js Node.JS Tailwind",github:"https://github.com/Thangnguyenvn98/MERN_booking"},
        {src: portfolio3, alt:"port3",title:"My Movie",description:"A movie app that utilized Next-Auth for signing in, allowing user to play a movie, favorite and add it to their own list. There also a search functionality for the movies with data fetched from MongoDB. ", technologies:"Next.js SWR Tailwind Next-Auth Prisma",github:"https://github.com/Thangnguyenvn98/Netflix-NextJS"},
        


    ]


    return(
        
        <div className="md:p-14 p-4 relative mt-12">
          <div className="mt-20 flex flex-col">
          <h2 className="font-bold text-6xl dark:text-green-500 text-blue-400">Projects</h2>
          <p className="break-words font-light text-2xl mt-10">The following projects below showcase my skill and experience that can be applied in real worlds. Each project is briefly describe with its functionality and the source code for it linked to Github. It served as proof for my ability to solve complex problems and manage each projects effectively.</p>
        
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8 ">
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project}/>
            ))}
          </div>
         
        
        </div>
     
    )

}