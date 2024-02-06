import Image from "next/image";

interface Icon {
    src: string;
    alt: string;
}

export default function TechIcon ({src,alt} : Icon) {
    return (
      <div className="relative lg:w-[500px] lg:h-[90px] flex overflow-hidden ">
        <Image src={src} alt={alt} fill />
      </div>
      
        
   
    )
}