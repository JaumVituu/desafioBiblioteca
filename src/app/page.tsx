import Navbar from "@/app/components/Navbar";
import Catalogo from "@/app/components/catalogo/Catalogo";
import Sidebar from "@/app/components/catalogo/Sidebar";

export default async function HomePage({searchParams,}:{searchParams: Promise<{ [key: string]: string | string[] | undefined }>;}){
  const params = await searchParams;
  return (
    <div className="w-screen h-screen">
      <Navbar></Navbar>
      <h1>Catálogo</h1>
      <div className="flex flex-1">
        <Sidebar></Sidebar>
        <Catalogo searchParams={params}></Catalogo>
      </div>
    </div>
  );
}
