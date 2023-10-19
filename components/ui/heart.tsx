'use client';

import { HeartIcon } from "lucide-react";
import { useState } from "react";
import { toast } from 'sonner'

function Heart(
    {
        gameCode,
        gameName
    }: {
        gameCode?: string,
        gameName?: string

    }) {
    const [color, setColor] = useState('rgba(0, 0, 0, 0.31)');

    function handleClick(e: React.MouseEvent) {
        e.stopPropagation();
        //Add the game code to local storage
        try {
            const favGamesObj = localStorage.getItem("favGames");
            if (favGamesObj) {
                const favoriteGames = JSON.parse(favGamesObj);
                if (favoriteGames.includes(gameCode)) {
                    // If the game code is already in the array, remove it
                    setColor('rgba(0, 0, 0, 0.31)');
                    toast(`💔 ${gameName} removed from favorites`)
                    const updatedGames = favoriteGames.filter((code: string) => code !== gameCode);
                    localStorage.setItem("favGames", JSON.stringify(updatedGames));
                } else {
                    // If the game code is not in the array, add it
                    toast(`💜 ${gameName} added to favorites`)
                    setColor('rgb(239, 68, 68)');
                    favoriteGames.push(gameCode);
                    localStorage.setItem("favGames", JSON.stringify(favoriteGames));
                }
            }
            else {
                // If there are no games in local storage, create a new array with the game code
                setColor('rgb(239, 68, 68)');
                const favoriteGames = [gameCode];
                localStorage.setItem("favGames", JSON.stringify(favoriteGames));
            }
        } catch (error) {
            toast.error(`👾 ${gameName} not added to favorites`, {
                description: 'This game could not be added to your favorites. Please try again later.',
            })
        }
    }

    return (
        <button className="absolute right-0 top-0 cursor-pointer group rounded-full h-8 w-8 p-1 bg-black bg-opacity-70 group-hover:bg-red-500/80 " onClick={handleClick} >
            <HeartIcon stroke="#ffff" fill={color} strokeWidth={1} className="transition rounded-full duration-100 group-hover:scale-110" />
        </button>
    )
}

export default Heart