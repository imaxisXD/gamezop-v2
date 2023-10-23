'use client';
import { HeartIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from 'sonner';

function Heart({
    blurdata,
    gameCode,
    gameName,
}: {
    gameCode?: string;
    gameName?: string;
    blurdata: string;
}) {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        try {
            let favoriteGames: any[] = [];

            // Retrieve favorite games from local storage
            const favGamesObj = localStorage.getItem("favGames");
            if (favGamesObj) {
                favoriteGames = JSON.parse(favGamesObj);
            }

            const gameIndex = favoriteGames.findIndex((game: any) => game.gameCode === gameCode);

            if (gameIndex !== -1) {
                // Game is already a favorite, so remove it
                favoriteGames.splice(gameIndex, 1);
                toast(`💔 ${gameName} removed from favorites`);
                setIsFavorite(false);
            } else {
                // Add the game to favorites
                favoriteGames.push({
                    gameCode,
                    gameName,
                    blurImg: blurdata,
                });
                toast(`💜 ${gameName} added to favorites`);
                setIsFavorite(true);
            }

            // Update local storage with the updated favorite games
            localStorage.setItem("favGames", JSON.stringify(favoriteGames));
        } catch (error) {
            toast.error(`👾 ${gameName} not added to favorites`, {
                description: "This game could not be added to your favorites. Please try again later.",
            });
        }
    };

    // Check if the game is in favorites on component mount
    useEffect(() => {
        const favGamesObj = localStorage.getItem("favGames");
        if (favGamesObj) {
            const favoriteGames = JSON.parse(favGamesObj);
            setIsFavorite(favoriteGames.some((game: any) => game.gameCode === gameCode));
        }
    }, [gameCode]);

    return (
        <button className="absolute right-0 top-0 cursor-pointer group rounded-full h-8 w-8 p-1 bg-black bg-opacity-70 group-hover:bg-red-500/80 " onClick={toggleFavorite}>
            <HeartIcon stroke="#ffff" fill={isFavorite ? "rgb(239, 68, 68)" : "rgba(0, 0, 0, 0.31)"} strokeWidth={1} className="transition rounded-full duration-100 group-hover:scale-110" />
        </button>
    );
}

export default Heart;
