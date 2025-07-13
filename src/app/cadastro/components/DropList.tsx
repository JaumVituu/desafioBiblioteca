"use client";
import {useState} from "react";
import {generos} from "@/constants/Generos";

interface DropListParams {
    title : string;
}

export default function DropList({title, ...registerParams} : DropListParams){
    const [defaultLigado,setDefault] = useState(true);
    //se o default nao estiver enabled, a variavel continua vazia
    //senao, ela escreve 'disabled', substituindo o valor na declaracao do codigo
    return(
        <select {...registerParams} title={title} onChange={() => setDefault(false)
                                                // console.log(e.target.value);
                                                // ^ Teste para mudanca de valores.
        }>
            <option value="N/A" className="text-gray-400" disabled={!defaultLigado} >Gênero do livro</option>
            {generos.map((gen) => (
                <option key={gen} value={gen}>{gen}</option> 
            ))}
        </select>
    );
}