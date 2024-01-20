import { useRef } from "react"
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'

export default function Contact(){
    const form = useRef<HTMLFormElement>(null)
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(form.current){
        emailjs.sendForm('service_smu5gv8', 'template_2c0s61g', form.current, 'dRpWGmibyMooG9Wwr')
          .then((result: EmailJSResponseStatus) => {
              console.log(result.text);
          }, (error: EmailJSResponseStatus) => {
              console.log(error.text);
          });
        e.currentTarget.reset();
      };}
    return (
        <div className="px-5 text-center mt-14">
            <div className="mt-10 ">
            <h3 className="text-sm">GET IN TOUCH</h3>
            <h1 className="text-4xl font-extrabold text-blue-400">Contact</h1>
        <div className="grid grid-cols-2">
            <div className="mt-10 ">asdasdasdsa</div>
            <div className=" mt-10 p-4 rounded-lg bg-sky-950">
            <form ref={form} onSubmit={sendEmail} className="flex text-yellow-100 flex-col gap-6 text-start" >
                <div className="flex flex-col">
                <label className="py-4">Your Name</label>
            <input className="p-4 border-none text-black  rounded-lg" type="text" name='name' placeholder='What is your first and last name' required />
                </div>

               <div className="flex flex-col">
               <label className="py-4">Your email</label>
            <input className="p-4 border-none text-black  rounded-lg"type='email' name='email' placeholder='What is your email address ?' required />
               </div>

               <div className="flex flex-col">
               <label className="py-4">Your Message</label>
          <textarea name="message" className="p-4 border-none text-black  rounded-lg" placeholder="What do you want to tell me ?" rows={7} required></textarea>
               </div>
           
         
          <button type="submit" className="p-4 bg-white text-black text-center rounded-lg w-40">Send Message</button>
                
     
            </form>
            </div>
          
            </div>
            </div>
            
      
        </div>
     
    )
}