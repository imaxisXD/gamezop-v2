'use client';
import { Game } from "@/utils/types";
import { SearchIcon, XCircle } from "lucide-react";
import { useState } from "react";

function Search({
    allGames
}: {
    allGames: Game[]
}) {
    const [searchInput, setSearchInput] = useState("");
    function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
        const inputText = e.target.value;
        setSearchInput(inputText);
    }
    function handleClearSearch() {
        setSearchInput("");
    }
    return (
        <div className="rounded-sm gap-2 w-1/2 max-w-lg flex-grow">
            <div className="relative rounded-sm flex py-1 px-2 justify-center items-center gap-2 bg-navbar">
                <SearchIcon className="pl-2 pr-1 h-8 w-8 text-[#9ba3af]" />
                <input
                    className="outline-none bg-transparent w-full text-sm text-white font-light"
                    placeholder="Search games"
                    value={searchInput}
                    onChange={handleSearch}
                />
                {searchInput && <XCircle className="h-5 w-5 text-white cursor-pointer" onClick={handleClearSearch} />}
            </div>
            {searchInput && <div className="absolute mt-2 bg-navbar w-1/2 max-w-lg z-20 rounded-sm h-auto px-2 py-2">
                <ul>
                    <li>
                        JJJS
                    </li>
                    <li>
                        JJJS
                    </li>
                    <li>
                        JJJS
                    </li>
                </ul>
            </div>}
        </div>
    )
}

export default Search