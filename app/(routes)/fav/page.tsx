import FavGames from "@/components/ui/fav-games";
import { getData } from "@/utils/fetchdata";
import { GameData } from "@/utils/types";

export default async function FavPage() {
    const results: GameData = await getData();
    const allGames = results.data.games;

    return (
        <section className='flex flex-col justify-center items-start gap-6'>
            <h1 className='text-white text-3xl'><span className='text-blue-400'>Category:</span> My Favorites</h1>
            <FavGames allGames={allGames} />
        </section >
    )
}