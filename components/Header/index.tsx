import Image from "next/image"
import portrait from "../../public/IMG_1450.png"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { FaRegHandPointDown } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { scrollToSection } from "../Navbar";



export default function Header(){

    return (
          <div className="px-4 py-16">       {/* Container */}
          <div className="flex mt-10 gap-4 justify-center"> {/* Content */}
            <div className="flex flex-col-reverse lg:flex-row mt-40 items-center gap-10"> {/* Hero main */}
            <div className="font-bold flex-col text-center lg:text-start ">{/* Hero text */}
           <h2 className="text-4xl mt-10 ">Full-Stack Developer 👋</h2>
           <p className="mt-10 font-light">Hi, I&#39;m Thang Nguyen. A hard-working and passionate software developer based in Toronto, Canada.</p>
          <span className="text-2xl py-5 flex mt-10 gap-4 justify-center lg:justify-start cursor-pointer">
            <a href="https://www.linkedin.com/in/thang-nguyen98/" target="_blank"><AiFillLinkedin/></a>
            <a href="https://github.com/Thangnguyenvn98" target="_blank"><AiFillGithub/></a>
          </span>
          <div className="flex gap-10 items-center mt-10">
         
            
            <div className="flex items-center gap-2 bg-slate-300 rounded-md p-4">
             
              <a href="Thang_Resume_2024.pdf" download="thangnguyen-resume" className="">Resume</a>

            
              <MdDownloadForOffline/>
            </div>

            <div className="flex items-center gap-2">
            <button onClick={()=> scrollToSection("about")}>More about me below</button>
            <FaRegHandPointDown/>
            </div>
          </div>
  
           </div>
  
           <div className="mx-auto w-80 h-80 overflow-hidden relative rounded-full object-cover "> {/* Hero Image */}
              <Image alt="photo" src={portrait} layout="fill"></Image>
            </div>
            </div>
          </div>
          </div>
          
    )
}