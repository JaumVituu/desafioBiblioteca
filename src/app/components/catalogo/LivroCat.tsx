'use client';
import Livro from "@/types/Livro";
import Link from "next/link";

export default function LivroCat({livro} : {livro : Livro}){
    const dica = `Ver detalhes de ${livro.titulo}`  //Mensagem que aparece no hover
    const url = `/livros/${livro.id}`;
    const limiteTitulo = 38;
    const limiteAutor = 18;
    const titulo = (livro.titulo.length > limiteTitulo)?livro.titulo.slice(0,limiteTitulo) + "...":livro.titulo;
    const autor = (livro.autor.length > limiteAutor)?livro.autor.slice(0,limiteAutor) + "...":livro.autor;
    return(
        <Link href={url}>
            <div className="livroCat relative" title={dica}>
                <dl className="items-center justify-center">
                    <dt className="font-sans">📖Título: </dt><dd>{titulo}</dd><br/>
                    <dt className="font-sans">✍️Autor: </dt><dd>{autor}</dd><br/>
                    <dt className="font-sans">🏷️Gênero: </dt><dd>{livro.genero}</dd><br/>
                    <dt className="font-sans">📅Ano: </dt><dd>{livro.ano}</dd><br/>
                </dl>
                <label className="verDetalhes">🔎 Ver Detalhes</label>
            </div>
        </Link>
    );
}