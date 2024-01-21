import { useRef, useEffect } from "react"
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'
import { TfiEmail } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";

// const center: google.maps.LatLngLiteral = {lat: 30, lng: -110};

// function initMap(): void {
//     const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
//       center,
//       zoom: 8
//     });
//   }

export default function Contact(){


    // useEffect(() => {
  
    //  initMap();
    // },
    // [])
  




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
            <div className="mt-10">
            <h3 className="text-sm">GET IN TOUCH</h3>
            <h1 className="text-4xl font-extrabold text-blue-400">Contact</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="mt-10 ">
                <div className="flex flex-col gap-10 text-center h-full">
                    <article className="p-20 border-solid  bg-transparent shadow-md shadow-black rounded-lg flex-grow">
                        <div className="flex flex-col gap-4 justify-center items-center">
                        <TfiEmail className="text-blue-500"/>
                        <h3 className="font-extrabold text-2xl">Email</h3>
                        <h3 className="font-md">thang.nguyen@torontomu.ca</h3>
                        <a href="mailto:thang.nguyen@torontomu.ca" className="text-blue-500 font-semibold">Send me a message</a>
                       
                            </div> 
                     
                    </article>
                    <article className="p-20 border-solid  bg-transparent shadow-md shadow-black rounded-lg flex-grow">
                        <div className="flex flex-col gap-4 justify-center items-center">
                        <FaLocationDot className="text-blue-500"/>
                        <h3>Email</h3>
                        <h3>thang.nguyen@torontomu.ca</h3>
                        a
                        send a message
                            </div> 
                     
                    </article>
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
           
         
          <button type="submit" value="Send" className="p-4 bg-white text-gray-400 text-center rounded-lg w-40">Send Message</button>
                
     
            </form>
            </div>
          
            </div>
            </div>
            
      
        </div>
     
    )
}