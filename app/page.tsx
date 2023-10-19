import SearchBar from "@/components/layout/navbar/navbar";
import GameCard from "@/components/ui/game-card";
import { getData } from "@/utils/fetchdata";
import { GameData } from "@/utils/types";


export default async function Home() {
  const results: GameData = await getData();

  const adventureGames = results.data.games.filter(game => game.categories.includes('adventure'));
  const actionGames = results.data.games.filter(game => game.categories.includes('action'));
  const sportsRacingGames = results.data.games.filter(game => game.categories.includes('sportsRacing'));
  const arcadeGames = results.data.games.filter(game => game.categories.includes('arcade'));
  const puzzleLogicGames = results.data.games.filter(game => game.categories.includes('puzzleLogic'));
  const strategyGames = results.data.games.filter(game => game.categories.includes('strategy'));


  return (
    <main className="flex min-h-screen px-11 flex-col items-center justify-between w-[80%]">
      <SearchBar />

      <div>
        {adventureGames.map((game) => (
          <GameCard gameData={game} key={game.code} />
        ))}
      </div>
    </main>
  )
}
