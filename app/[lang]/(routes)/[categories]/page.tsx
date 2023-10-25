import CardLoading from '@/components/ui/game-card/card-loading';
import GameCard from '@/components/ui/game-card/game-card';
import { Locale } from '@/i18n.config';
import { getData } from '@/utils/fetchdata'
import { getLang } from '@/utils/getLang';
import { Game, GameData } from '@/utils/types';
import { notFound } from 'next/navigation'
import { Suspense } from 'react';

type Categories = {
    [key: string]: string;
};

export default async function CategoryPage({ params }: { params: { categories: string, lang: Locale } }) {
    let gameBasedOnCategory: Game[] = [];
    let categoryName = "";
    const results: GameData = await getData(params.lang);
    const Translations = await getLang(params.lang);
    const allGames = results.data.games;
    if (params.categories === 'new-games') {
        const newlyAddedGamesCodes = results.data.newlyAddedGames;
        gameBasedOnCategory = newlyAddedGamesCodes.map(code => {
            return allGames.find(game => game.code === code) as Game;
        });
    } else {
        const categories: Categories = results.data.categories;
        categoryName = categories[params.categories];
        if (!categoryName) {
            notFound();
        } else {
            gameBasedOnCategory = allGames.filter((game) => {
                return game.categories[0].toLowerCase().includes(params.categories.toLowerCase());
            });
        }
    }
    return (
        <section className='flex flex-col justify-center items-start gap-6'>
            <h1 className='text-white text-3xl'><span className='text-blue-400'>{Translations.categories}:</span> {categoryName || 'Newly Added'}</h1>
            <div className="w-full grid auto-rows-[192px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {gameBasedOnCategory && gameBasedOnCategory.map((game, i) => (
                    <div
                        key={game.code}
                        className={`row-span-1 rounded-xl ${i === 3 || i === 6 || i === 13 ? "col-span-2" : ""
                            }`}
                    >
                        <Suspense fallback={<CardLoading />}>
                            <GameCard gameData={game} />
                        </Suspense>
                    </div>
                ))}
            </div>
        </section >
    )

}