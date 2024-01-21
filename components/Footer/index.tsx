import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Footer(){
    const currentDate = new Date();
    return (
        <footer className="px-10 bg-slate-900 w-full py-10 mt-10">
        <div className="px-10 text-white font-bold mt-8">
          <div className="flex-col md:flex md:flex-row md:justify-between gap-4 justify-center text-center md:items-center">
            <p>Copyright &#169; {currentDate.getFullYear()}. All rights are reserved. </p>
            <span className="flex gap-4 text-4xl justify-center p-4 md:justify-end">
            <a href="https://www.linkedin.com/in/thang-nguyen98/" target="_blank"><AiFillLinkedin/></a>
            <a href="https://github.com/Thangnguyenvn98" target="_blank"><AiFillGithub/></a>
            </span>
          </div>
         

        </div>
      </footer>
    )
}