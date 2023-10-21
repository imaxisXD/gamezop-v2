import CardLoading from "@/components/ui/game-card/card-loading";
import GameCard from "@/components/ui/game-card/game-card";
import { getData } from "@/utils/fetchdata";
import { GameData } from "@/utils/types";
import { Suspense } from "react";

export default async function NewlyAdded() {
    const results: GameData = await getData();
    const newlyAddedGamesCodes = results.data.newlyAddedGames;
    const allGames = results.data.games;
    const newlyAddedGamesArray = newlyAddedGamesCodes.map(code => {
        return allGames.find(game => game.code === code);
    });

    return (
        <section id="newly-added" className="w-full backdrop-blur-lg h-1/3 flex flex-col justify-center items-center text-left rounded-md bg-opacity-40 bg-newly-gradient py-5">
            <h1 className="text-4xl w-full md:text-5xl lg:text-7xl px-10 py-5 font-extrabold tracking-wider text-yellow-400 text-left">
                Newly added <br />Games
            </h1>
            <div className="w-11/12 grid auto-rows-[192px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

                <div
                    key={newlyAddedGamesArray[0]?.code}
                    className={`row-span-1 rounded-xl 
                            }`}
                >
                    <Suspense fallback={<CardLoading />} >
                        <GameCard gameData={newlyAddedGamesArray[0]} />
                    </Suspense>
                </div>
                <div
                    key={newlyAddedGamesArray[1]?.code}
                    className={`row-span-1 rounded-xl 
                            }`}
                >
                    <Suspense fallback={<CardLoading />} >
                        <GameCard gameData={newlyAddedGamesArray[1]} />
                    </Suspense>
                </div>
                <div
                    key={newlyAddedGamesArray[2]?.code}
                    className={`row-span-1 rounded-xl 
                            }`}
                >
                    <Suspense fallback={<CardLoading />} >
                        <GameCard gameData={newlyAddedGamesArray[2]} />
                    </Suspense>
                </div>
                <div
                    key={newlyAddedGamesArray[3]?.code}
                    className={`row-span-1 rounded-xl md:col-span-2
                            }`}
                >
                    <Suspense fallback={<CardLoading />} >
                        <GameCard gameData={newlyAddedGamesArray[3]} />
                    </Suspense>
                </div>


                <div className="row-span-1 rounded-xl border"></div>
            </div>
        </section>
    )
}

