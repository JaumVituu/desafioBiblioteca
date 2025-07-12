'use client';

interface ParamLivros {
    titulo: string;
    autor: string;
    genero: string;
    ano: number;
}

function verDetalhes(){
    alert("Teste");
}

export default function Livro({titulo,autor,genero,ano} : ParamLivros){
    return(
        <div className="livroCat relative" onClick={verDetalhes}>
            <dl>
                <dt className="font-sans">📖Título: </dt><dd>{titulo}</dd><br/>
                <dt className="font-sans">✍️Autor: </dt><dd>{autor}</dd><br/>
                <dt className="font-sans">🏷️Gênero: </dt><dd>{genero}</dd><br/>
                <dt className="font-sans">📅Ano: </dt><dd>{ano}</dd><br/>
            </dl>
        </div>
    );
}