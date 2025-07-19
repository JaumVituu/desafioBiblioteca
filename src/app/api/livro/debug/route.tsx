import pool from "@/lib/db";
import {NextResponse} from "next/server";
import Livro from "@/types/Livro";

export async function DELETE() {
	try {
		const result = await pool.query("DELETE FROM livro_tb;");
		return NextResponse.json(result);
	}
    catch (error) {
		console.error("Erro no DELETE /api/livro/debug", error);
		return NextResponse.json({error: "Internal Server Error" }, {status: 500});
	}
}

export async function POST(){
	try{
		var query = `INSERT INTO livro_tb(titulo,autor,ano,genero) VALUES 
		('O Código Da Vinci', 'Dan Brown', 2003, 'Ação'),
		('As Aventuras de Huckleberry Finn', 'Mark Twain', 1884, 'Aventura'),
		('A Casa Tomada', 'Julio Cortázar', 1946, 'Conto'),
		('A Menina que Roubava Livros', 'Markus Zusak', 2005, 'Drama'),
		('Neuromancer', 'William Gibson', 1984, 'Ficção Científica'),
		('O Hobbit', 'J.R.R. Tolkien', 1937, 'Fantasia'),
		('O Iluminado', 'Stephen King', 1977, 'Horror'),
		('Mitologia: Timeless Tales of Gods and Heroes', 'Edith Hamilton', 1942, 'Mitologia'),
		('Os Lusíadas', 'Luís Vaz de Camões', 1572, 'Poema'),
		('Orgulho e Preconceito', 'Jane Austen', 1813, 'Romance'),
		('Garota Exemplar', 'Gillian Flynn', 2012, 'Suspense'),
		('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 1943, null);`;
		const res = await pool.query(query);
		return NextResponse.json(res);
	}
	catch(error){
		console.error("Erro no POST /api/livro/debug: " + error);
		return NextResponse.json({error : "Internal Server Error"} , {status : 500});
	}
}	