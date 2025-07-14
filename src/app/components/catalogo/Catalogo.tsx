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
    const {genero, anoDe, anoAte, busca} = await searchParams;
    const query = new URLSearchParams();
    if (genero) query.append("genero", genero.toString());
    if (anoDe) query.append("anoDe", anoDe.toString());
    if (anoAte) query.append("anoAte", anoAte.toString());
    if (busca) query.append("busca",busca.toString());
    const livros = await getLivros(query.toString());
    //Se encontrar livro
    if (livros.length > 0){
        return(
            <div className="h-fit flex flex-wrap w-full">
                {livros.map((livro) => (
                    <LivroCat key={livro.id} livro={livro}></LivroCat>
                ))}
            </div>
        );
    }
    //Se não encontrar
    return(
        <div className="h-150 flex flex-col w-full justify-center items-center">
            <h1 className="my-10 text-center">Nenhum livro encontrado</h1>
            <h1 style={{color:'black', fontWeight:'100', fontSize:30}} className="text-center">Tente alterar os filtros ou cadastrar novos livros</h1>
        </div>
    );
}