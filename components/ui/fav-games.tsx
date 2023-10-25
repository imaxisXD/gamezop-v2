'use client';
import { FavGameData } from '@/utils/types';
import React, { Suspense, useEffect, useState } from 'react';
import CardLoading from './game-card/card-loading';
import GameCardClientSide from './game-card/game-card-client-component';
import Lottie from 'lottie-react';
import Link from 'next/link';
import nothingInFavAnimation from "@/styles/animations/fav-game-animation.json";

function FavGames() {
    const [favoriteGames, setFavoriteGames] = useState<FavGameData[]>([]);

    const getFavoriteGameData = () => {
        const storedFavorites = localStorage.getItem('favGames');
        if (storedFavorites) {
            return JSON.parse(storedFavorites);
        }
        return [];
    };

    useEffect(() => {
        const favoriteGamesData = getFavoriteGameData();
        setFavoriteGames(favoriteGamesData);
    }, []);

    return (
        favoriteGames.length > 0 ? (
            <section className="w-full grid auto-rows-[192px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {favoriteGames.map((game, i) => (
                    <div
                        key={game.gameCode}
                        className={`row-span-1 rounded-xl ${i === 3 || i === 6 || i === 13 ? "col-span-2" : ""}`}
                    >
                        <Suspense fallback={<CardLoading />}>
                            <GameCardClientSide blurData={game.blurImg} gameCode={game.gameCode} gameName={game.gameName} key={game.gameCode} />
                        </Suspense>
                    </div>
                ))}
            </section>
        ) : (
            <section className="flex items-center justify-center flex-col w-full gap-2">
                <Lottie animationData={nothingInFavAnimation} autoplay={true} className='h-96'></Lottie>
                <h3 className='text-2xl text-blue-500'>Nothing added to favorite!</h3>
                <Link
                    href="/"
                    className="px-2 py-2 rounded-md bg-yellow-400 text-black hover:bg-opacity-80"
                >
                    Add Fav Games!
                </Link>
            </section>
        )
    );
}

export default FavGames;
