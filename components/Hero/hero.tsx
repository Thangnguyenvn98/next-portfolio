'use client'


import Image from "next/image"
import portrait from "../../public/IMG_1450.png"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { MdDownloadForOffline, MdOutlineWork } from "react-icons/md"
import { motion } from "framer-motion"
import scroll from "../../public/scroll-black.png"

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
    y:10,
    transition: {
      duration:2,
      repeat:Infinity
    }
  }
}



const Hero = () => {
  return (
    <div className="h-[calc(100vh-100px)] overflow-hidden relative  ">
      <div className="ml-[450px] max-w-[1366px] h-full ">
      <motion.div initial="initial" animate="animate" variants={textVariants} className="flex items-start flex-col h-full gap-10 md:w-[40%] justify-center lg:w-[50%]">
          <motion.h2 variants={textVariants} className="font-semibold text-4xl">THANG NGUYEN</motion.h2>
          <motion.h1 variants={textVariants} className="font-bold text-6xl">Full-Stack Developer 👋</motion.h1>
        
          <motion.p variants={textVariants} className="mt-10 font-light text-lg lg:text-2xl">Hi, I&#39;m Thang Nguyen. A hard-working and passionate software developer based in  <a href="#map" className="lg:text-2xl text-lg">Toronto, Canada 📍</a> </motion.p>
         
         
     
          <motion.div variants={textVariants} className="flex flex-col gap-10">
            <motion.div variants={textVariants} className="flex space-x-6 ">
            <motion.a variants={textVariants} href="https://www.linkedin.com/in/thang-nguyen98/" className="hover:text-blue-500 dark:hover:text-lime-800 border bg-sky-200 p-2 rounded-full dark:bg-green-300" target="_blank"><AiFillLinkedin size={30}/></motion.a>
            <motion.a variants={textVariants} href="https://github.com/Thangnguyenvn98" className="hover:text-blue-500 dark:hover:text-lime-800 border bg-sky-200 p-2 rounded-full dark:bg-green-300" target="_blank"><AiFillGithub size={30}/></motion.a>
            </motion.div>
         
            <motion.div variants={textVariants} className="flex dark:hover:text-lime-800 items-center space-x-6  dark:bg-yellow-600 rounded-md text-lg font-semibold">
             <motion.div variants={textVariants} className=" hover:text-blue-500  bg-slate-300 flex space-x-4 items-center rounded-lg p-4">
             <motion.a variants={textVariants} href="Thang_Resume_2024.pdf" download="thangnguyen-resume">Resume</motion.a>

           
<MdDownloadForOffline size={30}/>
             </motion.div>
             <motion.div variants={textVariants} className="flex hover:text-blue-500  bg-slate-300 items-center space-x-4 rounded-lg p-4">
             <motion.button variants={textVariants} onClick={()=> {}}>Projects</motion.button>
           <MdOutlineWork size={30}/>
             </motion.div>
       
           
           </motion.div>

           </motion.div>

            <motion.div animate="scrollButton" variants={textVariants} className="relative z-30 left-[-20%] w-[200px] h-[200px]">
            <Image alt="scroll" src={scroll}  />
            </motion.div>
           

        </motion.div>
      </div>
    
        <div className="absolute top-[28%] right-10 h-[400px] w-[400px] rounded-full overflow-hidden lg:right-20  ">
            <Image src={portrait} className="object-cover" fill alt="hero"/>
        </div>
        
    </div>
  )
}

export default Hero