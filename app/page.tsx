import SearchBar from "@/components/layout/navbar/navbar";
import GameCard from "@/components/ui/game-card";


export default function Home() {

  return (
    <main className="flex min-h-screen px-11 flex-col items-center justify-between w-[80%]">
      <SearchBar />

      <div>
        <GameCard />
      </div>
    </main>
  )
}
