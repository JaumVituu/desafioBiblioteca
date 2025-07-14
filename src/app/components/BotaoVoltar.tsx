import Link from "next/link";

export default function BotaoVoltar({url} : {url:string}){
    return(
        <div className="mx-5 my-5 h-15 w-15">
            <Link href={url} className="h-full w-full">
                <div className="h-full w-full border-1 border-gray-300 rounded-full shadow-lg justify-center items-center flex text-4xl text-gray-500">
                    <b>&lt;</b>
                </div>
            </Link>
        </div>
    );
}