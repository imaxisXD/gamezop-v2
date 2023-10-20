import Image from "next/image"
import getBase64 from "@/utils/get-blur-data-url"
import Heart from "../heart"
import { Game } from "@/utils/types"
import { Play } from "lucide-react"
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
        <div className="h-full w-full rounded-md py-2 cursor-pointer border-b-2 border-transparent truncate shadow-md hover:border-amber-300 flex flex-col items-center justify-center bg-[#212026] shadow-orange-600 hover:text-white transition duration-300">
            <div className="relative cursor-pointer h-full w-full rounded-md flex justify-center items-center">
                <div className="relative rounded-md h-full w-11/12 items-center flex justify-center">
                    <Image src={`https://static.gamezop.com/${gameData?.code || gameCode}/square.png`}
                        fill
                        alt={`${gameData?.name}`}
                        className="object-cover rounded-md"
                        style={{
                            transform: 'translate3d(0, 0, 0)',
                            width: '100%',
                            height: '100%',
                        }}
                        placeholder="blur"
                        sizes="100vw"
                        blurDataURL={myBlurDataUrl}
                    />
                </div>
                <div className="absolute flex flex-col top-0 h-full w-full text-black rounded-md text-center justify-center items-center transition duration-150 bg-gray-700 bg-opacity-70
            hover:opacity-100 opacity-0
            ">
                    <Play fill={`rgb(22 163 74)`} strokeWidth={0.5} className="h-10 w-10" />
                    <p className="text-xs text-white font-bold">Click to play</p>
                    <Heart gameCode={gameData?.code || gameCode} gameName={gameData?.name} />
                </div>
            </div>
            <h3 className="text-sm truncate py-1">{gameData?.name}</h3>
        </div>
    )
}

export default GameCard