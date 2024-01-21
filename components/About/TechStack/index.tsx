import Image from "next/image";

interface Icon {
    src: string;
    alt: string;
}

export default function TechIcon ({src,alt} : Icon) {
    return (
      <Image src={src} width={300} height={80} style={{width:"300px",height:"auto"}} alt={alt} className="hover:-translate-y-6"/>
        
   
    )
}