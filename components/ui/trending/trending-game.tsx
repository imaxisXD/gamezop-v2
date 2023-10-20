import { getData } from "@/utils/fetchdata";
import { GameData } from "@/utils/types";
import GameCard from "../game-card/game-card";
import CardLoading from "../game-card/card-loading";
import { Suspense } from "react";
import TrendingGamesLoading from "./trending-loading";

export default async function TrendingGames() {
    const results: GameData = await getData();
    const allGames = results.data.games;
    const trendingGameCodes = results.data.trendingGames;
    const trendingGames = trendingGameCodes.map(code => {
        return allGames.find(game => game.code === code);
    });
    return (
        <Suspense fallback={<TrendingGamesLoading />}>
            <div className="max-w-5xl grid gap-4 xs:grid-cols-2 xs:p-8 md:grid-cols-4 lg:gap-6">
                <h1 className="text-4xl font-extrabold tracking-wider text-pink-500 xs:col-span-2 xs:grid xs:gap-4 xs:grid-cols-2 md:col-span-3 md:text-5xl md:grid-cols-3 lg:text-7xl">
                    <span className="md:col-span-2">Trending Games</span>
                </h1>
                <p className="xs:row-start-2 text-blue-500 xs:col-start-2 xs:self-center md:col-start-1 md:col-span-2 md:pr-12 md:text-lg hidden md:block">
                    Try out the trending games, that are being loved by many.
                </p>
                <div className="h-20 rounded-md xs:h-auto xs:square flex md:-skew-x-6">
                    <Suspense fallback={<CardLoading />} >
                        <GameCard gameData={trendingGames[0]} />
                    </Suspense>
                </div>
                <div className="h-16 rounded-md xs:h-auto xs:square flex md:-skew-x-6">
                    <Suspense fallback={<CardLoading />} >
                        <GameCard gameData={trendingGames[1]} />
                    </Suspense>
                </div>
                <div className="h-16 rounded-md xs:h-auto xs:square flex md:-skew-x-6">
                    <Suspense fallback={<CardLoading />} >
                        <GameCard gameData={trendingGames[2]} />
                    </Suspense>
                </div>
                <div className="h-16 rounded-md xs:h-auto xs:square md:col-start-2 flex md:-skew-x-6">
                    <Suspense fallback={<CardLoading />} >
                        <GameCard gameData={trendingGames[3]} />
                    </Suspense>
                </div>
                <div className="h-16 rounded-md xs:h-auto xs:square flex md:-skew-x-6">
                    <Suspense fallback={<CardLoading />} >
                        <GameCard gameData={trendingGames[4]} />
                    </Suspense>
                </div>
                <div className="h-16 rounded-md xs:h-auto xs:square flex md:-skew-x-6">
                    <Suspense fallback={<CardLoading />} >
                        <GameCard gameData={trendingGames[5]} />
                    </Suspense>
                </div>
            </div>
        </Suspense >
    )
}