import Navbar from "@/app/components/Navbar";
import Catalogo from "@/app/components/catalogo/Catalogo";

export default function HomePage({searchParams,}:{searchParams: { [key: string]: string | string[] | undefined };}){
  return (
    <div className="w-screen h-screen">
      <Navbar></Navbar>
      <h1>Catálogo</h1>
      <Catalogo searchParams={searchParams}></Catalogo>
    </div>
  );
}
