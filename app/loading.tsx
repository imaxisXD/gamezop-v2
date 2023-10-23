import GameOfWeekLoading from "@/components/layout/gameofweek/gameofweek-loading";
import NewlyAddedLoading from "@/components/layout/newlyadded/newlyadded-loading";
import TrendingGamesLoading from "@/components/layout/trending/trending-loading";

export default function Loading() {

    return (
        <section className="space-y-8">
            <GameOfWeekLoading />
            <TrendingGamesLoading />
            <NewlyAddedLoading />
        </section>
    )
}