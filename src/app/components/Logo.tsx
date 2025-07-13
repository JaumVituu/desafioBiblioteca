import Image from "next/image";

export default function Logo(){
    return(
        <Image 
        priority
        src="/images/logo.png"
        alt="Biblioteca Agora"
        height={200}
        width={400}></Image>
    );
}