import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Navbar(){
    const scrollToSection = (id: string) => {
    const offset = 120
    const targetSection = document.getElementById(id);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - offset,
        behavior: "smooth",
      });
    }
    }
    return (
        <nav id="navbar" className=" bg-white z-50 flex justify-between gap-4 mb-12 py-10 px-10 shadow-md shadow-slate-400 fixed w-full ">
        <button onClick={()=>scrollToSection("home")} className="font-bold">Thang.dev</button>
        <ul className="flex items-center gap-4">
        <li><BsFillMoonStarsFill/></li>   
        <li><button onClick={()=>scrollToSection("home")}>Home</button></li>
          <li><button onClick={()=>scrollToSection("about")}>About</button></li>
          <li><button onClick={()=>scrollToSection("project")}>Projects</button></li>
          <li><button onClick={()=>scrollToSection("contact")}>Contact</button></li>
          <li><a href="Thang_Resume_2024.pdf" download="thangnguyen-resume" className="rounded-md bg-slate-300 p-4">Resume</a></li>

        </ul>
      </nav>
    )
}