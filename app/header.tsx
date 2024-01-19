import Image from "next/image"
import portrait from "../public/IMG_1450.png"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

export default function Header(){

    return (
          <div id="home" className="px-4 py-16">       {/* Container */}
          <div className="flex relative mt-10 gap-4 items-center  justify-center"> {/* Content */}
            <div className="flex relative mt-40 justify-center items-center gap-10"> {/* Hero main */}
            <div className="font-bold flex-col relative">{/* Hero text */}
           <h2 className="text-4xl mt-10 ">Full-Stack Developer 👋</h2>
           <p className="mt-10 font-light break-words">Hi, I&#39;m Thang Nguyen. A hard-working and passionate software developer based in Toronto, Canada.</p>
          <span className="text-2xl py-5 flex mt-10 gap-4 cursor-pointer">
            <a href="https://www.linkedin.com/in/thang-nguyen98/" target="_blank"><AiFillLinkedin/></a>
            <a href="https://github.com/Thangnguyenvn98" target="_blank"><AiFillGithub/></a>
          </span>
  
           </div>
  
           <div className="mx-auto w-60 h-60 overflow-hidden mt-6 relative rounded-full"> {/* Hero Image */}
              <Image alt="photo" src={portrait} layout="fill" objectFit="cover"></Image>
            </div>
            </div>
          </div>
          </div>
          
    )
}