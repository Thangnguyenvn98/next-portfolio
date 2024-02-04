'use client'
import {motion, useScroll, useTransform} from "framer-motion"
import { useRef } from "react"

const Parallax = ({type}:{type:string}) => {
    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target :ref,
        offset: ["start start","end start"]
    })

    const yBg = useTransform(scrollYProgress,[0,1], ["0%","500%"])
    const yText = useTransform(scrollYProgress,[0,1], ["0%","100%"])

  return (
    <div ref={ref} className="w-full h-full flex items-center justify-center relative">
        <motion.h1 style={{y: yText}} className="text-[100px] font-bold text-white z-30">{type === "about" ? "About me" : "My Projects"}</motion.h1>
        <motion.div  className="bg-future bg-cover absolute bg-bottom w-full h-full z-3 "></motion.div>
        <motion.div style={{x: yBg}} className="z-1 bg-star bg-cover absolute bg-bottom w-full h-full"></motion.div>

    </div>
  )
}

export default Parallax