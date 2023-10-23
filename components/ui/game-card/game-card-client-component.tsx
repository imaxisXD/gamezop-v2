import Image from "next/image"
import Heart from "../heart"
import { Play } from "lucide-react"
import Link from "next/link"
export function GameCardClientSide(
    {
        gameCode,
        blurData,
        gameName
    }: {

        gameCode: string,
        blurData: string,
        gameName: string,
    }
) {
    return (
        <Link
            href={`https://www.gamezop.com/game/${gameCode}`}
            target="_blank"
            className="h-full w-full rounded-lg py-2 cursor-pointer border-b-2 truncate bg-opacity-70 hover:border-pink-500 flex flex-col items-center justify-center bg-[#0e0b12] backdrop-blur-sm  border-slate-300/20 hover:text-white transition duration-300">
            <div className="relative cursor-pointer h-full w-full rounded-md flex justify-center items-center">
                <div className="relative rounded-md h-full w-11/12 items-center flex justify-center">
                    <Image src={`https://static.gamezop.com/${gameCode}/square.png`}
                        fill
                        alt={gameName}
                        className="object-cover rounded-lg"
                        placeholder="blur"
                        blurDataURL={blurData}
                        sizes="(min-width: 480px ) 50vw,
                      (min-width: 728px) 33vw,
                      (min-width: 976px) 25vw,
                      100vw"
                    />
                </div>
                <div className="absolute flex flex-col top-0 h-full w-11/12 text-black rounded-md text-center justify-center items-center transition duration-150 bg-gray-700 bg-opacity-70
            hover:opacity-100 opacity-0
            ">
                    <Play fill={`rgb(22 163 74)`} strokeWidth={0.5} className="h-10 w-10" />
                    <p className="text-xs text-white font-bold">Click to play</p>
                    <Heart
                        gameCode={gameCode}
                        gameName={gameName}
                        blurdata={blurData}
                    />
                </div>
            </div>
            <h3 className="text-sm truncate py-1">{gameName}</h3>
        </Link>
    )
}

export default GameCardClientSide;