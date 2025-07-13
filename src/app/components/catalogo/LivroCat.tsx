'use client';
import Livro from "@/types/Livro";
import Link from "next/link";

export default function LivroCat({livro} : {livro : Livro}){
    const dica = `Ver detalhes de ${livro.titulo}`  //Mensagem que aparece no hover
    const url = `/livros/${livro.id}`;
    const limiteCaractere = 43;
    const titulo = (livro.titulo.length > limiteCaractere)?livro.titulo.slice(0,limiteCaractere) + "...":livro.titulo;
    const autor = (livro.autor.length > limiteCaractere)?livro.autor.slice(0,limiteCaractere) + "...":livro.autor;
    return(
        <Link href={url}>
            <div className="livroCat" title={dica}>
                <dl>
                    <dt className="font-sans">📖Título: </dt><dd>{titulo}</dd><br/>
                    <dt className="font-sans">✍️Autor: </dt><dd>{autor}</dd><br/>
                    <dt className="font-sans">🏷️Gênero: </dt><dd>{livro.genero}</dd><br/>
                    <dt className="font-sans">📅Ano: </dt><dd>{livro.ano}</dd><br/>
                </dl>
            </div>
        </Link>
    );
}