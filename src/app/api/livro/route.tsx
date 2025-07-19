import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
/*Feito parcialmente por IA*/
export async function GET(req: NextRequest) {
	const {searchParams} = new URL(req.url);
	console.log(req.url);
	const genero = searchParams.get("genero");
	const busca = searchParams.get("busca");
	const anoDeRaw = searchParams.get("anoDe");
	const anoAteRaw = searchParams.get("anoAte");
	const anoDe = (anoDeRaw)? parseInt(anoDeRaw,10) : null;
	const anoAte = (anoAteRaw)? parseInt(anoAteRaw,10) : null;
	let query = "SELECT id, titulo, autor, ano, genero FROM livro_tb";
	const conditions = [];
	const values = [];
	//Filtros de busca
	if(genero){
		if(genero == "indefinido"){
			conditions.push('genero IS NULL');
		}
		else{
			conditions.push(`genero = $${values.length + 1}`);
			values.push(genero);
		}
	}
	if(anoDe){
		conditions.push(`ano >= $${values.length + 1}`);
		values.push(anoDe);
	}
	if(anoAte){
		conditions.push(`ano <= $${values.length + 1}`);
		values.push(anoAte);
	}

	// ILIKE = LIKE case insensitive
	if(busca){
		conditions.push(`(titulo ILIKE $${values.length+1} OR autor ILIKE $${values.length+2})`);
		values.push(`%${busca}%`);
		values.push(`%${busca}%`);
	}

	if (conditions.length) {
      	query += " WHERE " + conditions.join(" AND ");
    }

	try {
		console.log(query);
		console.log(genero)
		console.log("busca:" + busca);
		const result = await pool.query(query,values);
		return NextResponse.json(result.rows);
	}catch (error) {
		console.error("Erro no GET /api/livro:", error);
		return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
	}
}

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const {titulo,autor,ano,genero} = body;
		if(genero){
			const result = await pool.query(
			"INSERT INTO livro_tb (titulo, autor, ano, genero) VALUES ($1, $2, $3, $4) RETURNING *",
			[titulo,autor,ano,genero]
			);
			return NextResponse.json(result.rows[0]);
		}
		const result = await pool.query(
		"INSERT INTO livro_tb (titulo, autor, ano) VALUES ($1, $2, $3) RETURNING *",
		[titulo,autor,ano]
		);
		return NextResponse.json(result.rows[0]);
		
	} catch (error) {
		console.error("Erro no POST /api/livro:", error);
		return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
	}
}
