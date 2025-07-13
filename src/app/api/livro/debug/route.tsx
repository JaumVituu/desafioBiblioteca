import pool from "@/lib/db";
import {NextResponse} from "next/server";

export async function DELETE() {
	try {
		const result = await pool.query("DELETE FROM livro_tb");
		return NextResponse.json(result);
	}
    catch (error) {
		console.error("Erro no DELETE /api/livro/debug", error);
		return NextResponse.json({error: "Internal Server Error" }, {status: 500});
	}
}