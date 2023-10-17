'use client';

import { SearchIcon } from "lucide-react";

function Search() {
    return (
        <div className="rounded-md px-2 flex bg-navbar gap-1 w-1/3">
            <SearchIcon className="pl-2 pr-1 h-9 w-9 text-[#9ba3af]" />
            <input
                className="outline-none bg-navbar w-full"
                placeholder="Search"
            />
        </div>
    )
}

export default Search