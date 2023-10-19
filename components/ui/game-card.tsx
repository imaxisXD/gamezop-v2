import Image from "next/image"
import getBase64 from "@/utils/get-blur-data-url"
import Heart from "./heart"
import { Game } from "@/utils/types"
export async function GameCard(
    {
        gameData
    }: {
        gameData?: Game
    }
) {

    const myBlurDataUrl = await getBase64(`https://static.gamezop.com/${gameData?.code}/square.png`)

    return (
        <div className="h-64 w-52 rounded-md py-2 cursor-pointer border-b-2 border-transparent hover:border-amber-300 flex flex-col items-center justify-center bg-[#212026] shadow-green-600 hover:text-white transition duration-150">
            <div className="relative cursor-pointer h-60 w-48 rounded-md">
                <div className="relative rounded-md h-full w-full">
                    <Image src={`https://static.gamezop.com/${gameData?.code}/square.png`}
                        fill
                        alt="ss"
                        className="object-cover rounded-md"
                        style={{ transform: 'translate3d(0, 0, 0)' }}
                        placeholder="blur"
                        blurDataURL={myBlurDataUrl}
                    />

                </div>
                <div className="absolute flex flex-col top-0 h-full w-full rounded-md text-center justify-center text-black font-medium items-center transition duration-150 bg-gray-700 bg-opacity-50
            hover:opacity-100 opacity-0
            ">
                </div>
                <Heart gameCode={gameData?.code} gameName={gameData?.name} />
            </div>
            <h3>{gameData?.name}</h3>
        </div>
    )
}

export default GameCard