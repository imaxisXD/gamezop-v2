'use client';

import { HeartIcon } from "lucide-react";
import { useState } from "react";



function Heart() {
    const [color, setColor] = useState('rgba(0, 0, 0, 0.31)');
    function handleClick(e: React.MouseEvent) {
        e.stopPropagation();
        //Add the game code to local storage
        setColor('rgb(239 68 68)')
        // On double click remove from local storage
    }

    return (
        <button className="absolute right-0 top-0 cursor-pointer group" onClick={handleClick} >
            <HeartIcon stroke="#ffff" fill={color} strokeWidth={1} className="rounded-full h-8 w-8 bg-black bg-opacity-70 p-1 transition duration-100 group-hover:scale-105 group-hover:bg-red-500/70" />
        </button>
    )
}

export default Heart