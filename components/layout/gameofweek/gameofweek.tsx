import { getData } from "@/utils/fetchdata";
import getBase64 from "@/utils/get-blur-data-url";
import { GameData } from "@/utils/types";
import { Crown, MoveRight } from "lucide-react";
import Image from "next/image";


export default async function GameOfWeek() {
    const results: GameData = await getData();
    const allGames = results.data.games;
    const gameOfTheWeekCode = results.data.gameOfTheWeek;
    const gameOfTheWeekDataArray = allGames.filter(game => game.code === gameOfTheWeekCode);
    const gameOfTheWeekDataObj = gameOfTheWeekDataArray[0];
    const imageUrl = `https://static.gamezop.com/${gameOfTheWeekDataObj?.code}/wall.png`
    const myBlurDataUrl = await getBase64(imageUrl);
    return (
        <section id="game-of-week" className="h-96 w-full relative rounded-lg group border border-navbar">
            <div className="relative h-full w-full p-2 flex flex-row items-center justify-center rounded-lg">
                <Image
                    src={imageUrl}
                    fill
                    alt={`${gameOfTheWeekDataObj?.name}`}
                    className="object-cover rounded-lg"
                    placeholder="blur"
                    sizes="(min-width: 480px ) 50vw,
                      (min-width: 728px) 33vw,
                      (min-width: 976px) 25vw,
                      100vw"
                    blurDataURL={myBlurDataUrl}
                />
            </div>
            <div className="h-1/4 w-full rounded-lg z-20 absolute bottom-0 flex flex-row items-center justify-around p-2 backdrop-blur-md bg-black/40">
                <div className="rounded-lg flex flex-col items-start w-1/2 p-2">
                    <h2 className=" text-purple-500 md:text-xl flex justify-center gap-2 text-base">
                        <Crown className="text-purple-200" fill="#9333ea" />
                        Game of the Week
                    </h2>
                    <h1 className="text-white font-extrabold tracking-wider md:text-3xl">{gameOfTheWeekDataObj.name}</h1>
                </div>
                <div className="w-1/2 flex justify-end gap-2">
                    <a
                        href={`https://www.gamezop.com/game/${gameOfTheWeekDataObj?.code}`}
                        target="_blank"
                        className="relative group transition duration-150 hover:bg-opacity-70 hover:border-green-600 
                border-green-400 border cursor-pointer w-32 flex items-center justify-center gap-1 bg-navbar px-5 py-1 rounded-md"
                    >
                        <span className="text-fontcolor group-hover:text-white transition duration-150 font-light xs:text-xs md:text-base">Play</span>
                        <MoveRight stroke="rgb(74 222 128)" strokeWidth={1} className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </section>
    )
}

