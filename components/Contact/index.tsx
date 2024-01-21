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
        <div className="px-5 text-center mt-14">
            <div className="mt-10 lg:mt-40">
            <h3 className="text-sm">GET IN TOUCH</h3>
            <h1 className="text-4xl font-extrabold text-blue-400">Contact</h1>
            
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
            <div className="mt-10">
                <div className="flex flex-col gap-10 text-center items-center md:flex-row lg:flex-col">
                    <article className="lg:p-20 py-5 w-full md:py-14 border-solid bg-transparent lg:w-full shadow-md shadow-black rounded-lg flex-grow">
                        <div className="flex flex-col p-2 gap-6 justify-center items-center">
                        <TfiEmail className="text-blue-500"/>
                        <h3 className="font-extrabold text-2xl">Email</h3>
                        <h3 className="font-md">thang.nguyen@torontomu.ca</h3>
                        <a href="mailto:thang.nguyen@torontomu.ca" className="text-blue-500 font-semibold">Send me a message</a>
                       
                            </div> 
                     
                    </article>
                   
                    {/* <Map/> */}
                </div>
            
                </div>
            <div className=" mt-10 p-4 rounded-lg bg-black">
            <form ref={form} onSubmit={sendEmail} className="flex text-white font-semibold flex-col gap-6 text-start" >
                <div className="flex flex-col">
                <label className="py-4">Your Full Name</label>
            <input className="p-4 border-none text-black  rounded-lg" type="text" name='name'  required />
                </div>

               <div className="flex flex-col">
               <label className="py-4">Your Email Adress</label>
            <input className="p-4 border-none text-black  rounded-lg"type='email' name='email' required />
               </div>

               <div className="flex flex-col">
               <label className="py-4">Your Message To Me</label>
          <textarea name="message" className="p-4 border-none text-black  rounded-lg" rows={7} required></textarea>
               </div>
           
         
          <button type="submit" value="Send" className="p-4 bg-white text-black text-center rounded-lg w-40">Send Message</button>
                
     
            </form>
            </div>
          
            </div>
            </div>
            
      
        </div>
     
    )
}