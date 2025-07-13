import BotaoVoltar from "@/app/components/BotaoVoltar";
import Livro from "@/types/Livro";

export default async function Detalhes({livro} : {livro : Livro}){
    return(
        <div className="text-center mx-auto my-20 w-200 h-fit p-10 border-gray-300 border-1 shadow-xl rounded-4xl">
            <BotaoVoltar url="/"></BotaoVoltar>
            <dl className="my-25">
                <dt className="detalhe">Título:</dt><dd className="detalhe">{livro.titulo}</dd><br/>
                <dt className="detalhe">Autor:</dt><dd className="detalhe">{livro.autor}</dd><br/>
                <dt className="detalhe">Ano:</dt><dd className="detalhe">{livro.ano}</dd><br/>
                <dt className="detalhe">Gênero:</dt><dd className="detalhe">{livro.genero}</dd><br/>
            </dl>
        </div>
    );
}