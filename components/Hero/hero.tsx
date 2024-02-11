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
    <div className="min-[1500px]:h-[calc(100vh-100px)] min-h-screen overflow-hidden">
      <div className="min-[1500px]:ml-[20%] min-[1500px]:max-w-[1366px] min-[1500px]:h-full min-h-screen flex flex-col-reverse justify-between items-center min-[1500px]:flex-row min-[1500px]:justify-between min-[1500px]:space-x-10 min-[1500px]:mt-20">
      <div className="flex min-[1500px]:items-start sm:h-[90vh] flex-col min-[1500px]:h-full w-full gap-6 min-[390px]:min-h-[0] min-[390px]:top-0 min-h-[35rem] md:h-[60vh] lg:h-[82vh] md:top-0 relative top-6 items-center text-center min-[1500px]:text-left md:w-[40%] justify-center min-[1500px]:w-[60%]">
          <Reveal>
          <h2  className="font-bold text-4xl lg:text-6xl lg:text-nowrap">THANG NGUYEN</h2>
          </Reveal>
          <Reveal>
          <h1  className="font-semibold text-lg lg:text-4xl">Full-Stack Developer👋</h1>
          </Reveal>
          
        <Reveal>
        <p  className="font-light text-lg lg:text-2xl">A hard-working and passionate software developer based in  <a href="#map" className="lg:text-2xl text-lg font-bold lg:text-nowrap">Toronto, Canada 📍</a> </p>

        </Reveal>
        
         
         
         
      
          <div  className="flex flex-col gap-6 lg:gap-10">
           
            <div  className="flex space-x-6 min-[1500px]:justify-start justify-center lg:gap-6">
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

            <motion.div animate="scrollButton" variants={textVariants} className="relative z-30 lg:left-[1] w-[30%] h-[15%] md:h-[30%] md:w-[50%] min-[1500px]:left-[-20%] min-[1500px]:top-20 dark:md:left-[14%] min-[1500px]:dark:left-[-3%] min-[1500px]:dark:top-40 dark:md:top-[5%] lg:h-[30%] lg:w-[50%] dark:lg:left-[17%] dark:lg:top-[5%]">
              <a href="#about">
              <Image alt="scroll" src={scroll} className="dark:hidden" />
            <Image alt="scroll" src={scrollWhite} className="dark:block hidden" />
              </a>
        
            </motion.div>
           

        </div>
        <div className="min-h-[40%] min-[1500px]:min-h-[80%] ">
        <div className="relative md:h-[500px] md:w-[500px] w-[300px] h-[300px] lg:w-[700px] lg:h-[700px] top-2 min-[390px]:top-0 rounded-full overflow-hidden">
            <Image src={portrait} className="object-cover" fill alt="hero"/>
      </div>
        </div>
   
      </div>
    
     
        
    </div>
  )
}

export default Hero