import GameCard from "@/components/ui/game-card/game-card";
import { getData } from "@/utils/fetchdata";
import { GameData } from "@/utils/types";

export default async function NewlyAdded() {
    const results: GameData = await getData();
    const newlyAddedGamesCodes = results.data.newlyAddedGames;
    const allGames = results.data.games;
    const newlyAddedGamesArray = newlyAddedGamesCodes.map(code => {
        return allGames.find(game => game.code === code);
    });

    return (
        <section id="newly-added" className="w-full backdrop-blur-lg flex flex-col justify-center items-center text-left rounded-md bg-opacity-40 h-fit bg-newly-gradient drop-shadow-md py-5">
            <h1 className="text-3xl h-fit w-full text-left px-10 py-5 font-extrabold tracking-wider text-yellow-400 xs:col-span-2  md:col-span-3 md:text-5xl md:grid-cols-3 lg:text-7xl">
                Newly added <br />Games
            </h1>
            <div className="w-11/12 grid auto-rows-[192px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {newlyAddedGamesArray.map((game, index) => (
                    <div
                        key={index}
                        className={`row-span-1 rounded-xl md:${index === 3 || index === 9 ? "col-span-2" : ""
                            }`}
                    >
                        <GameCard gameData={game} />
                    </div>
                ))}
            </div>
        </section>
    )
}

