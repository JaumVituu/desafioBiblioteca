import {NextResponse,NextRequest} from "next/server";
import pool from "@/lib/db";

export async function GET(req: NextRequest, context:{ params: Promise<{ id: string }>}){
    try{
        const {id} = await context.params;
        const result = await pool.query("SELECT id, titulo, genero, autor, ano FROM livro_tb WHERE id = $1", [id]);
        if(result.rows.length == 0){
            return NextResponse.json({
                error: "Livro não encontrado",
                status: 404
            })
        }
        return NextResponse.json(result.rows[0]);
    }
    catch(error){
        console.error("Erro no GET/api/livros/[id]: " + error);
        return NextResponse.json({error : "Internal Server Error", status:500});
    }
}