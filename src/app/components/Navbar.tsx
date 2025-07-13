import Link from "next/link";
import Logo from "@/app/components/Logo";
export default function Navbar(){

    return(
        <div className="h-25 border space-x-20 border-gray-300 flex items-center justify-center shadow-lg">
            {/* Logo do site */}
            <div className="w-[250px]">
                <Link href="/">
                    <Logo></Logo>
                </Link>
            </div>
            {/* Links */}
            <ul className="flex space-x-20 mx-2">
                <Link href="/">
                    <li className="navbar-text">Catálogo</li>
                </Link>
                <Link href="/cadastro">
                    <li className="navbar-text">Cadastro</li>
                </Link>
            </ul>
            {/* Barra de busca (incerto, dependendo das condições implemento) */}
        </div>
    );
}