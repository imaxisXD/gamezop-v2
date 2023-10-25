import { getData } from "@/utils/fetchdata";
import { GameData } from "@/utils/types";
import TrendingGames from "@/components/layout/trending/trending-game";
import { Suspense } from "react";
import TrendingGamesLoading from "@/components/layout/trending/trending-loading";
import GameOfWeek from "@/components/layout/gameofweek/gameofweek";
import GameOfWeekLoading from "@/components/layout/gameofweek/gameofweek-loading";
import NewlyAdded from "@/components/layout/newlyadded/newlyadded";
import NewlyAddedLoading from "@/components/layout/newlyadded/newlyadded-loading";
import RandomGame from "@/components/layout/randomgame";
import { Locale } from "@/i18n.config";
import { getLang } from "@/utils/getLang";



export default async function Home(
  { params }: { params: { lang: Locale } }
) {
  const results: GameData = await getData(params.lang);
  const Translations = await getLang(params.lang);
  const allGames = results.data.games;
  return (
    <main className="space-y-8">
      <Suspense fallback={<GameOfWeekLoading />}>
        <GameOfWeek lang={params.lang} />
      </Suspense>

      <Suspense fallback={<TrendingGamesLoading />}>
        <TrendingGames lang={params.lang} />
      </Suspense>

      <RandomGame games={allGames} translations={Translations} />

      <Suspense fallback={<NewlyAddedLoading />}>
        <NewlyAdded lang={params.lang} />
      </Suspense>
    </main>

  )
}
