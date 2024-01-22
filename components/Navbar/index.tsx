"use client"
import { useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";


interface NavBarProps {
    dark: boolean;
    setDark:React.Dispatch<React.SetStateAction<boolean>>;
  }
export  const scrollToSection = (id: string) => {
    
    const width = window.innerWidth
    let offset = width <= 768 ? 70 : 320
  
    const targetSection = document.getElementById(id);
    if (targetSection) {
      if (targetSection.id === "project"){
        offset = 100
      }
      window.scrollTo({
        top: targetSection.offsetTop - offset,
        behavior: "smooth",
      });
    }
    }
export default function Navbar({dark,setDark}: NavBarProps) {
    const [openMenu, setOpenMenu] = useState(false)

    const sections = [
      {name:"home",section:"Home"},
      {name:"about",section:"About"},
    {name:"project",section:"Projects"},
    {name:"contact",section:"Contact"}]

    return (
        <nav id="navbar" className=" bg-white z-50 top-0 left-0 md:shadow-md md:shadow-slate-400 fixed w-full dark:shadow-slate-200 dark:bg-black dark:text-white">
          <div className="flex items-center justify-between py-4 px-7">
            <div className="cursor-pointer text-2xl font-bold flex items-center ">
            <button onClick={()=>scrollToSection("home")}>Thang.dev</button>
            </div>
            <div className="left-1/2 top-6 absolute lg:static md:top-12 text-2xl">
          {dark ?  <BsFillSunFill className="cursor-pointer hover:text-yellow-200" onClick={()=> setDark(!dark)}/> : <BsFillMoonStarsFill className="cursor-pointer hover:text-yellow-200" onClick={()=> setDark(!dark)}/>}
        </div>
            <div onClick={()=>setOpenMenu(!openMenu)} className="absolute right-8 top-4 text-4xl cursor-pointer md:hidden">
          {openMenu ? <IoMdCloseCircle/> : <GiHamburgerMenu/> }
        </div>
        
                <ul className={` dark:text-black dark:md:from-transparent text-xl dark:md:text-white dark:from-slate-100 dark:via-slate-300 dark:to-slate-500 font-semibold md:flex md:items-center md:gap-6 md:static md:z-auto absolute top-20 rounded-lg bg-gradient-to-r from-stone-600 via-stone-800 to-stone-950 p-7 text-white md:text-black  md:from-transparent md:w-auto transition-all duration-500 ease-out ${openMenu ? 'right-[40px]' : 'right-[-490px]'} `} >
                    {sections.map((section,index) => (
                      <li key={index} className="hover:text-blue-500 dark:hover:text-lime-800">
                        <button onClick={()=>scrollToSection(section.name)}>{section.section}</button>
                      </li>
                    ))}
                    
                   
                </ul>
            
          </div>
       
        
      </nav>
    )
}