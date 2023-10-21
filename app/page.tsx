import SearchBar from "@/components/layout/searchbar";
import { getData } from "@/utils/fetchdata";
import { GameData } from "@/utils/types";
import TrendingGames from "@/components/layout/trending/trending-game";
import { Suspense } from "react";
import TrendingGamesLoading from "@/components/layout/trending/trending-loading";
import GameOfWeek from "@/components/layout/gameofweek/gameofweek";
import GameOfWeekLoading from "@/components/layout/gameofweek/gameofweek-loading";
import NewlyAdded from "@/components/layout/newlyadded/newlyadded";
import NewlyAddedLoading from "@/components/layout/newlyadded/newlyadded-loading";



export default async function Home() {
  return (
    <main className="space-y-8">

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
