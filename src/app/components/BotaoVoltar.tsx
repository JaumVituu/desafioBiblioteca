import Link from "next/link";

export default function BotaoVoltar({url} : {url:string}){
    return(
        <Link href={url}>
            <div className="mx-5 my-5 border-1 border-gray-300 h-15 w-15 rounded-full shadow-lg justify-center items-center flex text-4xl text-gray-500">
                <b>&lt;</b>
            </div>
        </Link>
    );
}