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
        <div id="navbar" className="text-black h-[100px] dark:bg-black dark:text-white">
             <Sidebar/>
          <div className="fixed top-[3%] left-[10%] md:left-[20%] cursor-pointer z-[999]">
            
            <motion.a href="#home" initial={{opacity: 0, scale:0.5}} animate={{opacity: 1, scale:1}} transition={{duration:0.5}} className="hidden md:inline-block text-2xl font-bold">
              Thang.dev
              </motion.a>
   
            
          
           
            
        
      
        
         
            
          </div>
          <motion.div initial={{opacity: 0, scale:0.5}} animate={{opacity: 1, scale:1}} transition={{duration:0.5}} className="text-2xl text-black fixed top-[4%] md:top-[3%] z-[999] left-[45%] md:left-[60%]">
             <ThemeToggle dark={dark} setDark={setDark}/>
            </motion.div>
       
        
      </div>
    )
}