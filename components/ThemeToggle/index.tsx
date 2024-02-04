'use client'


import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

interface ThemeToggleProps {
    dark: boolean;
    setDark:React.Dispatch<React.SetStateAction<boolean>>;
    
}
export default function ThemeToggle({setDark,dark}:ThemeToggleProps){
    return (
        <button className='cursor-pointer hover:text-yellow-100 text-black dark:text-white dark:hover:text-yellow-200' onClick={()=>setDark(!dark)}>
            {dark ? <BsFillSunFill/> : <BsFillMoonStarsFill/>}
        </button>
    
    )
}