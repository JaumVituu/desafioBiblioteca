import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Livro from "@/app/components/catalogo/Livro";

export default function HomePage() {
  return (
    <div className="w-screen h-screen">
      <Navbar></Navbar>
      <h1>Catálogo</h1>
      <Livro titulo="Teste" autor="teste" genero="teste" ano={1010}></Livro>
      <Livro titulo="Teste" autor="teste" genero="teste" ano={1010}></Livro>
      <Livro titulo="Teste" autor="teste" genero="teste" ano={1010}></Livro>
      <Livro titulo="Teste" autor="teste" genero="teste" ano={1010}></Livro>
      <Livro titulo="Teste" autor="teste" genero="teste" ano={1010}></Livro>
      <Livro titulo="Teste" autor="teste" genero="teste" ano={1010}></Livro>
      <Livro titulo="Teste" autor="teste" genero="teste" ano={1010}></Livro>
      <Livro titulo="Teste" autor="teste" genero="teste" ano={1010}></Livro>
      <Livro titulo="Teste" autor="teste" genero="teste" ano={1010}></Livro>
      <Livro titulo="Teste" autor="teste" genero="teste" ano={1010}></Livro>
      <Livro titulo="Teste" autor="teste" genero="teste" ano={1010}></Livro>
      <Livro titulo="Teste" autor="teste" genero="teste" ano={1010}></Livro>
      <Livro titulo="Teste" autor="teste" genero="teste" ano={1010}></Livro>
      <Livro titulo="Teste" autor="teste" genero="teste" ano={1010}></Livro>
      <Livro titulo="Teste" autor="teste" genero="teste" ano={1010}></Livro>
      <Livro titulo="Teste" autor="teste" genero="teste" ano={1010}></Livro>

    </div>
  );
}
