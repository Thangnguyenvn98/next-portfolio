"use client"
import portfolio1 from "../../public/portfolio1.png"
import portfolio2 from "../../public/portfolio2.png"
import portfolio3 from "../../public/portfolio3.png"
import portfolio4 from "../../public/portfolio4.png"
import portfolio5 from "../../public/portfolio5.png"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"
import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Reveal from "../Reveal/reveal";
import React from "react"

interface itemsProps {
  src:StaticImageData;
  alt:string;
  description:string;
  title:string;
  technologies:string;
  github:string;
}


const Single = ({ item }:{item:itemsProps}) => {
    const [isMounted,setIsMounted] = useState(false)

    useEffect(()=>{
      setIsMounted(true)
    },[])

    if(!isMounted) {
      return null
    }

    return (
        <section id="project" className="dark:bg-black dark:text-white relative md:h-screen lg:min-h-screen" >
          <div className="flex flex-col items-center justify-center w-full h-full overflow-hidden relative md:p-8 top-20 md:top-10 lg:top-20 ">
            <div className="max-w-[1366px] p-10 h-full flex flex-col relative justify-center items-center overflow-hidden gap-10 md:p-0 md:gap-0">
              <div className="relative flex w-full md:max-h-[500px] top-10 min-[390px]:top-14 md:top-0 lg:max-h-[700px] xl:min-h-[700px]" >
                
                <div className="h-full w-full relative overflow-hidden aspect-square ">
                    <Image src={item.src} alt={item.alt} className="object-cover object-center" fill/>
                </div>
                
             
                
              </div>
              <div className="flex flex-col gap-10 relative top-10 lg:min-h-[500px] xl:min-h-[900px]  " >
                <Reveal>
                <h2 className="font-bold text-2xl lg:text-6xl">{item.title}</h2>
                </Reveal>
                <Reveal>
                <p className="font-light lg:text-2xl text-slate-400">{item.description}</p>
                </Reveal>
                <Reveal>
                <p className="font-semibold lg:text-2xl text-blue-400 dark:text-green-500">{item.technologies}</p>
                </Reveal>
                <Reveal>
                  <button className="border-none text-2xl p-2 w-[150px] dark:hover:text-green-500 hover:text-blue-400 text-center cursor-pointer rounded-md bg-slate-300 dark:bg-yellow-600 md:p-4 md:text-lg lg:text-4xl lg:p-8 lg:w-[300px]">
                    
                    <a href={item.github} target='_blank' className='text-center'>See Code</a>
                    
                  </button>
                  </Reveal>
              
              </div>
            </div>
          </div>
        </section>
      );
    };

export default function Portfolio(){
    const [isMounted,setIsMounted] = useState(false)

    const ref= React.useRef<HTMLDivElement>(null);

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

    useEffect(()=>{
      setIsMounted(true)
    },[])

    if(!isMounted) {
      return null
    }
   

    return(
     <div ref={ref} className="relative dark:bg-black">
        <div className="sticky top-0 left-0 z-10 text-center text-blue-400 lg:text-6xl text-4xl font-bold pt-20 xl:pt-6 lg:pt-6">
            <h1 className="dark:text-green-500">Featured Works</h1>
            <motion.div style={{scaleX}} className="h-[10px] bg-black dark:bg-white"></motion.div>
        </div>
        {projects.map((project)=>(
        
              <Single item={project} key={project.alt}/>
         
       
        ))}
     </div>
     
     
    )

}