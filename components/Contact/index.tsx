"use client"
import { useRef } from "react"
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'
import { TfiEmail } from "react-icons/tfi";

import Map from "../Map";

export default function Contact(){

    const form = useRef<HTMLFormElement>(null)
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(form.current){
        emailjs.sendForm('service_hm4d74i', 'template_2c0s61g', form.current, 'dRpWGmibyMooG9Wwr')
          .then((result: EmailJSResponseStatus) => {
              console.log(result.text);
          }, (error: EmailJSResponseStatus) => {
              console.log(error.text);
          });
        e.currentTarget.reset();
      };}
    return (
        <div className="p-8 text-center">
          
            <h2 className="lg:text-xl text-md mt-20">GET IN TOUCH</h2>
            <h1 className="lg:text-6xl text-4xl font-extrabold text-blue-400 dark:text-green-500">Contact</h1>
            
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
            <div className="mt-10">
                <div className="flex flex-col gap-10 text-center items-center md:flex-row lg:flex-col">
                    <article className="lg:p-20 py-5 md:py-14 border-solid bg-transparent lg:w-full shadow-md shadow-black dark:shadow-white rounded-lg flex-grow">
                        <div className="flex flex-col p-2 gap-6 justify-center items-center">
                        <TfiEmail size={42} className="text-blue-500 dark:text-green-500"/>
                        <h3 className="font-extrabold text-4xl">Email</h3>
                        <h3 className="text-lg md:text-2xl">thang.nguyen@torontomu.ca</h3>
                        <a href="mailto:thang.nguyen@torontomu.ca" className="text-blue-500 dark:text-green-500 font-semibold text-lg">Send me a message</a>
                       
                            </div> 
                     
                    </article>
                   
                   <Map/>
                   
                    
                </div>
            
                </div>
            <div className=" mt-10 p-4 rounded-lg bg-black dark:bg-white shadow-md shadow-black dark:shadow-white">
            <form ref={form} onSubmit={sendEmail} className="flex text-white dark:text-black font-semibold flex-col gap-6 text-start" >
                <div className="flex flex-col dark:text-black">
                <label className="py-4">Your Full Name</label>
            <input className="p-4 border-none text-black dark:bg-black dark:text-white  rounded-lg" type="text" name='name'  required />
                </div>

               <div className="flex flex-col">
               <label className="py-4">Your Email Adress</label>
            <input className="p-4 border-none text-black dark:bg-black dark:text-white rounded-lg"type='email' name='email' required />
               </div>

               <div className="flex flex-col">
               <label className="py-4">Your Message To Me</label>
          <textarea name="message" className="p-4 border-none text-black dark:bg-black dark:text-white  rounded-lg" rows={7} required></textarea>
               </div>
           
         
          <button type="submit" value="Send" className="p-4 bg-white text-black dark:bg-black dark:text-white text-center rounded-lg w-40">Send Message</button>
                
     
            </form>
            </div>
          
            </div>
            
            
      
        </div>
     
    )
}