export type Game = {
    code: string;
    nameEn: string;
    battleSupported: boolean;
    rating: number;
    totalRating: number;
    name: string;
    categories: string[];
    created_at: string;
    gamePlays: number;
}

export type Categories = {
    action: string;
    sportsRacing: string;
    arcade: string;
    puzzleLogic: string;
    strategy: string;
    adventure: string;
}

export type GameData = {
    data: {
        games: Game[];
        categories: Categories;
        trendingGames: string[];
        gameOfTheWeek: string;
        newlyAddedGames: string[];
    };
    error: string;
    code: string;
}

export type FavGameData = {
    gameCode: string;
    gameName: string;
    image?: string;
    blurImg: string;
    url?: string;
};