import Image from "next/image"
import getBase64 from "@/utils/get-blur-data-url"
import Heart from "../heart"
import { Game } from "@/utils/types"
import { Play } from "lucide-react"
import Link from "next/link"
export async function GameCard(
    {
        gameData,
        gameCode

    }: {
        gameData?: Game,
        gameCode?: string
    }
) {
    // await new Promise(resolve => setTimeout(resolve, 20000));
    const myBlurDataUrl = await getBase64(`https://static.gamezop.com/${gameData?.code}/square.png`);

    return (
        <Link
            href={`https://www.gamezop.com/game/${gameData?.code}`}
            target="_blank"
            className="h-full w-full rounded-lg py-2 cursor-pointer border-b-2 truncate bg-opacity-70 hover:border-pink-500 flex flex-col items-center justify-center bg-[#0e0b12] backdrop-blur-sm  border-slate-300/20 hover:text-white transition duration-300">
            <div className="relative cursor-pointer h-full w-full rounded-md flex justify-center items-center">
                <div className="relative rounded-md h-full w-11/12 items-center flex justify-center">
                    <Image src={`https://static.gamezop.com/${gameData?.code || gameCode}/square.png`}
                        fill
                        alt={`${gameData?.name}`}
                        className="object-cover rounded-lg"
                        placeholder="blur"
                        blurDataURL={myBlurDataUrl}
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
                    <Heart gameCode={gameData?.code || gameCode} gameName={gameData?.name} />
                </div>
            </div>
            <h3 className="text-sm truncate py-1">{gameData?.name}</h3>
        </Link>
    )
}

export default GameCard