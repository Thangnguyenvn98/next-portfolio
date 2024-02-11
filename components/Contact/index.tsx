"use client"
import { useEffect, useRef, useState } from "react"
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'
import { TfiEmail } from "react-icons/tfi";

import Map from "../Map";
import Reveal from "../Reveal/reveal";
import Footer from "../Footer";

export default function Contact(){
    const [isMounted,setIsMounted] = useState(false)
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

      useEffect(()=>{
        setIsMounted(true)
      },[])

      if (!isMounted) {
        return null
      }
    return (
        <div className="p-8 dark:text-white lg:relative lg:min-h-[80vh] lg:mt-20 md:min-h-[80vh] md:mt-16">
            <div className="flex flex-col justify-center items-center">
                <Reveal>
                    <h2 className="lg:text-xl text-md mt-20 lg:mt-0">GET IN TOUCH</h2>
                </Reveal>
                <Reveal>
                    <h1 className="lg:text-6xl text-4xl font-extrabold text-blue-400 dark:text-green-500">Contact</h1>
                </Reveal>
            </div>
            <div className="grid grid-cols-1 grid-rows-2 justify-center md:grid-cols-[minmax(200px,350px),minmax(200px,350px)] gap-y-10 sm:flex-row md:grid-rows-[minmax(300px,740px)] sm:gap-x-10 p-10
            lg:grid-cols-[minmax(400px,800px),minmax(400px,800px)] lg:grid-rows-[minmax(400px,800px)]">
                <div className="h-full w-full">
                    <div className="text-center items-center grid grid-cols-1 grid-rows-2 h-full md:h-full gap-y-10 lg:gap-y-20 ">
                        <article className=" md:py-10 md:flex md:flex-col md:justify-center w-full h-full py-5 border-solid bg-transparent shadow-md shadow-black dark:shadow-white rounded-lg ">
                            <div className="flex flex-col gap-6 items-center justify-end p-4">
                                <Reveal>
                                    <TfiEmail size={42} className="text-blue-500 dark:text-green-500"/>
                                </Reveal>
                                <Reveal>
                                    <h3 className="font-extrabold sm:text-4xl text-2xl">Email</h3>
                                </Reveal>
                                <Reveal>
                                    <h3 className="sm:text-lg md:text-2xl text-md">thang.nguyen@torontomu.ca</h3>
                                </Reveal>
                                <Reveal>
                                    <a href="mailto:thang.nguyen@torontomu.ca" className="text-blue-500 dark:text-green-500 font-semibold text-lg">Send me a message</a>
                                </Reveal>
                            </div>
                        </article>
                        <div className='w-auto h-full rounded-lg'>
                            <Map/>
                        </div>
                    </div>
                </div>
                <div className="p-4 rounded-lg bg-black dark:bg-white shadow-md shadow-black dark:shadow-white w-auto">
                    <form ref={form} onSubmit={sendEmail} className="flex text-white dark:text-black font-semibold flex-col gap-6 text-start">
                        <div className="flex flex-col dark:text-black">
                            <Reveal>
                                <h2 className="py-4">Your Full Name</h2>
                            </Reveal>
                            <input className="p-4 border-none text-black dark:bg-black dark:text-white rounded-lg" type="text" name='name' required />
                        </div>
                        <div className="flex flex-col">
                            <Reveal>
                                <h2 className="py-4">Your Email Address</h2>
                            </Reveal>
                            <input className="p-4 border-none text-black dark:bg-black dark:text-white rounded-lg" type='email' name='email' required />
                        </div>
                        <div className="flex flex-col">
                            <Reveal>
                                <h2 className="py-4">Your Message To Me</h2>
                            </Reveal>
                            <textarea name="message" className="p-4 border-none text-black dark:bg-black dark:text-white rounded-lg" rows={7} required></textarea>
                        </div>
                        <Reveal>
                            <button type="submit" value="Send" className="p-4 bg-white text-black dark:bg-black dark:text-white text-center rounded-lg w-40">Send Message</button>
                        </Reveal>
                    </form>
                </div>
            </div>
        </div>
    )
}
