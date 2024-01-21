import { useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";


interface NavBarProps {
    dark: boolean;
    setDark:React.Dispatch<React.SetStateAction<boolean>>;
  }
export  const scrollToSection = (id: string) => {
    const offset = 120
    const targetSection = document.getElementById(id);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - offset,
        behavior: "smooth",
      });
    }
    }
export default function Navbar({dark,setDark}:NavBarProps) {
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <nav id="navbar" className=" bg-white z-50 top-0 left-0 md:shadow-md md:shadow-slate-400 fixed w-full">
          <div className="flex items-center justify-between py-4 px-7">
            <div className="cursor-pointer text-2xl font-bold flex items-center ">
            <button onClick={()=>scrollToSection("home")}>Thang.dev</button>
            </div>
            <div className="left-1/2 top-6 absolute lg:static md:top-12">
          {dark ?  <BsFillSunFill className="cursor-pointer" onClick={()=> setDark(!dark)}/> : <BsFillMoonStarsFill className="cursor-pointer" onClick={()=> setDark(!dark)}/>}
        </div>
            <div onClick={()=>setOpenMenu(!openMenu)} className="absolute right-8 top-4 text-4xl cursor-pointer md:hidden">
          {openMenu ? <IoMdCloseCircle/> : <GiHamburgerMenu/> }
        </div>
        
                <ul className={`md:flex md:items-center md:gap-6 md:static md:z-auto absolute top-20 rounded-lg bg-gradient-to-r from-stone-600 via-stone-800 to-stone-950 p-7 text-white font-poppins md:text-black  md:from-white md:w-auto transition-all duration-700 ease-in-out ${openMenu ? 'left-[35rem]' : 'right-[-490px]'} `} >
                    <li className=""><button onClick={()=>scrollToSection("home")}>Home</button></li>
                    <li className=""><button onClick={()=>scrollToSection("about")}>About</button></li>
                    <li className=""><button onClick={()=>scrollToSection("project")}>Projects</button></li>
                    <li className=""><button onClick={()=>scrollToSection("contact")}>Contact</button></li>
                </ul>
            
          </div>
       
        
      </nav>
    )
}