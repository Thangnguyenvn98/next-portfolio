'use client'


import Image from "next/image"
import portrait from "../../public/IMG_1450.png"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { MdDownloadForOffline, MdOutlineWork } from "react-icons/md"
import { motion } from "framer-motion"
import scroll from "../../public/scroll-black.png"
import scrollWhite from "../../public/scroll.png"
import { useEffect, useState } from "react"
import Reveal from "../Reveal/reveal"


const textVariants = {
  initial: {
    x:-500,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition : {
      duration: 1,
      staggerChildren: 0.1
    }
  },
  scrollButton: {
    opacity:0,
    y:15,
    transition: {
      duration:2,
      repeat:Infinity
    }
  }
}




const Hero = () => {

  const [isMounted,setIsMounted] =useState(false)
  useEffect(() => {
    setIsMounted(true)
  },[])

  if (!isMounted) {
    return null;
  }
  return (
    <div className="xl:h-[calc(100vh-100px)] min-h-screen overflow-hidden">
      <div className="xl:ml-[20%] xl:max-w-[1366px] xl:h-full min-h-screen flex flex-col-reverse justify-between items-center xl:flex-row xl:justify-between xl:space-x-10 xl:mt-20">
      <div className="flex xl:items-start flex-col xl:h-full w-full gap-6 h-[100vh] md:h-[60vh] lg:h-[82vh] md:top-0 relative top-4 items-center text-center xl:text-left md:w-[40%] justify-center xl:w-[60%]">
          <Reveal>
          <h2  className="font-bold text-4xl lg:text-6xl">THANG NGUYEN</h2>
          </Reveal>
          <Reveal>
          <h1  className="font-semibold text-lg lg:text-4xl">Full-Stack Developer👋</h1>
          </Reveal>
          
        <Reveal>
        <p  className="mt-10 font-light text-lg lg:text-2xl">A hard-working and passionate software developer based in  <a href="#map" className="lg:text-2xl text-lg font-bold">Toronto, Canada 📍</a> </p>

        </Reveal>
        
         
         
         
      
          <div  className="flex flex-col gap-6 lg:gap-10">
           
            <div  className="flex space-x-6 xl:justify-start justify-center lg:gap-6">
             <Reveal>
            <a  href="https://www.linkedin.com/in/thang-nguyen98/" className="hover:text-blue-500 dark:hover:text-lime-800 " target="_blank"><AiFillLinkedin size={50}/></a>
            </Reveal>
            <Reveal>
            <a  href="https://github.com/Thangnguyenvn98" className="hover:text-blue-500 dark:hover:text-lime-800 " target="_blank"><AiFillGithub size={50}/></a>
            </Reveal>
            </div>
             
         
            <div  className="flex items-center space-x-6 rounded-md text-lg font-semibold">
              <Reveal>
              <div  className=" hover:text-blue-500 dark:hover:text-lime-800 dark:bg-yellow-600 bg-slate-300 lg:text-2xl flex space-x-4 items-center rounded-lg p-4 lg:p-10">
             <a  href="Thang_Resume_2024.pdf" download="thangnguyen-resume">Resume</a>

           
<MdDownloadForOffline size={30}/>
             </div>
              </Reveal>
              <Reveal>
             <div  className="flex hover:text-blue-500  bg-slate-300 items-center lg:text-2xl space-x-4 rounded-lg p-4 dark:hover:text-lime-800 dark:bg-yellow-600 lg:p-10">
            
              <button  onClick={()=> {}}>Projects</button>
              <MdOutlineWork size={30}/>
            
            
          
             </div>
             </Reveal>
       
           
           </div>

           </div>

            <motion.div animate="scrollButton" variants={textVariants} className="relative z-30 lg:left-[1] w-[30%] h-[15%] lg:h-[30%] lg:w-[50%] dark:lg:left-[16%] dark:lg:top-[5%]">
              <a href="#about">
              <Image alt="scroll" src={scroll} className="dark:hidden" />
            <Image alt="scroll" src={scrollWhite} className="dark:block hidden" />
              </a>
        
            </motion.div>
           

        </div>
        <div className="relative h-[300px] w-[300px] md:h-[500px] md:w-[500px] lg:w-[700px] lg:h-[700px] xl:top-[17%] xl:h-[50%] xl:w-[50%] top-2 rounded-full overflow-hidden">
            <Image src={portrait} className="object-cover" fill alt="hero"/>
      </div>
      </div>
    
     
        
    </div>
  )
}

export default Hero