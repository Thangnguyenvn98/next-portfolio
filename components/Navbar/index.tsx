'use client'
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
import ThemeToggle from "../ThemeToggle";
import {motion} from "framer-motion"
import Sidebar from "../Sidebar/sidebar";

interface NavBarProps {
    dark: boolean;
    setDark:React.Dispatch<React.SetStateAction<boolean>>;
  }

export default function Navbar({dark,setDark}: NavBarProps) {
    const [openMenu, setOpenMenu] = useState(false)

    const sections = [
      {name:"home",section:"Home"},
      {name:"about",section:"About"},
    {name:"project",section:"Projects"},
    {name:"contact",section:"Contact"}]

    return (
        <div id="navbar" className="text-black h-[100px] flex justify-between items-center z-[999]  dark:text-white">
             <Sidebar/>
          <div className="cursor-pointer fixed text-2xl left-40 dark:text-white">
            
            <motion.a href="#home" initial={{opacity: 0, scale:0.5}} animate={{opacity: 1, scale:1}} transition={{duration:0.5}} className="hidden md:inline-block font-bold dark:text-white">
              Thang.dev
              </motion.a>
  
          </div>

          <motion.div initial={{opacity: 0, scale:0.5}} animate={{opacity: 1, scale:1}} transition={{duration:0.5}} className="z-[999] md:right-40 fixed right-5 top-8">
             <ThemeToggle dark={dark} setDark={setDark}/>
            </motion.div>
         
       
        
      </div>
    )
}