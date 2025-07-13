import LivroCat from "@/app/components/catalogo/LivroCat"
import Livro from "@/types/Livro";

export async function getLivros(query:string) : Promise<Livro[]>{
    console.log(query);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/livro?${query}`, {method: 'GET', cache: 'no-store' });
    const data = await res.json();
    //console.log(data);
    return data;
}

export default async function Catalogo({searchParams,}:{searchParams: { [key: string]: string | string[] | undefined };}){
    const {genero, ano} = await searchParams;
    const query = new URLSearchParams();
    if (genero) query.append("genero", genero.toString());
    if (ano) query.append("ano", ano.toString());
    const livros = await getLivros(query.toString());

    return(
        <div className="h-fit w-screeen flex flex-wrap items-center">
            {livros.map((livro) => (
                <LivroCat key={livro.id} livro={livro}></LivroCat>
            ))}
        </div>
    );
}