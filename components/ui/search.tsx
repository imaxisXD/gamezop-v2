'use client';
import React, { useEffect, useRef, useState } from 'react';
import { SearchIcon, XCircle } from 'lucide-react';
import Image from 'next/image';
import { Game } from '@/utils/types';
import Link from 'next/link';

function Search({
    allGames,
    translations
}: {
    allGames: Game[];
    translations: string;
}) {
    const [searchInput, setSearchInput] = useState('');
    const [filteredGames, setFilteredGames] = useState<Game[]>([]);
    const searchInputRef = useRef<HTMLInputElement | null>(null);
    const [openResult, setOpenResult] = useState(false);

    function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
        const inputText = e.target.value;
        setSearchInput(inputText);

        if (inputText.length > 0) {
            const filteredGames = allGames.filter((game) => {
                return game.nameEn.toLowerCase().includes(inputText.toLowerCase());
            });

            setFilteredGames(filteredGames);
            setOpenResult(true); // Open the search results
        } else {
            setFilteredGames([]);
            setOpenResult(false); // Close the search results
        }
    }

    function handleClearSearch() {
        setSearchInput('');
        setFilteredGames([]);
        setOpenResult(false); // Close the search results when clearing
    }

    function handleClickOutside(e: MouseEvent) {
        if (searchInputRef.current && !searchInputRef.current.contains(e.target as Node)) {
            setFilteredGames([]);
            setOpenResult(false); // Close the search results
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="rounded-sm gap-2 w-1/2 max-w-lg flex-grow">
            <div className="relative rounded-sm flex py-1 px-2 justify-center items-center gap-2 bg-navbar">
                <SearchIcon className="pl-2 pr-1 h-8 w-8 text-[#9ba3af]" />
                <input
                    ref={searchInputRef}
                    className="outline-none bg-transparent w-full text-sm text-white font-light"
                    placeholder={translations}
                    value={searchInput}
                    onChange={handleSearch}
                />
                {searchInput && (
                    <XCircle
                        className="h-5 w-5 text-white cursor-pointer"
                        onClick={handleClearSearch}
                    />
                )}
            </div>
            {openResult && ( // Conditionally render search results based on openResult
                <div className="absolute mt-2 bg-navbar w-1/2 max-w-lg z-20 rounded-sm h-auto px-2 py-2">
                    {filteredGames.length === 0 ? (
                        <p className="p-2 border border-white/5 h-28 flex items-center justify-center bg-black rounded-md text-white text-center">No games found.</p>
                    ) : (
                        <ul
                            className='max-h-56 overflow-auto gap-1 no-scrollbar'
                        >
                            {filteredGames.map((game) => (
                                <Link
                                    key={game.code}
                                    href={`https://www.gamezop.com/game/${game?.code}`}
                                    target="_blank"
                                >
                                    <li
                                        key={game.code}
                                        className="p-2 border border-white/5 h-28 bg-black rounded-md hover:bg-black/20 cursor-pointer flex items-center justify-between"
                                    >
                                        <div className="flex items-start flex-col">
                                            <h1 className="text-white">{game.nameEn}</h1>
                                            <h2>{game.categories[0]}</h2>
                                        </div>
                                        <Image
                                            src={`https://static.gamezop.com/${game.code}/square.png`}
                                            height={70}
                                            width={70}
                                            alt={game.nameEn}
                                            className="object-cover rounded-lg"
                                        />
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
}

export default Search;
