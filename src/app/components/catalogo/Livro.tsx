'use client';

interface ParamLivros {
    titulo: string;
    autor: string;
    genero: string;
    ano: number;
}


function verDetalhes(){
    //Carregar URL dos delalhes do livro
    alert("Teste");
}

export default function Livro({titulo,autor,genero,ano} : ParamLivros){
    var dica = `Ver detalhes de ${titulo}`  //Mensagem que aparece no hover
    return(
        <div className="livroCat relative" onClick={verDetalhes} title={dica}>
            <dl>
                <dt className="font-sans">📖Título: </dt><dd>{titulo}</dd><br/>
                <dt className="font-sans">✍️Autor: </dt><dd>{autor}</dd><br/>
                <dt className="font-sans">🏷️Gênero: </dt><dd>{genero}</dd><br/>
                <dt className="font-sans">📅Ano: </dt><dd>{ano}</dd><br/>
            </dl>
        </div>
    );
}