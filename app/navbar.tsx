import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Navbar(){
    return (
        <nav className=" bg-white z-50 flex justify-between gap-4 mb-12 py-10 px-10 shadow-md shadow-slate-400 fixed w-full ">
        <a href="#" className="font-bold">Thang.dev</a>
        <ul className="flex items-center gap-4">
        <li><BsFillMoonStarsFill/></li>   
        
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
          <li><a href="Thang_Resume_2024.pdf" download="thangnguyen-resume" className="rounded-md bg-slate-300 p-4">Resume</a></li>

        </ul>
      </nav>
    )
}