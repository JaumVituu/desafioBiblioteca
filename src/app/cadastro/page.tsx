import Navbar from "@/app/components/Navbar";
import FormularioLivro from "@/app/cadastro/components/FormularioLivro";

export const metadata = {
    title: "Cadastrar novo livro | Biblioteca Agora",
    description: "Cadastrar novo livro"
}

export default function Cadastro(){
    return(
        <div className="h-screen w-screen">
            <Navbar></Navbar>
            <h1>Cadastro</h1>
            <FormularioLivro></FormularioLivro>
        </div>
    );
}