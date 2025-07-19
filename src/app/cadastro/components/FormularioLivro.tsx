"use client";
import DropList from "@/app/components/DropList";
import { useForm } from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useRouter} from "next/navigation";
import { useState } from "react";

const schema = z.object({
  titulo: z.string().min(1, "Titulo é obrigatório"),
  autor: z.string().min(1, "Autor é obrigatório"),
  ano:  z.string().min(1, "Ano é obrigatório"),
  genero: z.string().optional()
});

type FormData = z.infer<typeof schema>;

export default function FormularioLivro(){
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [valor, setValor] = useState("");
    const router = useRouter();

    //handleChange gerado por IA
    const handleChange =(e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        const apenasNumeros = input.replace(/\D/g, "");
        if (apenasNumeros.length <= 4)setValor(apenasNumeros)
    }

    const cadastrarLivro = async (data: FormData) => {
        if (isSubmitting) return;
        if (data.genero == "") data.genero = undefined; 
        setIsSubmitting(true);
        const res = await fetch('api/livro',{
            method : 'POST',
            headers : {'Content-type':'application/json'},
            body: JSON.stringify(data),
            cache: 'force-cache'
        })
        if (!res.ok){
            alert("Não foi possível cadastrar o livro");
        }
        router.push("/");
    };

    return(
        <div className="mx-auto w-150 p-10 rounded-4xl h-1/2 shadow-xl border-gray-300 border-1">
            <form onSubmit={handleSubmit(cadastrarLivro)}className="text-center justify-between ">
                <div className="h-20">
                    <input {...register("titulo")} type="text" title="Título" placeholder="Titulo do livro"/>
                    {errors.titulo && <p className="text-red-500 text-sm">{errors.titulo.message}</p>}
                </div>
                <div className="h-20">
                    <input {...register("ano")} value={valor} type="text" inputMode="numeric" title="Ano" placeholder="Ano" onChange={handleChange}/>
                    {/* código em onKeyDown impede que digitos além de numeros sejam inseridos*/}

                    {errors.ano && <p className="text-red-500 text-sm">{errors.ano.message}</p>}
                </div>
                <div className="h-20">
                   <input {...register("autor")} type="text" title="Autor" placeholder="Autor"/>
                    {errors.autor && <p className="text-red-500 text-sm">{errors.autor.message}</p>}
                </div>
                <DropList {...register("genero")} title="Gênero"></DropList>
                <input type="submit" disabled={isSubmitting} className="inline-block bottom-0"/>
            </form>
        </div>
    );
}