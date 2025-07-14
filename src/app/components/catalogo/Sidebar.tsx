"use client";
import DropList from "@/app/components/DropList";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useRouter} from "next/navigation";

const schema = z.object({
    anoDe:z.string().optional(),
    anoAte:z.string().optional(),
    genero:z.string().optional(),
    busca:z.string().optional()
}).refine((data) => {
    if (data.anoDe != null && data.anoAte != null && data.anoDe != "" && data.anoAte !="") {
        return parseInt(data.anoDe,10) <= parseInt(data.anoAte,10);
    }
    return true;
},{
    path: ['anoAte'],
    message: "''Até'' deve ser maior ou igual a ''De''",
});

type FormData = z.infer<typeof schema>;

export default function Sidebar(){
    const {register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const filtrar = async (data: FormData) => {
        router.push(`/?genero=${data.genero}&anoDe=${data.anoDe}&anoAte=${data.anoAte}&busca=${data.busca}`);
    };

    const deletar = async () =>{
        await fetch('api/livro/debug',{
            method : 'DELETE',
            cache : 'no-store'
        })
        router.push("/");
    };
    const router = useRouter();
    return(
        <div style={{boxShadow:'5px 0 5px -5px rgba(0,0,0,0.3)'}} className="w-80 mr-5 border-r-1 border-r-gray-300 shadow-xl shadow-r items-center">
            <h1 style={{fontSize:'25px'}} className="text-center my-5">Filtros</h1>
            <form onSubmit={handleSubmit(filtrar)}>
                {/* utilizei a Droplist dentro da div pois não consigo usar classname na Droplist */}
                <div className="text-center">
                    <DropList {...register("genero")}title="Gênero do livro"></DropList>
                </div>
                <label className="items-center justify-center flex">Ano:
                    <div>
                        <input {...register("anoDe")} className="w-14" placeholder="De" type="number" onKeyDown={(e) => {if (e.key === 'e' || e.key === 'E' || e.key === '+' || e.key === '-'){e.preventDefault()}}}/>
                        <input {...register("anoAte")}className="w-14" placeholder="Até" type="number" onKeyDown={(e) => {if (e.key === 'e' || e.key === 'E' || e.key === '+' || e.key === '-'){e.preventDefault()}}}/>
                    </div> 
                </label>
                <div className="h-5 text-center">
                    {errors.anoAte && <p className="text-red-500 text-sm">{errors.anoAte.message}</p>}
                </div>
                <div className="flex flex-col justify-center items-center">
                    <input {...register("busca")} className="w-50" type="text" placeholder="Titulo/Autor"/>
                    <input type="submit" value="Aplicar filtros"/>
                </div>
                <div className="my-10 flex justify-center items-center">
                    {/* Botão de limpar banco */}
                    <input onClick={deletar} className="overflow-auto" value="Deletar todos os livros" type="button"/>
                </div>
            </form>
        </div>
    );
}