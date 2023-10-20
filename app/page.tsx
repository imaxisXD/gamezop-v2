import SearchBar from "@/components/layout/navbar/navbar";
import { getData } from "@/utils/fetchdata";
import { GameData } from "@/utils/types";
import TrendingGames from "@/components/ui/trending/trending-game";
import { Suspense } from "react";
import TrendingGamesLoading from "@/components/ui/trending/trending-loading";
import GameOfWeek from "@/components/ui/gameofweek/gameofweek";
import RandomGame from "@/components/ui/randomgame";
import GameOfWeekLoading from "@/components/ui/gameofweek/gameofweek-loading";


export default async function Home() {
  const results: GameData = await getData();

  const adventureGames = results.data.games.filter(game => game.categories.includes('adventure'));
  const actionGames = results.data.games.filter(game => game.categories.includes('action'));
  const sportsRacingGames = results.data.games.filter(game => game.categories.includes('sportsRacing'));
  const arcadeGames = results.data.games.filter(game => game.categories.includes('arcade'));
  const puzzleLogicGames = results.data.games.filter(game => game.categories.includes('puzzleLogic'));
  const strategyGames = results.data.games.filter(game => game.categories.includes('strategy'));



  return (
    <main className="flex min-h-screen px-11 gap-10 flex-col items-center justify-center text-left w-[80%]">
      <SearchBar />

      <Suspense key={'ss'} fallback={<GameOfWeekLoading />}>
        <GameOfWeek />
      </Suspense>
      {/* <RandomGame /> */}

      <TrendingGames />

      {/* <CardLoading /> */}

      {/* <div>
        {adventureGames.map((game) => (
          <GameCard gameData={game} key={game.code} />
        ))}
      </div> */}
    </main>
  )
}
