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
// export  const scrollToSection = (id: string) => {
    
//     const width = window.innerWidth
//     let offset = width <= 768 ? 70 : 130
  
//     const targetSection = document.getElementById(id);
//     if (targetSection) {
  
//       window.scrollTo({
//         top: targetSection.offsetTop - offset,
//         behavior: "smooth",
//       });
//     }
//     }
export default function Navbar({dark,setDark}: NavBarProps) {
    const [openMenu, setOpenMenu] = useState(false)

    const sections = [
      {name:"home",section:"Home"},
      {name:"about",section:"About"},
    {name:"project",section:"Projects"},
    {name:"contact",section:"Contact"}]

    return (
        <div id="navbar" className=" bg-white text-black h-[100px] md:shadow-md md:shadow-slate-400 dark:shadow-slate-200 dark:bg-black dark:text-white">
             <Sidebar/>
          <div className="flex ml-28 h-full justify-end md:justify-between items-center max-w-screen-2xl">
        
            <motion.span initial={{opacity: 0, scale:0.5}} animate={{opacity: 1, scale:1}} transition={{duration:0.5}} className="hidden md:block font-bold">Thang.dev</motion.span>
   
           
            <div className="text-2xl text-black flex gap-[20px] mr-36">
             <ThemeToggle dark={dark} setDark={setDark}/>
        </div>
        
            {/* <div onClick={()=>setOpenMenu(!openMenu)} className="absolute right-8 top-4 text-4xl cursor-pointer md:hidden">
          {openMenu ? <IoMdCloseCircle/> : <GiHamburgerMenu/> }
        </div> */}
        
         
            
          </div>
       
        
      </div>
    )
}