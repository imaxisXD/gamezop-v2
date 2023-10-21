import { getData } from "@/utils/fetchdata";
import { GameData } from "@/utils/types";
import GameCard from "../../ui/game-card/game-card";
import CardLoading from "../../ui/game-card/card-loading";
import { Suspense } from "react";


export default async function TrendingGames() {
    const results: GameData = await getData();
    const allGames = results.data.games;
    const trendingGameCodes = results.data.trendingGames;
    const trendingGames = trendingGameCodes.map(code => {
        return allGames.find(game => game.code === code);
    });
    return (
        <section id="trending" className="bg-page-gradient h-screen w-full rounded-md bg-opacity-40 drop-shadow-md backdrop-blur-lg">
            <div className="w-full grid gap-4 h-full bg-opacity-40 bg-slate-500/5  xs:grid-cols-2 xs:p-8 md:grid-cols-4 lg:gap-6 rounded-xl">
                <h1 className="text-4xl [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-blue-500 font-extrabold tracking-wider text-pink-500 xs:col-span-2 xs:grid xs:gap-4 xs:grid-cols-2 md:col-span-3 md:text-5xl md:grid-cols-3 lg:text-7xl">
                    <span className="md:col-span-2">Trending Games</span>
                </h1>
                <p className="xs:row-start-2 text-white xs:col-start-2 xs:self-center md:col-start-1 md:col-span-2 md:pr-12 md:text-lg hidden md:block">
                    Try out the trending games, that are being loved by many.
                </p>
                <div className="h-20 rounded-md xs:h-auto xs:square flex ">
                    <Suspense fallback={<CardLoading />} >
                        <GameCard gameData={trendingGames[1]} />
                    </Suspense>
                </div>
                <div className="h-16 rounded-md xs:h-auto xs:square flex ">
                    <Suspense fallback={<CardLoading />} >
                        <GameCard gameData={trendingGames[0]} />
                    </Suspense>
                </div>
                <div className="h-16 rounded-md xs:h-auto xs:square flex ">
                    <Suspense fallback={<CardLoading />} >
                        <GameCard gameData={trendingGames[2]} />
                    </Suspense>
                </div>
                <div className="h-16 rounded-md xs:h-auto xs:square md:col-start-2 flex ">
                    <Suspense fallback={<CardLoading />} >
                        <GameCard gameData={trendingGames[3]} />
                    </Suspense>
                </div>
                <div className="h-16 rounded-md xs:h-auto xs:square flex ">
                    <Suspense fallback={<CardLoading />} >
                        <GameCard gameData={trendingGames[4]} />
                    </Suspense>
                </div>
                <div className="h-16 rounded-md xs:h-auto xs:square flex ">
                    <Suspense fallback={<CardLoading />} >
                        <GameCard gameData={trendingGames[5]} />
                    </Suspense>
                </div>
            </div>
        </section>
    )
}