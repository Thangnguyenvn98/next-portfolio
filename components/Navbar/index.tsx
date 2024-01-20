import { BsFillMoonStarsFill } from "react-icons/bs";
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
   
    return (
        <nav id="navbar" className=" bg-white z-50 flex justify-between gap-4 mb-12 py-10 px-10 shadow-md shadow-slate-400 fixed w-full ">
        <button onClick={()=>scrollToSection("home")} className="font-bold">Thang.dev</button>
        <ul className="flex items-center gap-6">
        <li><BsFillMoonStarsFill className="cursor-pointer" onClick={()=> setDark(!dark)}/></li>   
        <li><button onClick={()=>scrollToSection("home")}>Home</button></li>
          <li><button onClick={()=>scrollToSection("about")}>About</button></li>
          <li><button onClick={()=>scrollToSection("project")}>Projects</button></li>
          <li><button onClick={()=>scrollToSection("contact")}>Contact</button></li>

        </ul>
      </nav>
    )
}