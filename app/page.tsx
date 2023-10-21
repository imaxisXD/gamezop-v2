import SearchBar from "@/components/layout/searchbar";
import { getData } from "@/utils/fetchdata";
import { GameData } from "@/utils/types";
import TrendingGames from "@/components/layout/trending/trending-game";
import { Suspense } from "react";
import TrendingGamesLoading from "@/components/layout/trending/trending-loading";
import GameOfWeek from "@/components/layout/gameofweek/gameofweek";
import RandomGame from "@/components/ui/randomgame";
import GameOfWeekLoading from "@/components/layout/gameofweek/gameofweek-loading";
import NewlyAdded from "@/components/layout/newlyadded/newlyadded";
import NewlyAddedLoading from "@/components/layout/newlyadded/newlyadded-loading";



export default async function Home() {
  return (
    <main className="flex min-h-screen z-20 px-11 gap-10 flex-col items-center justify-center text-left w-[80%]"
    >
      <SearchBar />

      <Suspense fallback={<GameOfWeekLoading />}>
        <GameOfWeek />
      </Suspense>

      <Suspense fallback={<TrendingGamesLoading />}>
        <TrendingGames />
      </Suspense>

      <Suspense fallback={<NewlyAddedLoading />}>
        <NewlyAdded />
      </Suspense>


    </main>
  )
}
