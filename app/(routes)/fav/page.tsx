import FavGames from "@/components/ui/fav-games";


export default function FavPage() {
    return (
        <section className='flex flex-col justify-center items-start gap-6'>
            <h1 className='text-white text-3xl'><span className='text-blue-400'>Category:</span> My Favorites</h1>
            <FavGames />
        </section >
    )
}