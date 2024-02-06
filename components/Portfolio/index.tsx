"use client"
import ProjectCard from "../ProjectCard";
import portfolio1 from "../../public/portfolio1.png"
import portfolio2 from "../../public/portfolio2.png"
import portfolio3 from "../../public/portfolio3.png"
import portfolio4 from "../../public/portfolio4.png"
import portfolio5 from "../../public/portfolio5.png"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"
import { useRef } from "react";
import Image from "next/image";


const Single = ({ item }) => {
    const ref = useRef();
  
    const { scrollYProgress } = useScroll({
      target: ref,
    });
  
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section id="project" >
          <div className="flex items-center justify-center w-full h-full overflow-hidden">
            <div className="max-w-[1366px] h-full flex justify-center items-center gap-10">
              <div className="flex-1 h-50%" ref={ref}>
                <div className="w-full h-full relative">
                    <Image src={item.src} alt={item.alt} className="object-cover"/>
                </div>
                
              </div>
              <motion.div className="flex flex-1 flex-col gap-10" style={{y}}>
                <h2 className="font-bold text-6xl">{item.title}</h2>
                <p className="font-light text-xl">{item.description}</p>
                <button className="border-none text-lg  p-10 w-[200px] cursor-pointer rounded-md bg-blue-400">See Demo</button>
              </motion.div>
            </div>
          </div>
        </section>
      );
    };

export default function Portfolio(){

    const ref = useRef();

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "start start"],
    });
  
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
    });

    const projects = [
        {src: portfolio4, alt:"port4",title:"Admin Dashboard",description:"A full-stack application utilizing NextJS 14 and Flask as backend for managing your ecommerce store that track revenue, stock, orders, and way to create your products with sizes, colors and categories", technologies:"Next.js Flask Python Tailwind SQLAlchemy PlanetScale",github:"https://github.com/Thangnguyenvn98/Flask-NextJS-Ecommerce"},
        {src:portfolio5, alt:"port5",title:"Ecommerce Store",description:"A clothing store that utilized React framework and fetch its product from an admin dashboard with real time updates, ability to filter your products based on its size, color, category and Stripe payment integration", technologies:"Next.js Tailwind Toast Zustand Stripe",github:"https://github.com/Thangnguyenvn98/Flask-NextJS-Ecommerce/tree/store"},
        { src: portfolio1, alt:"port1",title:"PostUrThought",description:"A NextJS 13 full-stack applications for user to write what on their mind, edit as well as comment on other posts. Utilized Toast library for interactive responses and authentication with Google.", technologies:"Next.js Tanstack Tailwind PostgreSQL Prisma",github:"https://github.com/Thangnguyenvn98/NextJS-PostUrThought"},
        {src: portfolio2, alt:"port2",title:"Booking App",description:"A MERN stack that allow user to reserve a places and list their own places by uploading photo. It has built in sign in system that utilized Express and JWT as well as cookie to store user sessions.", technologies:"MongoDB Express React.js Node.JS Tailwind",github:"https://github.com/Thangnguyenvn98/MERN_booking"},
        {src: portfolio3, alt:"port3",title:"My Movie",description:"A movie app that utilized Next-Auth for signing in, allowing user to play a movie, favorite and add it to their own list. There also a search functionality for the movies with data fetched from MongoDB. ", technologies:"Next.js SWR Tailwind Next-Auth Prisma",github:"https://github.com/Thangnguyenvn98/Netflix-NextJS"},
        


    ]
   

    return(
     <div ref={ref} className="relative">
        <div className="sticky top-0 left-0 z-10 text-center text-blue-400 text-6xl font-bold pt-20">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className="h-[10px] bg-black"></motion.div>
        </div>
        {projects.map((project)=>(
           <Single item={project} key={project.alt}/>
        ))}
     </div>
     
     
    )

}