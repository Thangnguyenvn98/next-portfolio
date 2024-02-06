'use client'
import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
import Links from './Links/links';
import { motion } from 'framer-motion';



//the width give below to the side bar control the overflow-hidden of the circle

const variants = {
    open: {
        clipPath: "circle(1400px at 50px 50px)",
        transition: {
            type:"spring",
            stiffness: 20
        }
    },
    closed: {
        clipPath: "circle(30px at 50px 50px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping:40
        }
    }
}

const Sidebar = () => {
    const [open,setOpen] = useState(false)
    const [isMounted,setIsMounted] = useState(false)
    useEffect(()=>{
        setIsMounted(true)
    },[])

    if (!isMounted){
        return null
    }

  return (
    <motion.div className="flex flex-col items-center justify-center " animate={open ? "open" : "closed"}>
        <motion.div className="fixed z-[999] md:w-[400px] bg-black top-0 left-0 bottom-0 w-[200px]" variants={variants}>
            <Links/>
        </motion.div>
        <button onClick={()=>setOpen((prev)=> !prev)} className="z-[999] fixed bg-transparent border-none rounded-xl w-[80px] h-[80px] top-[10px]  text-white left-[35px] cursor-pointer ">
            { open ? <IoMdCloseCircle className="  text-white" size={30}/> : <GiHamburgerMenu size={30}/> }
        </button>
    </motion.div>
  )
}

export default Sidebar