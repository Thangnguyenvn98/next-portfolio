import Image from "next/image";

interface Icon {
    src: string;
    alt: string;
}

export default function TechIcon ({src,alt} : Icon) {
    return (
      <Image src={src} alt={alt} fill className="hover:-translate-y-6 "/>
        
   
    )
}