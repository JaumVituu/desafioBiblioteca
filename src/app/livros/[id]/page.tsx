import Navbar from "@/app/components/Navbar";
import Detalhes from "@/app/livros/[id]/components/Detalhes";
import Livro from "@/types/Livro";
import { notFound } from "next/navigation";

type Params = Promise<{id : string}>;



async function getLivroById({id} : {id : string}) : Promise <Livro>{
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    console.log(baseUrl);
    const res = await fetch(`${baseUrl}/api/livro/${id}`, {method: 'GET', cache: 'force-cache'});
    if(res.status == 404){
        notFound();
    }
    return res.json();
}


export default async function LivroPagina({params}:{params : Params}){
    const {id} = await params;
    const livro = await getLivroById({id});
    return (
        <div className="w-screen h-screen">
            <Navbar></Navbar>
            <Detalhes livro={livro}></Detalhes>
        </div>
    );
}