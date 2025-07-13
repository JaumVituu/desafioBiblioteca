import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
/*Feito por IA*/
export async function GET(req: NextRequest) {
	const {searchParams} = new URL(req.url);
	const genero = searchParams.get("genero");
	const ano = searchParams.get("ano");
	let query = "SELECT id, titulo, autor, ano, genero FROM livro_tb";
	const conditions = [];
	const values = [];
	//Filtros de busca
	if(genero){
		conditions.push(`genero = $${values.length + 1}`);
		values.push(genero);
	}
	if(ano){
		conditions.push(`ano = $${values.length + 1}`);
		values.push(ano);
	}
	if (conditions.length) {
      	query += " WHERE " + conditions.join(" AND ");
    }

	try {
		console.log(query);
		const result = await pool.query(query,values);
		return NextResponse.json(result.rows);
	}catch (error) {
		console.error("Erro no GET /api/livro:", error);
		return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
	}
}
/*Feito por IA*/
export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const {titulo,autor,ano,genero} = body;

		const result = await pool.query(
		"INSERT INTO livro_tb (titulo, autor, ano, genero) VALUES ($1, $2, $3, $4) RETURNING *",
		[titulo,autor,ano,genero]
		);

		return NextResponse.json(result.rows[0]);
	} catch (error) {
		console.error("Erro no POST /api/livro:", error);
		return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
	}
}
