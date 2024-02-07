import Image from "next/image";

interface Icon {
    src: string;
    alt: string;
}

export default function TechIcon ({src,alt} : Icon) {
    return (
      <div className="relative lg:w-[500px] lg:h-[90px] md:w-[30%] md:h-[30%] h-[120px] w-[200px]">
        <Image src={src} alt={alt} fill />
      </div>
      
        
   
    )
}